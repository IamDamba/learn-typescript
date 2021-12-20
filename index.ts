const obj = {
  firstName: "Aris",
  lastName: "Dev",
  number: "06000000",
  age: 23,
  gender: false
};

const obj2 : {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  gender: boolean;
} = {
  firstName: "",
  lastName: "",
  phone: "",
  age: 23,
  gender: true
}

obj2.age = 34;
obj2.age = true; //Incorrect

obj2.name; //Incorrect, cause dion't recognize it within the object declaration

obj2.phone.length
obj2.age.length //Incorrect
