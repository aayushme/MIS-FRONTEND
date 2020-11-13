import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


function Chart(props) {

    const chartConfigs = {
        type: 'column2d',
        width: 500,
        height: 350,
        dataFormat: 'json',
        dataSource: props.jsonData
      };

    return (
        <div className="center-class">
    <ReactFC {...chartConfigs} />
    </div>
    );
}

export default Chart;