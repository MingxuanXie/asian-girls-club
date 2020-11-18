AFRAME.registerComponent('show-info', {
    schema: {type: 'string', default: ''},

    init: function(){
      var data = this.data;
      var io = document.querySelector(data);
      var el = this.el;
      el.addEventListener('raycaster-intersected',function(){
        io.object3D.visible = true;
      });
      el.addEventListener('raycaster-intersected-cleared',function(){
        io.object3D.visible = false;
      });
     }
});  