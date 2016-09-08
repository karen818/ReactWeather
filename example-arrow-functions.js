// var names = ['karen', 'patrick', 'moxxi', 'pickle', 'hootchie'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('boo');
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('karen'));
//
// var person = {
//   name: 'Karen',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// };
//
// person.greet();


var addExpression = (a,b) => a + b;

console.log(addExpression(1,2));

var addStatement = (a, b) => {
  return a + b;
};

console.log(addStatement(3,4));

//arrow functions keep the parent's this value
