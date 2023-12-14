import React from 'react';
import shortid from 'shortid';
import { AnimateSharedLayout } from 'framer-motion';
import { Container, Button, Text, Cover } from './styles/index.styled';

const Tabs = ({ data, activeTab, setActiveTab, styles }) => {
  if (!data) return null;
  return (
    <AnimateSharedLayout>
      <Container className="tabs" styles={styles}>
        {data?.map(item => (
          <Button
            key={item?.direction}
            className="tab-btn"
            onClick={() => setActiveTab(item?.direction)}
          >
            <Text
              className="tab-btn-text"
              orientation={item?.direction}
              activeTab={activeTab}
            >
              {item?.label}
            </Text>
            {activeTab === item?.direction && (
              <Cover className="tab-btn-cover" layoutId="cover" />
            )}
          </Button>
        ))}
      </Container>
    </AnimateSharedLayout>
  );
};

export default Tabs;
