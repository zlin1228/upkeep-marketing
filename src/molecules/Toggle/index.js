import React from 'react';
import {
  Label,
  Input,
  Slider,
  Container,
  Content,
} from './styles/Toggle.styled';

const Toggle = ({
  size,
  heading,
  className,
  subheading,
  checked,
  setChecked,
  disabled,
}) => (
  <Label htmlFor="checkbox" size={size}>
    <Container size={size}>
      <Input
        className={className}
        type="checkbox"
        onKeyDown={e => {
          if (e.key === 'Enter' && setChecked) {
            setChecked(!checked);
          }
        }}
      />
      <Slider
        className={className}
        onClick={() => setChecked && setChecked(!checked)}
        checked={checked}
        size={size}
        disabled={disabled}
      />
    </Container>

    <Content flexDirection="column" size={size}>
      <p className="heading">{heading}</p>
      <p className="subheading">{subheading}</p>
    </Content>
  </Label>
);

export default Toggle;
