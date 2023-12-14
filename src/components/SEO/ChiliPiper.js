import React from 'react';
import { Script } from 'gatsby';

const ChiliPiper = ({ pathname }) => {
  if (!pathname) {
    return null;
  }

  return (
    <>
      <Script>
        {`
            function q(a) {
              return function () {
                ChiliPiper[a].q = (ChiliPiper[a].q || []).concat([arguments]);
              };
            }
            window.ChiliPiper =
              window.ChiliPiper ||
              "submit scheduling showCalendar submit widget bookMeeting"
                .split(" ")
                .reduce(function (a, b) {
                  a[b] = q(b);
                  return a;
                }, {});
            ChiliPiper.scheduling("onupkeep", "demo-request-router", {
              title: "Thanks! What time works best for a quick call?",
            });
        `}
      </Script>
      <Script
        src="https://js.chilipiper.com/marketing.js"
        type="text/javascript"
        async
      />
    </>
  );
};

export default ChiliPiper;
