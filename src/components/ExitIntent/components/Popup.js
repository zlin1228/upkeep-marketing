import React from 'react';
import { Link } from 'gatsby';
import ExitIntentForm from '../../Forms/ExitIntentForm';
import GatsbyImage from '../../Image/GatsbyImage';
import CallToAction from '../../CallToAction';
import Success from './Success';
import {
  Modal,
  Container,
  Wrapper,
  Thumbnail,
  Body,
  Details,
  Heading,
  Subhead,
  CallToActionStyles,
  Button,
  FormWrapper,
  PrivacyPolicy,
  CloseBtn,
} from '../styles/Popup';
import handleDownload from '../utils/handleDownload';
import Icon from '../../../molecules/Icon';

const Popup = ({
  component,
  showImage,
  closePopup,
  success,
  setSuccess,
  type,
}) => (
  <Modal>
    <Container>
      <CloseBtn type="button" onClick={() => closePopup()}>
        <Icon id="fa-regular fa-xmark" width="20px" height="20px" />
      </CloseBtn>
      <Wrapper hasImage={showImage}>
        {showImage && (
          <Thumbnail>
            <GatsbyImage
              src={component?.image?.image?.url}
              alt={component?.image?.image?.alt}
            />
          </Thumbnail>
        )}
        <Body hasImage={showImage}>
          {success ? (
            <Success type={type} />
          ) : (
            <>
              <Details>
                <Heading
                  dangerouslySetInnerHTML={{ __html: component?.heading }}
                />
                <Subhead
                  dangerouslySetInnerHTML={{ __html: component?.subhead }}
                />
              </Details>
              {component?.form && (
                <FormWrapper>
                  <ExitIntentForm
                    formHandler={component?.formHandler}
                    formLabel={component?.formLabel}
                    download={component?.downloadableAsset?.url}
                    success={success}
                    setSuccess={setSuccess}
                  />
                  <PrivacyPolicy>
                    By submitting this form you agree to the UpKeep{' '}
                    <Link to="/privacy">privacy policy</Link> surrounding
                    marketing communications.
                  </PrivacyPolicy>
                </FormWrapper>
              )}
              {component?.button && (
                <Button
                  type="button"
                  onClick={e =>
                    handleDownload(e, component?.downloadableAsset?.url)
                  }
                >
                  {component?.label}
                </Button>
              )}
              {component?.calltoaction && (
                <CallToAction
                  url={component?.link?.url}
                  label={component?.link?.label}
                  styles={CallToActionStyles}
                  variant="Red"
                />
              )}
            </>
          )}
        </Body>
      </Wrapper>
    </Container>
  </Modal>
);

export default Popup;
