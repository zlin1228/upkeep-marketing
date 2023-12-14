import React, { useState } from 'react';
import Popup from './components/Popup';
import { Wrapper, Overlay } from './styles/ExitIntent';
import UseExitIntent from './utils/UseExitIntent';

const ExitIntent = ({ component, showImage }) => {
  const { showPopup, closePopup } = UseExitIntent(component?.id);
  const [success, setSuccess] = useState(false);
  return (
    <Wrapper id="exitIntent" className={showPopup && 'active'} type="Popup">
      <Overlay onClick={() => closePopup()} />
      <Popup
        type="Popup"
        showImage={showImage}
        component={component}
        closePopup={closePopup}
        success={success}
        setSuccess={setSuccess}
      />
    </Wrapper>
  );
};

export default ExitIntent;
