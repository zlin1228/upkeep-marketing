import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { ViewWrapper, ViewMoreButton } from './styles/ViewMore';

const ViewMore = ({
  loopWithSlice,
  countPerPage,
  arrayToSlice,
  activeArray,
  contentType,
}) => {
  const { t } = useTranslation();
  const [next, setNext] = useState(countPerPage);
  const noRemainingPosts = activeArray?.length % countPerPage === 0;

  const showMore = e => {
    e.preventDefault();
    loopWithSlice(0, next + countPerPage, arrayToSlice);
    setNext(next + countPerPage);
  };

  return noRemainingPosts ? (
    <ViewWrapper className="justify-content-center">
      <ViewMoreButton
        type="button"
        className="animation_link"
        onClick={showMore}
      >
        {t('View More')} {contentType}
      </ViewMoreButton>
    </ViewWrapper>
  ) : (
    <p className="pagination_details text-right mt-4">
      {t('Viewing')} 1-{activeArray?.length} of {arrayToSlice?.length}
    </p>
  );
};

export default ViewMore;
