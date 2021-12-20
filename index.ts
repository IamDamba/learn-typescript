const obj: {
  firstName: string,
  lastName: string,
  age: number,
  gender: boolean
} = {
  firstName: "",
  lastName: '',
  age: 24,
  gender: false
}

const obj2: {
  firstName: string,
  lastName: string,
  age: number,
  gender: boolean
} = {
  firstName: "",
  lastName: '',
  age: 24,
  gender: false
}

interface Person { //Always result in an Object
  firstName: string,
  lastName: string,
  age: number,
  gender: boolean
}

const obj3: Person = {
  firstName: "",
  lastName: '',
  age: 24,
  gender: false
}


const obj4: Person = {
  firstName: "",
  lastName: '',
  age: 24,
  gender: false
}


type PersonType = { // Don't specificly return an Object but any that we defined
  firstName: "",
  lastName: '',
  age: 24,
  gender: false
}[]

const obj5: PersonType = [
  {
    firstName: "",
    lastName: '',
    age: 24,
    gender: false
  }
]
