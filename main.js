


$().ready(function() {
  $("#text").html("ready");
  
  // zdog-demo.js

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
});

// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: '#636',
});

// update & render
illo.updateRenderGraph();
  
  
});
