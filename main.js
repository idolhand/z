// rotating flag variable
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 4,
  dragRotate: true,
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  },
});

// add shapes...

function animate() {
  // rotate
  if ( isSpinning ) {
    illo.rotate.y += 0.03;
  }
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();
