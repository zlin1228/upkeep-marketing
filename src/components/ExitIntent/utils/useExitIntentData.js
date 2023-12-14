import { graphql, useStaticQuery } from 'gatsby';

const useExitIntentData = () => {
  const { datoCmsExitIntentComponent } = useStaticQuery(graphql`
    query ExitIntentComponent {
      datoCmsExitIntentComponent(
        id: { eq: "DatoCmsExitIntentComponent-76119061" }
      ) {
        id
        internalName
        heading
        subhead
        form
        formLabel
        formHandler
        button
        label
        calltoaction
        link {
          label
          url
        }
        image {
          image {
            alt
            url
          }
        }
        downloadableAsset {
          url
        }
      }
    }
  `);
  return { datoCmsExitIntentComponent };
};

export default useExitIntentData;
