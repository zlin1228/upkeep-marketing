import React from 'react';

const createDataLayer = () => ({
  __html: 'window.dataLayer = window.dataLayer || []',
});
const optimizeAntiFlickerStyle = () => ({
  __html: '.async-hide { opacity: 0 !important}',
});
const optimizeAntiFlickerScript = () => ({
  __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-TJL6ZVR':true});`,
});
const customHeadComponents = [
  <script key="data-layer" dangerouslySetInnerHTML={createDataLayer()} />,
  <style
    key="anti-flicker-style"
    dangerouslySetInnerHTML={optimizeAntiFlickerStyle()}
  />,
  <script
    key="anti-flicker-script"
    dangerouslySetInnerHTML={optimizeAntiFlickerScript()}
  />,
];
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const mergedHeadComponents = [
    ...customHeadComponents,
    ...getHeadComponents(),
  ];
  replaceHeadComponents(mergedHeadComponents);
};
