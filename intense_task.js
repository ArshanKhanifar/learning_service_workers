function nthprime(n) {
  var prime=[], i=1;
  while (i++ && prime.length<n-1) prime.reduce((a,c)=>(i%c)*a,1) && prime.push(i);
  return prime.length?prime.pop():1;
}

self.addEventListener('message', function(e) {
  let num = nthprime(7000);
  self.postMessage({begin: e.data.begin, num: num});
}, false);