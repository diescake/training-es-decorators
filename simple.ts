const decoFunc = (a: () => number, b: () => number): any => {
  return (Class: any): any => {
    return (c: number) => {
      console.log(`result: ${a() * b() * c}`);
      return new Class(c);
    };
  };
};

const getNumberA = () => {
  return 3;
};

const getNumberB = () => {
  return 7;
};

@decoFunc(getNumberA, getNumberB)
class MyClass {
  constructor(c: number) {}
}

const myclass = new MyClass(10);
console.log(myclass);

