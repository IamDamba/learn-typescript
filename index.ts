const arrayOfString: (string | boolean)[] = ['1', '2', '3'];
arrayOfString.push('');
arrayOfString.push(1); //Incorrect, not the same type
arrayOfString.push(true); //Correct

const arrayOfBoolean: boolean[] = [true, false, true];
arrayOfBoolean.push(true);

const arrayOfNumbers: number[] = [1, 1, 1];

const array: string[] = [];
array.push(true);
array.push(1);
array.push("1");

let arrayOfObject: {
  name: string;
  age: number;
  gender: boolean;
}[] = [];

arrayOfObject.push({
  name: '',
  age: 1,
  gender: true
});

const arrayOfArray = [["", "", ""], ["", ""]];
const arrayOfArrayofArrayOfString: string[][][] = [[[""]], [["s"]]];