import { graphql, useStaticQuery } from 'gatsby';

const useStaticHeader = () => {
  const { datoCmsHeader } = useStaticQuery(query);
  return datoCmsHeader;
};

export default useStaticHeader;

export const query = graphql`
  query StaticHeaderQuery($language: String) {
    datoCmsHeader(id: { eq: "DatoCmsHeader-113873604" }) {
      ...datoCmsHeader
    }
  }
`;
