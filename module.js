const number = 12;
const echart = {
  v: 1
};

function getEnglishWord() {
  return "hello";
}

export const word = "你好";

export {
  number,
  getEnglishWord
};

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log("running man");
  }
}

export default echart;
