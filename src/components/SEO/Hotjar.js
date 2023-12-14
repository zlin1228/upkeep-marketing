import React from 'react';

const Hotjar = () => (
  <script>
    {`
        document.addEventListener('DOMContentLoaded', () => {
          if (typeof window !== undefined) {
            if (window.hj && typeof window.hj === 'function') {
              const userId = null;
              const userAttributes = {
                type: 'Unknown visitor',
              };
              window.hj('identify', userId, userAttributes);
            }
          }
        })
      `}
  </script>
);

export default Hotjar;
