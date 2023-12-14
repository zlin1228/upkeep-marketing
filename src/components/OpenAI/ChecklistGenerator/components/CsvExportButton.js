import React from 'react';
import { Button } from '../styles/Buttons.styled';

const CSVExportButton = ({ title, list }) => {
  const exportToCSV = () => {
    let csvContent = `${title}\n`;

    csvContent += 'Item,Status,Assigned To,Notes\n';
    csvContent += list.map(item => `${item},,,`).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const downloadLink = document.createElement('a');
    const url = URL.createObjectURL(blob);

    downloadLink.href = url;
    downloadLink.download = `${title}.csv`;

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return (
    <Button type="button" onClick={exportToCSV}>
      Export to CSV
    </Button>
  );
};

export default CSVExportButton;
