import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class MultiDrop extends Component {
  state = {
    options: [
      { name: 'East', id: 'east' },
      { name: 'West', id: 'west' },
      { name: 'North', id: 'north' },
      { name: 'South', id: 'south' },
    ],
  };

  onSelect(selectedList, selectedItem) {
    console.log(selectedList);
  }

  onRemove(selectedList, removedItem) {
    console.log(selectedList);
  }
  render() {
    return (
      <Multiselect
        options={this.state.options} // Options to display in the dropdown
        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        displayValue='name' // Property name to display in the dropdown options
      />
    );
  }
}

export default MultiDrop;
