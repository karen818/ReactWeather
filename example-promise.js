// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Austin', function(err, temp){
//   if(err){
//     console.log("Error", err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('Austin').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });


//Challenge Area
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject('blah');
    }
  });
}

addPromise(1,2).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log("error", err);
});

addPromise(1,'blue').then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log("error", err);
});
