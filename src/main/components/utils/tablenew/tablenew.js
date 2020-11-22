import React from 'react';
import ReactFlexyTable from 'react-flexy-table';
import 'react-flexy-table/dist/index.css';
import './tablenew.css';

const TableNew = (props) => {
  return (
    <div>
      <ReactFlexyTable
        pageSizeOptions={[5]}
        className='my-table'
        data={props.tableData}
        filterable
        additionalCols={props.additionalCols}
      />
    </div>
  );
};

export default TableNew;
