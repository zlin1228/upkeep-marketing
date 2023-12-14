import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { ChecklistHolder } from '../../../styles/Pages/Checklists';
import CardWithImage from '../../Cards/CardWithImage';
import { useTemplateData } from '../utils/useTemplateData';

const Templates = () => {
  const {
    allDatoCmsTemplateCollection,
    allDatoCmsTemplateAsset,
    allDatoCmsTemplateCategory,
    allDatoCmsIndustry,
  } = useTemplateData();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const pageRange = 5;
  const [checklistState, setChecklistState] = useState({
    activeAsset: [],
    activeIndustry: [],
    activeCategory: '',
  });

  const setActiveCategory = cat => {
    setCurrentPage(1);
    setChecklistState({
      ...checklistState,
      activeCategory: cat,
    });
  };
  const setActiveAsset = asset => {
    setCurrentPage(1);
    if (!checklistState.activeAsset.includes(asset)) {
      setChecklistState({
        ...checklistState,
        activeAsset: [...checklistState?.activeAsset, asset],
      });
    } else {
      const newAssets = checklistState.activeAsset.filter(
        item => item !== asset
      );
      setChecklistState({
        ...checklistState,
        activeAsset: newAssets,
      });
    }
  };
  const setActiveIndustry = industry => {
    setCurrentPage(1);
    if (!checklistState.activeIndustry.includes(industry)) {
      setChecklistState({
        ...checklistState,
        activeIndustry: [...checklistState?.activeIndustry, industry],
      });
    } else {
      const newIndustry = checklistState.activeIndustry.filter(
        item => item !== industry
      );
      setChecklistState({
        ...checklistState,
        activeIndustry: newIndustry,
      });
    }
  };

  const templates = allDatoCmsTemplateCollection.edges.map(({ node }) => ({
    title: node?.internalName,
    url: `/templates/${node?.slug}`,
    path: `/templates/${node?.slug}`,
    category: node?.category?.name,
    asset: node?.asset ? node?.asset.map(_t => _t.name) : [],
    industry: node?.industry?.name,
    catSlug: node?.category?.slug,
    assetSlug: node?.asset ? node?.asset.map(_t => _t.slug) : [],
    industrySlug: node?.industry?.slug,
    image: node?.thumbnail?.image,
    icon: node?.industry?.fontAwesome,
    iconColor: node?.industry?.iconColor,
  }));

  const assets = allDatoCmsTemplateAsset.nodes.filter(asset => {
    if (
      templates.filter(tpl => tpl.assetSlug.includes(asset.slug)).length > 0
    ) {
      return true;
    }
    return false;
  });
  const categories = allDatoCmsTemplateCategory.nodes.filter(cat => {
    if (templates.filter(tpl => tpl.catSlug === cat.slug).length > 0) {
      return true;
    }
    return false;
  });
  const industries = allDatoCmsIndustry.nodes.filter(ind => {
    if (templates.filter(tpl => tpl.industrySlug === ind.slug).length > 0) {
      return true;
    }
    return false;
  });

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirestPost = indexOfLastPost - postsPerPage;
  const filteredPosts = templates.filter(item => {
    if (
      checklistState.activeCategory === '' ||
      item.catSlug === checklistState.activeCategory
    ) {
      if (
        checklistState.activeAsset.length === 0 ||
        item.assetSlug.filter(_slug =>
          checklistState.activeAsset.includes(_slug)
        ).length > 0
      ) {
        if (
          checklistState.activeIndustry.length === 0 ||
          checklistState.activeIndustry.includes(item.industrySlug)
        ) {
          return true;
        }
      }
    }
    return false;
  });

  const catTemplates = categories.map(cat => {
    return templates.filter(tplItem => tplItem.catSlug === cat?.slug)[0];
  });
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <ChecklistHolder>
      <Container>
        <Row>
          <Col md={4} className="sidebar">
            <div className="filter-block">
              <h5>ASSET TYPE</h5>
              <ul>
                {assets &&
                  assets.map((asset, index) => (
                    <li key={`assets-${index}`}>
                      <label>
                        <input
                          type="checkbox"
                          name={asset?.slug}
                          value={asset?.slug}
                          onChange={() => setActiveAsset(asset?.slug)}
                        />
                        {asset?.name}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="filter-block">
              <h5>INDUSTRY</h5>
              <ul>
                {industries &&
                  industries.map((ind, index) => (
                    <li key={`industry-${index}`}>
                      <label>
                        <input
                          type="checkbox"
                          name={ind?.slug}
                          value={ind?.slug}
                          onChange={() => setActiveIndustry(ind?.slug)}
                        />
                        {ind?.name}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="filter-block category">
              <h5>CATEGORY</h5>
              <ul>
                <li
                  className={
                    checklistState.activeCategory === '' ? 'selected' : ''
                  }
                  onClick={() => setActiveCategory('')}
                >
                  <a>All</a>
                </li>
                {categories &&
                  categories.map((cat, index) => (
                    <li
                      className={
                        checklistState.activeCategory === cat?.slug
                          ? 'selected'
                          : ''
                      }
                      key={`category-${index}`}
                      onClick={() => setActiveCategory(cat?.slug)}
                    >
                      <a>{cat?.name}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>
          <Col md={8}>
            <CardWithImage
              dataInfo={filteredPosts.slice(indexOfFirestPost, indexOfLastPost)}
              btnChecklist
            />
            {filteredPosts.length > postsPerPage && (
              <Pagination
                activePage={currentPage}
                prevPageText="Prev"
                nextPageText="Next"
                hideFirstLastPages
                hideDisabled
                itemsCountPerPage={postsPerPage}
                totalItemsCount={filteredPosts.length}
                pageRangeDisplayed={pageRange}
                onChange={handlePageChange}
              />
            )}
          </Col>
        </Row>
      </Container>
      <div className="footer-banner">
        <Container>
          <h2 className="mb-3">What type of templates are you looking for?</h2>
          <Row>
            {catTemplates &&
              catTemplates.length > 0 &&
              catTemplates.slice(0, 3).map((catTpl, index) => (
                <Col lg={4} key={`catTpe-${index}`}>
                  <Row className="no-gutters footer-card">
                    <Col className="card-cat-title">
                      <h6>{catTpl?.category}</h6>
                    </Col>
                    <Col xs="auto" className="px-0 image-card">
                      {catTpl?.image?.url && (
                        <img src={catTpl?.image?.url} alt={catTpl?.title} />
                      )}
                    </Col>
                  </Row>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </ChecklistHolder>
  );
};

export default Templates;
