import { useStaticQuery, graphql } from 'gatsby';

const useBookContestForm = () => {
  const { datoCmsWebsiteForm } = useStaticQuery(BookContestFormQuery);
  return { datoCmsWebsiteForm };
};

export default useBookContestForm;

const BookContestFormQuery = graphql`
  query BookContestFormQuery {
    datoCmsWebsiteForm(id: { eq: "DatoCmsWebsiteForm-121398466" }) {
      id
      heading
      subhead
      callToAction
      pardotFormHandler
    }
  }
`;
