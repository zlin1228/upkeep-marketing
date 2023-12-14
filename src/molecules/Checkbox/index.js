import React from 'react';

import Icon from '../Icon';

import { color } from '../../atoms/colors';

import {
  Container,
  Input,
  Label,
  Symbol,
  Wrapper,
} from './styles/index.styled';

const Checkbox = ({
  type = 'checkbox',
  size = 'sm',
  icon = 'check',
  checked,
  setChecked,
  disabled,
  heading,
  subhead,
  className,
}) => {
  const iconSize = size === 'sm' ? '12px' : '14px';

  return (
    <Container size={size}>
      <Wrapper
        type={type}
        size={size}
        className={className}
        disabled={disabled}
        checked={checked}
        onClick={() => setChecked && setChecked(!checked)}
        onKeyDown={e => {
          if (e.key === 'Enter' && setChecked) {
            setChecked(!checked);
          }
        }}
        contenteditable="true"
      >
        <Input
          id="checkbox"
          type={type}
          checked={checked}
          disabled={disabled}
        />
        {checked && (
          <Symbol size={size} type={type} disabled={disabled}>
            {type === 'checkbox' && icon === 'check' && (
              <Icon
                id={`check-${size}`}
                width={iconSize}
                height={iconSize}
                fillColor={disabled ? color.grey[300] : color.steel[500]}
              />
            )}
            {type === 'checkbox' && icon === 'minus' && (
              <Icon
                id={`minus-${size}`}
                width={iconSize}
                height={iconSize}
                fillColor={disabled ? color.grey[300] : color.steel[500]}
              />
            )}
          </Symbol>
        )}
      </Wrapper>
      {(heading || subhead) && (
        <Label htmlFor="checkbox" size={size}>
          <span className="heading">{heading}</span>
          <span className="subhead">{subhead}</span>
        </Label>
      )}
    </Container>
  );
};

export default Checkbox;
