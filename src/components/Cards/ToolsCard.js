import React from 'react';
import { Link } from 'gatsby';
import ToolsCardStyles from '../../styles/Components/Cards/ToolsCard';

const tools = [
  {
    label: 'ROI Calculator',
    slug: '/roi-calculator',
  },
  {
    label: 'Maintenance Calculator',
    slug: '/calculators',
  },
  {
    label: 'QR Code Generator',
    slug: '/code-generator',
  },
];

const ToolsCard = () => (
  <ToolsCardStyles className="tools-card">
    <h5>Explore our Tools</h5>
    <hr className="line_break" />
    {tools.map(tool => (
      <Link key={tool.label} to={tool.slug}>
        {tool.label}
      </Link>
    ))}
  </ToolsCardStyles>
);

export default ToolsCard;
