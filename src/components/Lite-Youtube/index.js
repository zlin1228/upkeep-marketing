export class LiteYTEmbed extends HTMLElement {
  constructor() {
    super();
    this.iframeLoaded = false;
    this.setupDom();
  }

  static get observedAttributes() {
    return ['videoid'];
  }

  connectedCallback() {
    if (this.getAttribute('data-preload-iframe') === 'true') {
      LiteYTEmbed.warmConnections;
      this.addIframe();
    }
    this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {
      once: true,
    });
    this.addEventListener('click', () => this.addIframe());
  }

  get videoId() {
    return encodeURIComponent(this.getAttribute('videoid') || '');
  }

  set videoId(id) {
    this.setAttribute('videoid', id);
  }

  get videoTitle() {
    return this.getAttribute('videotitle') || 'Video';
  }

  set videoTitle(title) {
    this.setAttribute('videotitle', title);
  }

  get videoPlay() {
    return this.getAttribute('videoPlay') || 'Play';
  }

  set videoPlay(name) {
    this.setAttribute('videoPlay', name);
  }

  get videoStartAt() {
    return Number(this.getAttribute('videoStartAt') || '0');
  }

  set videoStartAt(time) {
    this.setAttribute('videoStartAt', String(time));
  }

  get autoLoad() {
    return this.hasAttribute('autoload');
  }

  set autoLoad(value) {
    if (value) {
      this.setAttribute('autoload', '');
    } else {
      this.removeAttribute('autoload');
    }
  }

  set autoPlay(value) {
    if (value) {
      this.setAttribute('autoplay', 'autoplay');
    } else {
      this.removeAttribute('autoplay');
    }
  }

  get posterQuality() {
    return this.getAttribute('posterquality') || 'hqdefault';
  }

  set posterQuality(quality) {
    this.setAttribute('posterquality', quality);
  }

  get params() {
    return `start=${this.videoStartAt}&${this.getAttribute('params')}`;
  }

  setupDom() {
    const shadowDom = this.attachShadow({ mode: 'open' });
    shadowDom.innerHTML = `
        <style>
          :host {
            contain: content;
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
            padding-bottom: calc(100% / (16 / 9));
          }
  
          #frame, #fallbackPlaceholder, iframe {
            position: absolute;
            width: 100%;
            height: 100%;
          }
  
          #frame {
            cursor: pointer;
          }
  
          #fallbackPlaceholder {
            object-fit: cover;
          }
  
          #frame::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
            background-position: top;
            background-repeat: repeat-x;
            height: 60px;
            padding-bottom: 50px;
            width: 100%;
            transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
            z-index: 1;
          }
          /* play button */
          .lty-playbtn {
            width: 70px;
            height: 70px;
            background-color: #DE1824;
            z-index: 1;
            opacity: 1;
            border-radius: 9999px;
            transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
            border: 0;
            cursor: pointer;
            box-shadow: 0px 0px 20px 10px rgb(0 0 0 / 11%);
          }
          #frame:hover .lty-playbtn {
            opacity: 0.8;
          }
          /* play button triangle */
          .lty-playbtn:before {
            content: '';
            border-style: solid;
            border-width: 13px 0 13px 23px;
            border-color: transparent transparent transparent #fff;
          }
          .lty-playbtn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
          }
          .lty-playbtn:before {
            position: absolute;
            top: 50%;
            left: 55%;
            transform: translate3d(-50%, -50%, 0);
          }
  
          /* Post-click styles */
          .lyt-activated {
            cursor: unset;
          }
  
          #frame.lyt-activated::before,
          .lyt-activated .lty-playbtn {
            display: none;
          }
        </style>
        <div id="frame">
          <picture>
            <source id="webpPlaceholder" type="image/webp">
            <source id="jpegPlaceholder" type="image/jpeg">
            <img id="fallbackPlaceholder" referrerpolicy="origin" alt="">
          </picture>
          <button class="lty-playbtn"></button>
        </div>
      `;
    this.domRefFrame = this.shadowRoot.querySelector('#frame');
    this.domRefImg = {
      fallback: this.shadowRoot.querySelector('#fallbackPlaceholder'),
      webp: this.shadowRoot.querySelector('#webpPlaceholder'),
      jpeg: this.shadowRoot.querySelector('#jpegPlaceholder'),
    };
    this.domRefPlayButton = this.shadowRoot.querySelector('.lty-playbtn');
  }

  setupComponent() {
    this.initImagePlaceholder();
    this.domRefPlayButton.setAttribute(
      'aria-label',
      `${this.videoPlay}: ${this.videoTitle}`
    );
    this.setAttribute('title', `${this.videoPlay}: ${this.videoTitle}`);
    if (this.autoLoad) {
      this.initIntersectionObserver();
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case 'videoid': {
        if (oldVal !== newVal) {
          this.setupComponent();
          // if we have a previous iframe, remove it and the activated class
          if (this.domRefFrame.classList.contains('lyt-activated')) {
            this.domRefFrame.classList.remove('lyt-activated');
            this.shadowRoot.querySelector('iframe').remove();
            this.iframeLoaded = false;
          }
        }
        break;
      }
      default:
        break;
    }
  }

  addIframe(isIntersectionObserver = false) {
    if (!this.iframeLoaded) {
      // Don't autoplay the intersection observer injection, it's weird
      const autoplay = isIntersectionObserver ? 0 : 1;
      const iframeHTML = `
  <iframe frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    src="https://www.youtube.com/embed/${this.videoId}?autoplay=${autoplay}&rel=0&${this.params}"
  ></iframe>`;
      this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
      this.domRefFrame.classList.add('lyt-activated');
      this.iframeLoaded = true;
    }
  }

  initImagePlaceholder() {
    // we don't know which image type to preload, so warm the connection
    LiteYTEmbed.addPrefetch('preconnect', 'https://i.ytimg.com/');
    const posterUrlWebp = `https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`;
    const posterUrlJpeg = `https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;
    this.domRefImg.webp.srcset = posterUrlWebp;
    this.domRefImg.jpeg.srcset = posterUrlJpeg;
    this.domRefImg.fallback.src = posterUrlJpeg;
    this.domRefImg.fallback.setAttribute(
      'aria-label',
      `${this.videoPlay}: ${this.videoTitle}`
    );
    this.domRefImg.fallback.setAttribute(
      'alt',
      `${this.videoPlay}: ${this.videoTitle}`
    );
  }

  initIntersectionObserver() {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window
    ) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.iframeLoaded) {
            LiteYTEmbed.warmConnections();
            this.addIframe(true);
            observer.unobserve(this);
          }
        });
      }, options);
      observer.observe(this);
    }
  }

  static addPrefetch(kind, url, as) {
    const linkElem = document.createElement('link');
    linkElem.rel = kind;
    linkElem.href = url;
    if (as) {
      linkElem.as = as;
    }
    linkElem.crossOrigin = 'true';
    document.head.append(linkElem);
  }

  static warmConnections() {
    if (LiteYTEmbed.preconnected) return;
    LiteYTEmbed.addPrefetch('preconnect', 'https://s.ytimg.com');
    LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube.com');
    LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');
    LiteYTEmbed.addPrefetch(
      'preconnect',
      'https://googleads.g.doubleclick.net'
    );
    LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');
    LiteYTEmbed.preconnected = true;
  }
}
LiteYTEmbed.preconnected = false;
customElements.define('lite-youtube', LiteYTEmbed);
