export const getPadding = (top, bottom, defaultPadding) => `
  ${top !== undefined && top !== null ? top : defaultPadding}px 0px 
  ${bottom !== undefined && bottom !== null ? bottom : defaultPadding}px
`;
