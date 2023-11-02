// Your code here
// class Cat {
  
// }

// class Dog {

// }

// class Bird {

// }

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      if (this.gender === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
//   // Example usage:
//   const cat = new Cat("Whiskers");
//   const dog = new Dog("Buddy");
//   const maleBird = new Bird("Polly", "male");
//   const femaleBird = new Bird("Chirpy", "female");
  
//   console.log(cat.speak());         // Output: "Whiskers says meow!"
//   console.log(dog.speak());         // Output: "Buddy says woof!"
//   console.log(maleBird.speak());    // Output: "It's me! Polly, the parrot!"
//   console.log(femaleBird.speak());  // Output: "Chirpy says squawk!"
  