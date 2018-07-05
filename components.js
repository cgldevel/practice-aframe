AFRAME.registerComponent('box', {
  schema: {
    width: {type: 'number', default: 2},
    height: {type: 'number', default: 2},
    depth: {type: 'number', default: 2},
    color: {type: 'color', default: 'red'},
  }
});