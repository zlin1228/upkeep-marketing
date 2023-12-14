import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import StructuredText from './components/StructuredText';
import TableOfContents from '../TableOfContents';
import SocialShare from '../../molecules/SocialShare';
import SubscriptionCard from '../Cards/SubscriptionCard';
import ToolsCard from '../Cards/ToolsCard';
import Card from '../Cards/Card';
import foresterCard from '../../data/ForesterCard';

import { Section, Wrapper, RichText, Sidebar } from './styles/PillarEmbed';

const PillarEmbed = ({ component }) => {
  const { t } = useTranslation();
  const [tableData, setTableData] = useState(null);

  return (
    <Section>
      <Wrapper>
        {component?.structuredText && (
          <StructuredText
            component={component?.structuredText}
            setTableData={setTableData}
          />
        )}
        {component?.richText && (
          <RichText
            ref={component?.richTextRef}
            dangerouslySetInnerHTML={{ __html: component?.richText }}
          />
        )}
        <Sidebar>
          <SocialShare heading={`${t('Share this article')}:`} />
          {component?.showTableOfContents && (
            <TableOfContents component={tableData || component?.tableData} />
          )}
          {component?.showSubscriptionCard && <SubscriptionCard />}
          {component?.showForesterCard && <Card card={foresterCard} />}
          {component?.showToolsCard && <ToolsCard />}
        </Sidebar>
      </Wrapper>
    </Section>
  );
};

export default PillarEmbed;
