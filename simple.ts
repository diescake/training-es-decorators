(() => {
  const decoratorForClass = (a: () => number, b: () => number): any => {
    console.log('decoratorForClass');

    return (Class: any): any => {
      return (c: number) => {
        return new Class(a() * b() * c);
      };
    };
  };

  const decoratorForMethod = (num: number): any => {
    console.log('decoratorForMethod');

    return function decorator(t, n, descriptor) {
      const original = descriptor.value;

      descriptor.value = function(...args) {
        args[0] *= num;
        return original.apply(this, args);
      }
      return descriptor;
    };
  };

  const createValueA = () => {
    return 3;
  };

  const createValueB = () => {
    return 7;
  };

  @decoratorForClass(createValueA, createValueB)
  class Sample {
    constructor(value: number) {
      console.log(`value is ${value}`);
    }

    @decoratorForMethod(4)
    setValue(value: number): void {
      console.log(`value is ${value}`);
    }
  }

  const sample = new Sample(10);
  sample.setValue(8);
})();

