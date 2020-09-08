var worker = new Worker('simple_task.js');

console.log("hello");
worker.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
}, false);

worker.postMessage('Hello World');