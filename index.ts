// class Car {
//   model: string
//   color: string
//   age: number
//   private peopleInPolicy: string[] = []
//   private readonly manufacturedDateTime: string = "2020-12-05"
//   constructor(model, color, age) {
//     this.model = model;
//     this.color = color;
//     this.age = age;
//   }

//   describe() {
//     console.log(
//       `This car is a ${this.color} ${this.model}, and this is ${this.age} year old`
//     );
//   }

//   addToPolicy(name: string) {
//     this.peopleInPolicy.push(name)
//   }

//   getPolicy() {
//     console.log(this.peopleInPolicy);
//     console.log(this.manufacturedDateTime);
//   }
// }


// const myBenz = new Car("Banz", "Black", 2);
// myBenz.addToPolicy('Second');
// myBenz.getPolicy();


class Vehicule {
  // Constructor
  private peopleInPolicy: string[] = []
  private readonly manufacturedDateTime: string = "2020-12-05"

  constructor(public model: string, public color: string, public age: number) { }

  //Methods
  describe() {
    console.log(
      `This car is a ${this.color} ${this.model}, and this is ${this.age} year old`
    );
  }
  addToPolicy(name: string) {
    this.peopleInPolicy.push(name)
  }
  getPolicy() {
    console.log(this.peopleInPolicy);
    console.log(this.manufacturedDateTime);
  }
}


const myBenz = new Vehicule("Banz", "Black", 2);
myBenz.addToPolicy('Second');
myBenz.getPolicy();
