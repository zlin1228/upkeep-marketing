import React from 'react';
import shortid from 'shortid';
import { color } from '../../../atoms/colors';
import Icon from '../../../molecules/Icon';
import CallToAction from '../../CallToAction';
import { Group, Badge } from '../styles/FooterGroup.styled';

const FooterGroup = ({ data }) => (
  <>
    {data?.map(item => (
      <Group
        key={shortid.generate()}
        id={item?.id || item?.label?.split(' ')[0].toLowerCase()}
      >
        <p className="column-heading">{item?.label}</p>
        <ul className="links">
          {item?.childMenuItem?.map(childItem => (
            <li key={shortid.generate()}>
              <CallToAction
                url={childItem?.callToAction?.url || childItem?.linkUrl}
                key={childItem?.label}
                ariaLabel={childItem?.ariaLabel || childItem?.label}
              >
                {childItem?.hasIcon && (
                  <Icon id={childItem?.icon} fillColor={color.darkBlue[100]} />
                )}
                {childItem?.hasImage && childItem?.icon}
                <span>{childItem?.label}</span>
                {childItem?.badge && <Badge>{childItem?.badge}</Badge>}
              </CallToAction>
            </li>
          ))}
        </ul>
      </Group>
    ))}
  </>
);

export default FooterGroup;
