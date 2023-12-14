import React from 'react';
import useCareers from './utils/useCareers';
import { Section, Table } from './styles/CareersTable';

const CareersTable = ({ component }) => {
  const { careers } = useCareers();
  return (
    <Section id="careers-table">
      <h2>{component?.heading}</h2>
      {careers.map(({ category, positions }) => (
        <Table key={category}>
          <thead>
            <tr>
              <th>{category}</th>
            </tr>
          </thead>
          <tbody>
            {positions?.map(position => (
              <tr key={position?.text} className="table-row">
                <a href={position?.hostedUrl} />
                <td>{position?.text}</td>
                <td>{position?.categories?.location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </Section>
  );
};

export default CareersTable;
