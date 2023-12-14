export const resourcesData = [
  'events',
  'learning',
  'blog',
  'podcasts',
  'downloads',
  'tools',
  'templates',
];
export const headerData = [
  {
    title: 'Events',
    url: 'events',
  },
  {
    title: 'Learning',
    url: 'learning',
  },
  {
    title: 'Blog',
    url: 'blog',
  },
  {
    title: 'Podcasts',
    url: 'podcasts',
  },
  {
    title: 'Downloads',
    url: 'downloads',
  },
  {
    title: 'Tools',
    url: 'tools',
  },
  {
    title: 'Templates',
    url: 'templates',
  },
];
export const toolsData = [
  {
    id: 'DatoCmsTool_8f2288112',
    slug: '/checklist-generator',
    heading: 'Checklist Generator',
    subhead:
      "Optimize your workflow with UpKeep's personalized checklist generator. Tailored to your needs, start now to improve productivity and efficiency.",
    tags: ['Tools'],
    image: {
      images: {
        sources: [],
        fallback: {
          src:
            'https://www.datocms-assets.com/38028/1681152754-upkeep-tools-thumbnail.png?auto=format&w=1920',
          srcSet:
            'https://www.datocms-assets.com/38028/1681152754-upkeep-tools-thumbnail.png?auto=format&dpr=0.25&w=1920 480w,\nhttps://www.datocms-assets.com/38028/1681152754-upkeep-tools-thumbnail.png?auto=format&dpr=0.5&w=1920 960w,\nhttps://www.datocms-assets.com/38028/1681152754-upkeep-tools-thumbnail.png?auto=format&w=1920 1920w',
          sizes: '(min-width: 1920px) 1920px, 100vw',
        },
      },
      layout: 'constrained',
      placeholder: {
        fallback:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAVCAIAAAClsQv6AAAAAXNSR0IArs4c6QAABOdJREFUSEutVUuPHdURrtfp7nu779gzd8aDPRnbvORgwFFQIi9AiKCQRRZhnfAbyCbrLLNkz4o1GxZI7CAghMQCIWEhkkCMMXgE2PF45j6mn+ecKhY9Y987IKEkfKvWUZ36qup89TXicy8ZZ8BD3r2SfvF6sbJWpFR6NIOyqmAZIzTPAiIxxBADIQGiajQ7FghmRggrA24CttW8e/APfvPy+esvU6g4S0SmX5zwO3Kwo/UkFGerE4+E2Texa3Q5ESJeBL95/7mHLj5yduu+eVmL8OnNjbKqfYiIuBicOEE3KMe/ijFiO8XY8OTfXXZf5cYiu58Q0Tg9M49+qtoOt/yppwffXqHggRzAPVozuwLOrt3Qq18SISJF1f3JjAhpmQ8AUyfBFdMzz7j4drr/OZa3XHd1/osXgRjl8p8RbHTz3Wjku8YNViQbtfP/mEaAY4n+CyAiIEXJWTuyltkxcR3JAESzVTSNwSs6QKLYSOdbs/+HDwDMDCxQs4fMyIIIRIj1HMDw7KNPmtmd/QkRIYJaP8vv6eF/BN5LF7vm5y8AsvgQ7EhwiISm9pPxwd3SmYjI+eomIMlkNu8nSET5cFjVtfd+UX5EBP2gABChLw8RD08ArH+5wxCw5Y1BgKh6YmVUFPk3N/6uGoWPMqpq0zaqx+VeVhUCihMwCzESEjHFEJmJmUMIgKiqiCjMaibMi9f7guqm8SGk+YoBsBTr/QUACCEuFYjYdf753z83Xjt5cFCtj1efuPTo/ee3b966/fjFCzFqWVYXHn7AiRuvnlwZFW3bjfJh5z0sAxFDiG3bjldPZlkmo6Iws4OyRMRj/QGAmf36iUsPnj87nc3e/+CjNEmquv7bX/9ybnvr+pc7k9n84QfOlVWNCE3bDQeDN99579XX3hgVeVQ9xsrM+5MpIOK5x58G09t39r7P11Oe3jy1enKlyPNPr17bGK/l+RAARKTzXeISIoxRy6pi5nw4+Odnnx8clCKy/KKHK2dmiIDFmYsAwCKqpsul9ei8jzGqapamIcQYIyCaGSGqGZghIhEZmKoOsoyZ7/KZmYhkado0TYiHKhGlBAAYfoCsR5YkvSLVzDnXi3ZBunC3HwRQ1cX+eg47OkJiAJPmwh/BIv7jFeP0B/2mb6X/PrYAPwozizE2bauqBjBeGSCiyN6/AIwlMaSjchBsqWkzIIIFCzSAo2aXCWAZ4hJTNVNEZLBS1gFQkhtvIeFwdSuELsQYfWuhVc4A7gmYCEOId62k94F7boCoqgAosrSRhFA4bbzWXoWFLOye+g0gY3rpTwCW7X2sKBB9KH4Wiu3h3seobf8XDCGc2hivj9f29idFPoxRq7pOnDMzZu7FwkxEtPP1t03TESEAgClIpmcu0+S6Ta5n+SgVmtC6GUi78UuwKLc+NEZqJmHzst9+Vqpr4qMP2ufd25+WVe1E4MinDsqKiIp8yEzeh9t39mOMwYdDPkAwVUrqzaec9+7OZ2mSFPmg3PlUTfH0Y88a4Pz2DS22mu3f5rsfZN1uW5emYfFpOu83xmuDQZY4l6ZJ23V11SRpIsyI+NXO196HxcFmaQLISb7aVrOmnLEIWqi2fwdIIrECQAMAYhusIxh3E1NWtUVzSJNkMp3tTaa9apio3wdVQwQRcW5p/REJEVyYee0AUdUgBnMFIH0H6ETjAvaByPYAAAAASUVORK5CYII=',
      },
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'DatoCmsTool_8f228816',
    slug: '/resources/roi-calculator',
    heading: 'ROI Calculator',
    subhead:
      "By answering a few simple questions, you can determine the return on investment of using UpKeep's computerized maintenance management system.",
    tags: ['Tools'],

    image: {
      images: {
        sources: [],
        fallback: {
          src:
            'https://www.datocms-assets.com/38028/1616703527-roi-calculator-thumbnail.png?auto=format&w=1920',
          srcSet:
            'https://www.datocms-assets.com/38028/1616703527-roi-calculator-thumbnail.png?auto=format&dpr=0.25&w=1920 480w,\nhttps://www.datocms-assets.com/38028/1616703527-roi-calculator-thumbnail.png?auto=format&dpr=0.5&w=1920 960w,\nhttps://www.datocms-assets.com/38028/1616703527-roi-calculator-thumbnail.png?auto=format&w=1920 1920w',
          sizes: '(min-width: 1920px) 1920px, 100vw',
        },
      },
      layout: 'constrained',
      placeholder: {
        fallback:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAVCAIAAAClsQv6AAAAAXNSR0IArs4c6QAABOdJREFUSEutVUuPHdURrtfp7nu779gzd8aDPRnbvORgwFFQIi9AiKCQRRZhnfAbyCbrLLNkz4o1GxZI7CAghMQCIWEhkkCMMXgE2PF45j6mn+ecKhY9Y987IKEkfKvWUZ36qup89TXicy8ZZ8BD3r2SfvF6sbJWpFR6NIOyqmAZIzTPAiIxxBADIQGiajQ7FghmRggrA24CttW8e/APfvPy+esvU6g4S0SmX5zwO3Kwo/UkFGerE4+E2Texa3Q5ESJeBL95/7mHLj5yduu+eVmL8OnNjbKqfYiIuBicOEE3KMe/ijFiO8XY8OTfXXZf5cYiu58Q0Tg9M49+qtoOt/yppwffXqHggRzAPVozuwLOrt3Qq18SISJF1f3JjAhpmQ8AUyfBFdMzz7j4drr/OZa3XHd1/osXgRjl8p8RbHTz3Wjku8YNViQbtfP/mEaAY4n+CyAiIEXJWTuyltkxcR3JAESzVTSNwSs6QKLYSOdbs/+HDwDMDCxQs4fMyIIIRIj1HMDw7KNPmtmd/QkRIYJaP8vv6eF/BN5LF7vm5y8AsvgQ7EhwiISm9pPxwd3SmYjI+eomIMlkNu8nSET5cFjVtfd+UX5EBP2gABChLw8RD08ArH+5wxCw5Y1BgKh6YmVUFPk3N/6uGoWPMqpq0zaqx+VeVhUCihMwCzESEjHFEJmJmUMIgKiqiCjMaibMi9f7guqm8SGk+YoBsBTr/QUACCEuFYjYdf753z83Xjt5cFCtj1efuPTo/ee3b966/fjFCzFqWVYXHn7AiRuvnlwZFW3bjfJh5z0sAxFDiG3bjldPZlkmo6Iws4OyRMRj/QGAmf36iUsPnj87nc3e/+CjNEmquv7bX/9ybnvr+pc7k9n84QfOlVWNCE3bDQeDN99579XX3hgVeVQ9xsrM+5MpIOK5x58G09t39r7P11Oe3jy1enKlyPNPr17bGK/l+RAARKTzXeISIoxRy6pi5nw4+Odnnx8clCKy/KKHK2dmiIDFmYsAwCKqpsul9ei8jzGqapamIcQYIyCaGSGqGZghIhEZmKoOsoyZ7/KZmYhkado0TYiHKhGlBAAYfoCsR5YkvSLVzDnXi3ZBunC3HwRQ1cX+eg47OkJiAJPmwh/BIv7jFeP0B/2mb6X/PrYAPwozizE2bauqBjBeGSCiyN6/AIwlMaSjchBsqWkzIIIFCzSAo2aXCWAZ4hJTNVNEZLBS1gFQkhtvIeFwdSuELsQYfWuhVc4A7gmYCEOId62k94F7boCoqgAosrSRhFA4bbzWXoWFLOye+g0gY3rpTwCW7X2sKBB9KH4Wiu3h3seobf8XDCGc2hivj9f29idFPoxRq7pOnDMzZu7FwkxEtPP1t03TESEAgClIpmcu0+S6Ta5n+SgVmtC6GUi78UuwKLc+NEZqJmHzst9+Vqpr4qMP2ufd25+WVe1E4MinDsqKiIp8yEzeh9t39mOMwYdDPkAwVUrqzaec9+7OZ2mSFPmg3PlUTfH0Y88a4Pz2DS22mu3f5rsfZN1uW5emYfFpOu83xmuDQZY4l6ZJ23V11SRpIsyI+NXO196HxcFmaQLISb7aVrOmnLEIWqi2fwdIIrECQAMAYhusIxh3E1NWtUVzSJNkMp3tTaa9apio3wdVQwQRcW5p/REJEVyYee0AUdUgBnMFIH0H6ETjAvaByPYAAAAASUVORK5CYII=',
      },
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'DatoCmsTool_b767f8cb',
    slug: '/resources/calculators',
    heading: 'Maintenance Calculators',
    subhead: `With UpKeep\'s maintenance calculators, you\'ll be able to calculate all kinds of maintenance-related metrics quickly and efficiently.`,
    tags: ['Tools'],
    image: {
      images: {
        sources: [],
        fallback: {
          src:
            'https://www.datocms-assets.com/38028/1616703540-maintenance-calculators-thumbnail.png?auto=format&w=1920',
          srcSet:
            'https://www.datocms-assets.com/38028/1616703540-maintenance-calculators-thumbnail.png?auto=format&dpr=0.25&w=1920 480w,\nhttps://www.datocms-assets.com/38028/1616703540-maintenance-calculators-thumbnail.png?auto=format&dpr=0.5&w=1920 960w,\nhttps://www.datocms-assets.com/38028/1616703540-maintenance-calculators-thumbnail.png?auto=format&w=1920 1920w',
          sizes: '(min-width: 1920px) 1920px, 100vw',
        },
      },
      layout: 'constrained',
      placeholder: {
        fallback:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAVCAIAAAClsQv6AAAAAXNSR0IArs4c6QAABGBJREFUSEuVVsuOHFUSPfG4mVXd7fbbpg3SCMuWvGABDNLwFSxYzcfMZ7AbjcQ/sIQPQCxYICHE4IVtcFu0n+WurqrMvBGHRVa3y+02iKNU6t7MuBnnRsSJm9J89t9+CADFNZKZhGBnUlZD1JoQwQZ2s+tLC7OIrEFVESCSxN+AF5MaAqBxrcGOWUz0dU8jRHC7e6Lv3ty9cR21/nDv2VDz8m772+OjbgicteRMuKk2TgJmKkKCxQxnLSfx/fQGH63w8D4EIkLyxbyD4C3+iLO2732NVR/jpAYjcgjuTPwMW4AjFx3Hb/M0mlJVSlF5g76/4kGQBPH3MvMWiMhW6ypSI0859cYNAIm2mJv2NYqrvE5/nJEQgFjf/wykmqrI0WqIPG3rJCNIIMnIjKQG3davBSDJIARqmklVTdJ0zWlkMA50o3oFIBgbE0AgBMX7mrUmgE5Qkwx2GcV1/UWybax1q5mL2QqTkosejcV8wDpNst4+JCOx1YgKRyoi08b6miecRnruJtWEQHGVYL8hElFhV9+7cf4///7ocDH8cO/pzXd2Hzye713cejxbDZGLrk4bc9PZUd/X3Lu09eXXP7+cdzAFQKK4rtlvRMNdtXFilIsQQHFdh4KAyLKrX3z148Wd5tM711d9PJ93mXz/nXO/7L/cav3Gpa1fn8yv7E5q5JXdVo4DDkAE/RBdzdbVTZddAJg2dlokNbJGbk8cApJSbP/p0f7+7NLVnW++e4CjHhPHqkIEjaGrcEXkupxMca4VU5ICIbkaAkQ3ZBIRCaJX8RNJJJEkiM0SExF29ZMP9j65ffXuo5fvXt6+en7y/d0nSf7rzrWfHry4tbf7//0ZiZ2Jf/vzwf39mRQjx0CKm9aabuImQxUITMWbogAITIqFaVejeU0khOBwOcxXw/UL0w9vXl719Z+3r1zYbk3l41tXXi76T+9cO3ixbIs9er64f++ZNH5SK5NivUjjaipZCKCYys7n/xu3P2kskt0QxbUttujq2NZFwCHaadN1FSCCMAEEkXDFEHBDDYjAFLqWsJlut37UDRF00+K67CuASfENkQyoSSa7PorpSWxJSLGuq1ABRQpIAiLFSErrTEr7KkHrjIy6TIIIUpNjPSbprtKLACymQA5JNz11kpAY1SaCsaGPFa2iBEXkzR456nKr8b5m42qmAEm0ru6u50xImIqbtoWqkskInura6x5SE8cNjyRURPVtLZDH12g7PvFlF5B1YwNEBCRrHBfdyWISQ/zjvQvXzk8PZksRtMUARPDR88XRYYdi2MD4wWVfkVgli8tQE4SI+FADb0Kw6Q/ktPWy3Qw1D2bLbggAqz4atxo5bcx2J0ddjXj1F7EWiWplmomrDkIKTcX/8jQXgMSlc+3exa0hSDCCIojk4aK/dmEamaZ6d382X4SIcGPlpLG+HouEa5GcfRRvggBUHh7MH/5+CADYOHQFv/0+X2/JBKqvZZRY9hGRSRbT1RAAROQPdx6x9HvTCnMAAAAASUVORK5CYII=',
      },
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'DatoCmsTool_a32e1f6e',
    slug: '/resources/code-generator',
    heading: 'QR Code Generator',
    subhead:
      'Generate QR codes to easily manage inventory and assets with free maintenance management software by UpKeep.',
    tags: ['Tools'],
    image: {
      images: {
        sources: [],
        fallback: {
          src:
            'https://www.datocms-assets.com/38028/1616703535-qr-code-generator-thumbnail.png?auto=format&w=1920',
          srcSet:
            'https://www.datocms-assets.com/38028/1616703535-qr-code-generator-thumbnail.png?auto=format&dpr=0.25&w=1920 480w,\nhttps://www.datocms-assets.com/38028/1616703535-qr-code-generator-thumbnail.png?auto=format&dpr=0.5&w=1920 960w,\nhttps://www.datocms-assets.com/38028/1616703535-qr-code-generator-thumbnail.png?auto=format&w=1920 1920w',
          sizes: '(min-width: 1920px) 1920px, 100vw',
        },
      },
      layout: 'constrained',
      placeholder: {
        fallback:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAVCAIAAAClsQv6AAAAAXNSR0IArs4c6QAABFJJREFUSEuNVstuXEUQPae6+s6dccYOCUlwRCxC2AASj02WiF9AwFew4IsQK8QeIcQWgdgRHhISZhPCwwFi4niC58693V3FomccYw+P2l2pqutxzqm6fPvpa3kYSs4UAeBmoqox9kdH7o6/W3tuWtIAwIqVkilCwMxwxvNfTM3MzCQEisDdRbwUNM0aX/LyjRsUGU+nAH7+9tuS07nHLhzs/ZIWi1rx/zFNfS8iIFPfwz2ORk6ur9r9x2++hrubQYSkW5kfHFBkbb6zQ6qmBAAQEBF3B7nWb2nuAJYJ3EnBOnd3DzEGVQAkHeCJCrR6mJmoArCcHfiPxP/DJARtmpIz3JddidRxqgOqaqUcdyAiawfLWgfpZkvgq9taINytlKHraq8ALOc4HksIqjECKDmTBBliPB0MAGAFm4S7Ns3QdSSb8djdLecQo5VyKgBACCGo5mE4ftZyVncnSVKCgkhdF9v2bL48DBd3dkrKGuPB3b0rT9/Iabi7+31sR+Pp5mz/3mRri2vgYMm51krSS0l9rwAcoIg26/sDmVPavHzl5mtvnN/ePr999ZN337l0/frRg4NnX3mV5M6LL939fvfz99/Lw3Aqq8NVYzMeB9WSs1eMh67TprFSSs4A6tyW1K0IuQfV+eGD/Z/uxPF4b/e7+3s/T7a2QGxcuOBmD//Y37x8uaL7iHfuJN2spESRkrObiQhF+Na1J0geI+GOoEFCeLR9SMs5tm2I8fc7ewQ0Ag4AJYMCEqlgstG0Gxs1xN3jaKSjUSVRfZwilRAKoOTs7hICAFjJyZoVzWqvJG++/ub57e17t29bybkf6mBSv7h4bSf1/dH9+/PZ4e5nn4YYH7HXva5SCepuMAuqEoKWlCWIhFA1tOTeibBadTebTba2nnrp5WGx+POP/Z0XXrx96wsJOtnaHBaLJ597/quPPyppiM3IvKyqpbtbKdo0VlxjtFIoonX4levuLsf9nTCSX374AchhPg8xullVpzaNm61q82ayYXZCKmRVSB6Guo8YggAaYiw5E4htixUUp7YPQ4A73NtzU3d7tMPMUOHA+oXg5kG1GY9zSiUlKwWkViKVnGkGYAnqqWB3khCBO+sqrnKu+VbOZxK6wyWEPAwgc9+HpoG7hhhB1g9gtV1PigSAe84JvmJTCCJipfiKipXVIcaTuvR6cypXAVElaWY6dB3W2RIksqR05Zlnphce7x4eAoxt281mm5cuHf72axy17XQ6f/AgDcN4c3P/zp3Fw5mo1lpJatPklNzMgdFkUtWidQPwzFi4aldCOPhlr5vNphcvpsWimx2a2dGBDotFKaWfzylMi66bHeah54mT4O4iAT6kvq9Xvf4L6PEo/ulcUSQt5mblsatXg8a+E6GI6nhzK7aj1HXNZENCuLu7G9v25GBJlpIBNG1bBVN3+RpJnDZ30eil/PDlLYLLXyQ3gl7FZ0aRelXORmuMEsLx8QDxF20awjN94flEAAAAAElFTkSuQmCC',
      },
      width: 1920,
      height: 1080,
    },
  },
];
