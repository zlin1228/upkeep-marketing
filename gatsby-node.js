const path = require(`path`);
const util = require('util');

util.promisify(require('child_process').exec);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/page.js`);
  const blogTemplate = path.resolve(`src/templates/blog.js`);
  const blogAuthorsTemplate = path.resolve(`src/templates/blogAuthors.js`);
  const learningTemplate = path.resolve(`src/templates/learning-detail.js`);
  const integrationsTemplate = path.resolve(`src/templates/integrations.js`);
  const partnershipsTemplate = path.resolve(`src/templates/partnerships.js`);
  const customersTemplate = path.resolve(`src/templates/customers.js`);
  const maintenanceHeroTemplate = path.resolve(
    `src/templates/maintenancehero.js`
  );
  const checkListTemplate = path.resolve(`src/templates/checklist-detail.js`);
  const eventRegistrationTemplate = path.resolve(
    `src/templates/event-registration.js`
  );
  const eventDetailTemplate = path.resolve(`src/templates/event-detail.js`);
  const downloadTemplate = path.resolve(`src/templates/download.js`);
  const podcastDetailTemplate = path.resolve(`src/templates/podcast-detail.js`);
  const maintenanceMavericksTemplate = path.resolve(
    `src/templates/maintenance-mavericks.js`
  );
  const pillarPageTemplate = path.resolve(`src/templates/pillar-page.js`);

  const fetchPages = graphql(`
    query fetchPages {
      allDatoCmsWebsitePage {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const fetchBlogPages = graphql(`
    query fetchBlogPages {
      allDatoCmsBlogPost {
        nodes {
          id
          internalName
          slug
          category {
            id
            slug
            internalName
          }
        }
      }
    }
  `);

  const fetchBlogAuthorsPages = graphql(`
    query fetchBlogAuthorsPages {
      allDatoCmsBlogPost {
        nodes {
          author {
            id
            firstName
            lastName
            role
          }
        }
      }
    }
  `);

  const fetchLearningPages = graphql(`
    query fetchLearningPages {
      allDatoCmsLearningPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const fetchIntegrationsPages = graphql(`
    query fetchIntegrationsPages {
      allDatoCmsIntegration {
        nodes {
          id
          internalName
          slug
          category {
            originalId
            internalName
            slug
          }
        }
      }
    }
  `);

  const fetchPartnershipsPages = graphql(`
    query fetchPartnershipsPages {
      allDatoCmsPartnership {
        nodes {
          id
          internalName
          slug
          category {
            originalId
            internalName
            slug
          }
        }
      }
    }
  `);

  const fetchCustomersPages = graphql(`
    query fetchCustomersPages {
      allDatoCmsCustomerSuccessStory {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const fetchMaintenanceHeroPages = graphql(`
    query fetchMaintenanceHeroPages {
      allDatoCmsMaintenanceHeroPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const fetchTemplatesPages = graphql(`
    query fetchTemplatesPages {
      allDatoCmsTemplateCollection {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const fetchEventPages = graphql(`
    query fetchEventPages {
      allDatoCmsEventPost {
        nodes {
          id
          internalName
          slug
          eventStatus
        }
      }
    }
  `);

  const fetchDownloadPages = graphql(`
    query fetchDownloadPages {
      allDatoCmsDownload {
        nodes {
          id
          slug
          internalName
        }
      }
    }
  `);

  const fetchPodcastDetailPages = graphql(`
    query fetchPodcastPages {
      allDatoCmsPodcast {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const fetchTemplateMaintenanceMavericksPages = graphql(`
    query fetchTemplateMaintenanceMavericksPages {
      allDatoCmsTemplateMaintenanceMaverick {
        nodes {
          id
          internalName
          slug
        }
      }
    }
  `);

  const fetchPillarPages = graphql(`
    query fetchPillarPages {
      allDatoCmsPillarTemplate {
        nodes {
          id
          slug
        }
      }
    }
  `);

  // Promise.all() allows above queries to run parallel, resolving only when all have finished.
  const [
    pages,
    blogPages,
    blogAuthorsPages,
    learningPages,
    integrationsPages,
    partnershipsPages,
    customersPages,
    maintenanceHeroPages,
    templatesPages,
    eventPages,
    downloadPages,
    podcastDetailPages,
    templateMaintenanceMavericksPages,
    pillarPages,
  ] = await Promise.all([
    fetchPages,
    fetchBlogPages,
    fetchBlogAuthorsPages,
    fetchLearningPages,
    fetchIntegrationsPages,
    fetchPartnershipsPages,
    fetchCustomersPages,
    fetchMaintenanceHeroPages,
    fetchTemplatesPages,
    fetchEventPages,
    fetchDownloadPages,
    fetchPodcastDetailPages,
    fetchTemplateMaintenanceMavericksPages,
    fetchPillarPages,
  ]).catch(err => console.log('Promise.all() failure: ', err));

  // =============================[ CREATE PAGES ]=================================//

  pages.data.allDatoCmsWebsitePage.nodes.forEach(node => {
    const { id, slug } = node;
    const ignoreSlugs = ['/', '', '404']; // add slugs of pages to ignore here
    const ignorePage = ignoreSlugs.includes(slug);
    if (ignorePage) return;

    const pagePath = id === 'DatoCmsWebsitePage-102567126' ? '/' : `/${slug}`;

    createPage({
      path: pagePath,
      component: pageTemplate,
      context: {
        id,
        slug,
        queryBlog: id === 'DatoCmsWebsitePage-143649325',
        queryCustomerStories: id === 'DatoCmsWebsitePage-121842416',
        queryEvents: id === 'DatoCmsWebsitePage-122751042',
        queryLearning: id === 'DatoCmsWebsitePage-141201380',
        queryIntegrations: id === 'DatoCmsWebsitePage-121842617',
      },
    });
  });

  blogPages.data.allDatoCmsBlogPost.nodes.forEach(node => {
    const { id, slug, internalName, category } = node;

    if (!slug || slug === null) return;

    createPage({
      path: `/blog/${slug}`,
      component: blogTemplate,
      context: {
        id,
        slug,
        internalName,
        category: category !== null ? category.internalName : '',
      },
    });
  });

  blogAuthorsPages.data.allDatoCmsBlogPost.nodes.forEach(node => {
    const { author } = node;
    if (author === null) {
      return;
    }
    const { id, firstName, lastName } = author;

    let slug;
    if (firstName && lastName) {
      slug = `${firstName
        .toLowerCase()
        .trim()}-${lastName.toLowerCase().trim()}`;
    }
    createPage({
      path: `/blog/author/${slug}`,
      component: blogAuthorsTemplate,
      context: {
        id,
        firstName,
        lastName,
        slug,
      },
    });
  });

  learningPages.data.allDatoCmsLearningPost.nodes.forEach(node => {
    const { id, slug } = node;
    createPage({
      path: `/learning/${slug}`,
      component: learningTemplate,
      context: {
        id,
        slug,
      },
    });
  });

  integrationsPages.data.allDatoCmsIntegration.nodes.forEach(node => {
    const { id, slug, category } = node;
    let catslug = 'custom';
    if (category && category.slug) {
      catslug = category.slug;
    }
    createPage({
      path: `/integrations/${slug}`,
      component: integrationsTemplate,
      context: {
        id,
        slug,
        catslug,
      },
    });
  });

  partnershipsPages.data.allDatoCmsPartnership.nodes.forEach(node => {
    const { id, slug, category } = node;
    let catslug = 'custom';
    if (category && category.slug) {
      catslug = category.slug;
    }
    createPage({
      path: `/partnerships/${slug}`,
      component: partnershipsTemplate,
      context: {
        id,
        slug,
        catslug,
      },
    });
  });

  customersPages.data.allDatoCmsCustomerSuccessStory.nodes.forEach(node => {
    const { id, slug } = node;
    createPage({
      path: `/product/customers/${slug}`,
      component: customersTemplate,
      context: {
        id,
        slug,
      },
    });
  });

  maintenanceHeroPages.data.allDatoCmsMaintenanceHeroPost.nodes.forEach(
    node => {
      const { id, slug } = node;
      createPage({
        path: `/maintenancehero/${slug}`,
        component: maintenanceHeroTemplate,
        context: {
          id,
          slug,
        },
      });
    }
  );

  templatesPages.data.allDatoCmsTemplateCollection.nodes.forEach(node => {
    const { id, slug } = node;
    createPage({
      path: `/templates/${slug}`,
      component: checkListTemplate,
      context: {
        id,
        slug,
      },
    });
  });

  eventPages.data.allDatoCmsEventPost.nodes.forEach(node => {
    const { id, slug, internalName, eventStatus } = node;
    let template = eventDetailTemplate;
    if (eventStatus === 'upcoming' || eventStatus === 'live-event') {
      template = eventRegistrationTemplate;
    }
    createPage({
      path: `/events/${slug}`,
      component: template,
      context: {
        id,
        slug,
        internalName,
      },
    });
  });

  downloadPages.data.allDatoCmsDownload.nodes.forEach(node => {
    const { id, slug, internalName } = node;
    createPage({
      path: `/downloads/${slug}`,
      component: downloadTemplate,
      context: {
        id,
        slug,
        internalName,
      },
    });
  });

  podcastDetailPages.data.allDatoCmsPodcast.nodes.forEach(node => {
    const { id, slug } = node;
    createPage({
      path: `/podcasts/${slug}`,
      component: podcastDetailTemplate,

      context: {
        id,
        slug,
      },
    });
  });

  templateMaintenanceMavericksPages.data.allDatoCmsTemplateMaintenanceMaverick.nodes.forEach(
    node => {
      const { id, slug } = node;
      createPage({
        path: `/resources/maintenance-mavericks/${slug}`,
        component: maintenanceMavericksTemplate,
        context: {
          id,
          slug,
        },
      });
    }
  );

  pillarPages.data.allDatoCmsPillarTemplate.nodes.forEach(node => {
    const { id, slug } = node;
    createPage({
      path: `/${slug}`,
      component: pillarPageTemplate,
      context: {
        id,
        slug,
      },
    });
  });
};
