self.addEventListener('message', function(e) {
  self.postMessage(e.data + " my name is worker 1");
}, false);
