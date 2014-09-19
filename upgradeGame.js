function animal(name, speed, focus) {
  this.name = name;
  //these values go from 0-9
  this.speed = speed;
  this.focus = focus;
  this.position = 20;
  //calculates whether they are focused by seeing if their focus level is higher than a random number
  this.isFocused = function() {
   return Math.floor(Math.random() * 10) < this.focus 
  }
  this.advance = function() {
    if (this.isFocused()) {
      this.position += this.speed;
    }
  }

  this.progressReport = function() {
    return this.name + " is at: " + this.position;
  }
}

var nameList = ["FDR", "John F Kennedy", "Richard 'Dick' Nixon", "Ronald Regan", 
  "George 'Dubya' Bush", "Bill Clinton", "Abe Lincoln", "George Bush", "Hilary Clinton", "Barack Obama"];

var animalName = function(){
  return nameList[Math.floor(Math.random() * nameList.length)];
}

var animal1 = new animal(animalName(), 2, 6);
var animal2 = new animal(animalName(), 8, 3);
var animal3 = new animal(animalName(), 6, 4);
var animal4 = new animal(animalName(), 5, 5);

var putin = new Object()
  putin.name = "Vladmir Putin"
  putin.position = 0;
  putin.speed = 8;
  putin.focus = 5;
  putin.isFocused = function() {
    return Math.floor(Math.random() * 10) < putin.focus
  }
  putin.advance = function() {
    if (putin.isFocused()) {
      putin.position += putin.speed;
    }
    else{
      alert(putin.name + " paused to take some photos with a bear!");
    }
  }

  putin.progressReport = function() {
    return putin.name + " is at: " + putin.position;
  }






while (animal1.position  > putin.position && animal2.position  > putin.position && animal3.position  > putin.position && animal4.position > putin.position) {
  animal1.advance();
  animal2.advance();
  animal3.advance();
  animal4.advance();
  putin.advance();
  
  

  if(putin.position >= animal1.position){
    alert("Oh no!  Putin caught and ate " + animal1.name + "!");
  }
  else if(putin.position >= animal2.position){
    alert("Oh no!  Putin caught and ate " + animal2.name + "!");
  }
  else if(putin.position >= animal3.position){
    alert("Oh no!  Putin caught and ate " + animal3.name + "!");
  }
  else if(putin.position >= animal4.position){
    alert("Oh no!  Putin caught and ate " + animal4.name + "!");
  }
  else {
    alert(putin.progressReport());
    alert(animal1.progressReport() + " -- " + animal2.progressReport() + " -- " + animal3.progressReport() + " -- " + animal4.progressReport());
  }

}
