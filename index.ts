let numberOrString = "Aris Dev";

numberOrString = "Lebron";
numberOrString = 24;


//UNION TYPE
let numberOrStrin2: string | number | boolean | undefined | null = "Aris Dev";

numberOrStrin2 = 4;
numberOrStrin2 = true;

let array: (string | number | boolean)[] = ["", 1, true, undefined];

let obj: {
  hello: string | number
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let rainbowColors: "red" | "orange" | "yellow" | "blue" | "indigo" | "violet" = 'red';

rainbowColors = "orange";
rainbowColors = "indigo";
rainbowColors = "blue";
rainbowColors = "yellow";

enum RainbowTypes {
  RED,
  ORANGE,
  YELLOW,
  BLUE,
  INDIGO,
  VIOLET
}

let rainbowColors2: RainbowTypes = RainbowTypes.BLUE;


let obj2: {
  property: string;
  property2?: string;
} = { property: "string" }