import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import { Link } from 'gatsby';
import ChecklistContext from '../../context/templatesContext';
import {
  CardItem,
  ImageHolder,
  CardContent,
  CardCategoryHolder,
  CardTitle,
  CardDescription,
  CardAuthor,
} from '../../styles/Components/Cards/CardWithImage';

function textEllipsis(str, maxLength, { side = 'end', ellipsis = '...' } = {}) {
  if (str?.length > maxLength) {
    switch (side) {
      case 'start':
        return ellipsis + str?.slice(-(maxLength - ellipsis.length));
      case 'end':
      default:
        return str?.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
  }
  return str;
}

const CardWithImage = props => {
  return (
    <ChecklistContext.Consumer>
      {checklistData => {
        return (
          <div className="row">
            {props.dataInfo &&
              props.dataInfo.map((data, i) => {
                if (
                  checklistData?.activeCategory &&
                  checklistData?.activeCategory !== data.catSlug
                ) {
                  return;
                }

                return (
                  <div
                    className={`col-12 col-md-6 ${
                      props?.col === 3 ? 'col-lg-4' : ''
                    } mb-5`}
                  >
                    <CardItem key={`BlogPost${i}`}>
                      <Link to={data?.url}>
                        <ImageHolder>
                          {data?.image?.gatsbyImageData ? (
                            <GatsbyImage
                              src={data?.image?.gatsbyImageData}
                              alt={data?.title}
                            />
                          ) : (
                            <img src={data?.image?.url} alt={data?.title} />
                          )}
                        </ImageHolder>
                        <CardContent>
                          <CardTitle
                            withAuthor={props.withAuthor}
                            dangerouslySetInnerHTML={{ __html: data?.title }}
                          />

                          <CardDescription>
                            {textEllipsis(data?.description, 150)}
                          </CardDescription>

                          {props.withAuthor && (
                            <CardAuthor>By {data?.author}</CardAuthor>
                          )}

                          <CardCategoryHolder>
                            <span>New</span>
                          </CardCategoryHolder>
                        </CardContent>
                      </Link>
                    </CardItem>
                  </div>
                );
              })}
          </div>
        );
      }}
    </ChecklistContext.Consumer>
  );
};

export default CardWithImage;
