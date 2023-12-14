import { graphql, useStaticQuery } from 'gatsby';

const useStaticFooter = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      datoCmsFooterComponent(id: { eq: "DatoCmsFooterComponent-146528157" }) {
        id
        menu {
          menuItem {
            id
            label
            childMenuItem {
              id
              label
              icon: fontAwesome
              badge
              callToAction {
                label
                url
              }
            }
          }
        }
      }
    }
  `);
  return data?.datoCmsFooterComponent?.menu?.menuItem;
};

export default useStaticFooter;
