import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TITLES_MAPPER = {
    'year': 'Ετος',
    'month': 'Μηνας',
    'location': 'Τοποθεσια',
    'avgAirTemp (oC)': 'Μεση Θερμοκρασια αερος (oC)',
    'minAirTemp (oC)': 'Ελαχιστη Θερμοκρασια αερος (oC)',
    'maxAirTemp (oC)': 'Μεγιστη Θερμοκρασια αερος (oC)',
    'avgHumidity (%)': 'Σχετικη υγρασια (%)',
    'avgWindSpeed (m/s)': 'Μεση ταχυτητα αερα (m/s)',
    'maxWS (m/s)': 'Μεγιστη ταχυτητα αερα (m/s)',
    'totalPreparation (mm)': 'Βροχοπτωση (mm)',
};

const Home = ({ data }) => {
  const getRows = (data) => {
    if(!data) return [];

    console.log(data);

    const dataAfterFirstRow = data.filter((dataObj, index) => index > 1);
    
    return dataAfterFirstRow.map((dataObj, index) => ({
      id: index, 
      ...dataObj,
      'avgAirTemp (oC)': dataObj['avgAirTemp (oC)'] ? dataObj['avgAirTemp (oC)'].toFixed(1) : '',
      'minAirTemp (oC)': dataObj['minAirTemp (oC)'] ? dataObj['minAirTemp (oC)'].toFixed(1) : '',
      'maxAirTemp (oC)': dataObj['maxAirTemp (oC)'] ? dataObj['maxAirTemp (oC)'].toFixed(1) : '',
      'avgHumidity (%)': dataObj['avgHumidity (%)'] ? dataObj['avgHumidity (%)'].toFixed(1) : '',
      'avgWindSpeed (m/s)': dataObj['avgWindSpeed (m/s)'] ? dataObj['avgWindSpeed (m/s)'].toFixed(1) : '',
      'maxWS (m/s)': dataObj['maxWS (m/s)'] ? dataObj['maxWS (m/s)'].toFixed(1) : '',
      'totalPreparation (mm)': dataObj['totalPreparation (mm)'] ? dataObj['totalPreparation (mm)'].toFixed(1) : ''
    }));
  }

  const getColumns = (data) => {
    if(!data) return [];

    const cols = Object.keys(data[0]).map(key => {
      return {
        field: key,
        headerName: Object.keys(TITLES_MAPPER).includes(key) ? TITLES_MAPPER[key] : key,
        width: '275'
      }
    });

    return cols;
  };

  return (
    data?.length
      ? <div>
          <div className='title'>
            Weather Data
          </div>

          <div className='subtitle'>
            Please apply the filters you want using the options for each column.
          </div>

          <div className='table'>
            <DataGrid
              rows={getRows(data)}
              columns={getColumns(data)}
              pageSize={100}
              rowsPerPageOptions={[100]}
              classes={{cell: 'actionsCellClass', columnHeader: 'columnHeaderClass', columnHeaderTitle: 'columnHeaderTitleClass', footerContainer: 'footerCellClass', ColumnFilteredIcon: 'ColumnFilteredIconClass'}}
              hideFooter={true}
            />
          </div>
        </div>
      : null
  );
}

export default Home;
