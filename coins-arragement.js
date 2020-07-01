var arrangeCoins = function(n) {
  var i;
   for(i=1; i <= n; i++){
     n = n - i;
   }
  return i-1;
};
console.log(arrangeCoins(0));
console.log(arrangeCoins(5));
