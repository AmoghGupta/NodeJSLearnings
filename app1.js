var events = require('events');
var util = require('util');

var person = function(name){
  this.name = name;
}

util.inherits(person,events.EventEmitter);

var john = new person("john");
var mary = new person("mary");
var veer = new person("veer");

var people = [john, mary, veer];
people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + "speaks:"+ msg);
  });
});

john.emit('speak','Hello world');
mary.emit('speak','Hello mary ');
veer.emit('speak','Hello veer');
