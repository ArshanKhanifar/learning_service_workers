self.addEventListener('message', function(e) {
  var data = e.data;
  //self.postMessage(data);
  self.postMessage({type: data.type, begin: data.begin});
}, false);