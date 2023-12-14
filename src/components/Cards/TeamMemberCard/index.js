import React, { useState } from 'react';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import { Card } from './styles/index.styled';

const TeamMemberCard = ({ component }) => {
  const [frontVisible, setFrontVisible] = useState(true);
  const [backVisible, setBackVisible] = useState(false);

  return (
    <Card>
      <CardFront
        {...component}
        frontVisible={frontVisible}
        setFrontVisible={setFrontVisible}
        backVisible={backVisible}
        setBackVisible={setBackVisible}
      />
      <CardBack
        {...component}
        frontVisible={frontVisible}
        setFrontVisible={setFrontVisible}
        backVisible={backVisible}
        setBackVisible={setBackVisible}
      />
    </Card>
  );
};

export default TeamMemberCard;
