import { MDBDataTableV5 } from 'mdbreact';
import React from 'react';

const TableNew = (props) => {
  return (
    <div>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={props.entries}
        pagesAmount={props.pageamount}
        data={props.tabledata}
        searchTop
        searchBottom={false}
        checkbox
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
      />
    </div>
  );
};

export default TableNew;
