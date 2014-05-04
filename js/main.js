(function(global) {
  /**
    Fix scaling for iPhone
    (100% be default for orientation switch, but allow zooming)
  */
  function fixScale() {
    var metas = document.getElementsByTagName('meta');
    var viewport;
    for (var i = 0, l = metas.length; i < l; i += 1) {
      if (metas[i].name == 'viewport') {
        viewport = metas[i];
        break;
      }
    }
    if (!viewport) return;

    document.addEventListener('gesturestart', gestureStart, false);
    function gestureStart() {
      viewport.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
    }
  }
  if (navigator.userAgent.match(/iPhone/i)) {
    fixScale();
  }
})(this);
