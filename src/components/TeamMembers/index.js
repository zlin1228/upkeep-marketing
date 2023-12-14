import React from 'react';
import TeamMemberCard from '../Cards/TeamMemberCard';
import { Section, Wrapper, Header, Grid } from './styles/index.styled';

const TeamMembers = ({ component, nextComponent, prevComponent }) => {
  if (!component) return null;
  const { heading, subhead, teamMembers } = component;
  const updatePaddingBottom =
    nextComponent?.internal?.type === 'DatoCmsTeamMembersComponent';
  const updatePaddingTop =
    prevComponent?.internal?.type === 'DatoCmsTeamMembersComponent';

  return (
    <Section
      updatePaddingTop={updatePaddingTop}
      updatePaddingBottom={updatePaddingBottom}
    >
      <Wrapper>
        <Header>
          {heading && <h2 className="heading">{heading}</h2>}
          {subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
        </Header>
        {teamMembers && teamMembers?.length > 0 ? (
          <Grid>
            {teamMembers.map(member => (
              <TeamMemberCard key={member?.id} component={member} />
            ))}
          </Grid>
        ) : null}
      </Wrapper>
    </Section>
  );
};

export default TeamMembers;
