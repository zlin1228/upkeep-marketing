import React, { useState } from 'react';
import ReactToPrint from 'react-to-print';

import CSVExportButton from './CsvExportButton';

import Copy from '../assets/copy';
import Print from '../assets/print';
import DownArrow from '../assets/down-arrow';

import { copyChecklistText, downloadChecklistPDF } from '../utils/functions';

import {
  Container,
  IconButton,
  Button,
  Tooltip,
} from '../styles/Buttons.styled';

const Buttons = ({ checklistRef, checklistData }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <Container>
      <IconButton
        aria-label="Copy"
        onClick={() => {
          copyChecklistText();
          setTooltipVisible(true);

          setTimeout(() => {
            setTooltipVisible(false);
          }, 1500);
        }}
      >
        <Tooltip className={tooltipVisible ? 'visible' : ''}>
          Copied to Clipboard
        </Tooltip>
        <Copy />
      </IconButton>
      <ReactToPrint
        trigger={() => (
          <IconButton type="button" aria-label="Copy">
            <Print />
          </IconButton>
        )}
        content={() => checklistRef.current}
        documentTitle="UpKeep Checklist"
        pageStyle={`
        padding: 64px;
      `}
      />
      <Button onClick={downloadChecklistPDF}>
        Download as PDF
        <DownArrow />
      </Button>
      <CSVExportButton
        title={checklistData?.title || 'Maintenance Checklist'}
        list={checklistData?.list}
      />
    </Container>
  );
};

export default Buttons;
