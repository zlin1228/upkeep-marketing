import React, { useState, useRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Icon from '../../molecules/Icon';
import { color } from '../../atoms/colors';
import { Button, Dropdown } from './styles/index.styled';

const languageMap = {
  en: 'English',
  es: 'Español',
};

const LanguageSwitcher = ({ theme }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const buttonRef = useRef(null);
  const { languages, originalPath, i18n } = useI18next();

  return (
    <Button
      ref={buttonRef}
      aria-label="Click to change language"
      onClick={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Icon id="globe-01" width="20px" height="20px" fillColor={theme} />
      {dropdownVisible && (
        <Dropdown
          className="language-dropdown"
          onMouseLeave={() => setDropdownVisible(false)}
        >
          {languages.map(lng => {
            const path = lng === 'en' ? originalPath : `/${lng}${originalPath}`;
            return (
              <li key={lng}>
                <GatsbyLink to={path}>
                  {languageMap[lng]}{' '}
                  {i18n.resolvedLanguage === lng && (
                    <Icon
                      id="fa-light fa-check"
                      width="16px"
                      height="16px"
                      fillColor={color.steel[700]}
                    />
                  )}
                </GatsbyLink>
              </li>
            );
          })}
        </Dropdown>
      )}
    </Button>
  );
};

export default LanguageSwitcher;
