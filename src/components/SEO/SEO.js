import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Facebook from './Facebook';
import Hotjar from './Hotjar';
import Locales from './Locales';
import Twitter from './Twitter';
import UpKeepOGImage from '../../assets/UpKeep_Feature@2x.png';

const SEO = ({
  title,
  indexable = true,
  description,
  imgUrl,
  footerHtml,
  headHtml,
  pathname,
  pageType,
  mainEntity,
  datePublished,
  dateModified,
  schema,
}) => {
  const { site, locales } = useStaticQuery(query);

  const {
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    imgUrl: imgUrl || UpKeepOGImage,
    url: `${siteUrl}${pathname || ''}`,
  };

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': pageType || 'WebPage',
    url: seo.url,
    inLanguage: siteLanguage,
    mainEntityOfPage: seo.url,
    mainEntity: mainEntity || [],
    description: defaultDescription,
    name: defaultTitle,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: author,
    },
    copyrightYear: '2021',
    creator: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: author,
    },
    image: {
      '@type': 'ImageObject',
      url: seo.imgUrl,
    },
  };

  return (
    <>
      <title>{seo.title}</title>
      <Locales url={seo.url} locales={locales.nodes} />
      <script
        src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
        type="text/javascript"
        data-domain-script="22837cad-5e67-4eec-b535-6a38f62fa980"
      />
      <script type="text/javascript">{`function OptanonWrapper() { }`}</script>
      <meta
        name="google-site-verification"
        content="q_TAfZGqwDyUfV4iXOyEBt3xaCcACq1cijbb_TSc-Nk"
      />
      <meta
        name="facebook-domain-verification"
        content="o9f2rhzlbau1fpvzdlin1ltaqfdzu0"
      />
      {seo.title && <meta name="title" content={seo.title} />}
      {seo.description && <meta name="description" content={seo.description} />}
      {!indexable && <meta name="robots" content="noindex, nofollow" />}
      {seo.url && <link rel="canonical" href={seo.url} />}
      {headHtml && headHtml}
      {footerHtml && footerHtml}
      {
        <script type="application/ld+json">
          {JSON.stringify(schema || structuredData)}
        </script>
      }
      <script type="text/javascript">
        {`
              window._6si = window._6si || [];
              window._6si.push(['enableEventTracking', true]);
              window._6si.push(['setToken', '0ef0e3dc53f501b228227aa9660db5f6']);
              window._6si.push(['setEndpoint', 'b.6sc.co']);

              (function() {
              const gd = document.createElement('script');
              gd.type = 'text/javascript';
              gd.async = true;
              gd.src = 'https://j.6sc.co/6si.min.js';
              const s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(gd, s);
            }());
            `}
      </script>
      <Facebook
        description={seo.description}
        image={seo.imgUrl}
        title={seo.title}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={seo.imgUrl}
        description={seo.description}
        username={twitter}
      />
      <Hotjar />
    </>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
    locales: allLocale {
      nodes {
        ns
        language
      }
    }
  }
`;

export default SEO;
