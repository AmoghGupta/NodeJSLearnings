var counter = function(arr){
return "There are "+ arr.length + ' elements';
};

var adder = function(a,b){
  return `The sum is : ${a+b}`;
}


var pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
