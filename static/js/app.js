//url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

let sampleData;
let metaData;

let trace = {
      x: ['name', 'name', 'name'],
      y: [1, 2, 3],
      type: 'bar'
    };
  
  Plotly.newPlot('myDiv', data);