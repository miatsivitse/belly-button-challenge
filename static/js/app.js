//url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

let sampleData;
let metaData;

function init () {
let values = object.values(samples.sample_values)
let labels = object.values(samples.otu_ids)
let hovertext = object.values(samples.otu_labels)

let trace = {
      x: [0, 50, 100, 150],
      y: [sample_values],
      type: 'bar',
      text: [hovertext]
    };
  
  Plotly.newPlot('container', trace);

  // Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });
}

// init function
init();