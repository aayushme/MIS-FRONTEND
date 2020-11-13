import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


function Chart(props) {

    const chartData = [
        {
          "label": "Venezuela",
          "value": "290"
        },
        {
          "label": "Saudi",
          "value": "260"
        },
        {
          "label": "Canada",
          "value": "180"
        },
        {
          "label": "Iran",
          "value": "140"
        },
        {
          "label": "Russia",
          "value": "115"
        },
        {
          "label": "UAE",
          "value": "100"
        },
        {
          "label": "US",
          "value": "30"
        }]

    const chartConfigs = {
        type: 'column2d',
        width: 500,
        height: 350,
        dataFormat: 'json',
        dataSource: {
            // Chart Configuration
            chart: {
              caption: "Countries With Most Oil Reserves [2017-18]",   
              subCaption: "In MMbbl = One Million barrels",             
              xAxisName: "Country",          
              yAxisName: "Reserves (MMbbl)", 
              numberSuffix: "K",
              theme: "fusion"                
            },
            data: chartData
          }
      };

    return (
        <div className="center-class">
    <ReactFC {...chartConfigs} />
    </div>
    );
}

export default Chart;