function loadScript(url, callback) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
}

var resize = function() {
  iFrameResize({checkOrigin: false, heightCalculationMethod: 'taggedElement', minHeight: 600}, '#traghettiper');

  window.addEventListener('message', function(e) {
    if (e.origin !== 'https://responsive.traghettiper.it') return null;

    var tag = '[TraghettiPer]';
    if ((typeof e.data === 'string' || e.data instanceof String) && e.data.indexOf(tag) >= 0) {
      var message = e.data.substring(e.data.indexOf(tag) + tag.length);
      var data = JSON.parse(message);

      try {
        if (data.subject === 'container') {
          var action = data.action;
          if (action === 'replace' || action === 'assign') {
            window.location[action](data.url);
          } else if (action === 'reload') {
            window.location.reload();
          }
        }
      } catch (e) {
        console.log('Messaggio non interpretabile: ' + e);
      }
    }
  }, false);
};

loadScript('//responsive.traghettiper.it/js/iframeResizer.js', resize);
//# sourceMappingURL=resizer.js.map