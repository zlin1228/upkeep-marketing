import React from 'react';
import { Link } from 'gatsby';
import SidebarListStyles from './styles/SidebarList';

const SidebarList = ({ heading, data, prefix, total }) => (
  <SidebarListStyles>
    <h3>{heading}</h3>
    {data?.splice(0, total)?.map(({ node }) => (
      <li key={node?.id}>
        <Link to={`${prefix}/${node?.slug}`}>{node?.internalName}</Link>
      </li>
    ))}
  </SidebarListStyles>
);

export default SidebarList;
