import Person from "./../src/galacticAge.js";

describe("Person class and all its methods", () => {
  let person;

  beforeEach(() => {
    person = new Person ("Ryland", 21);
  });

  test("create new person object with arguments", () => {
    expect(person.name).toEqual("Ryland");
    expect(person.age).toEqual(21);
  });
  
  test("determins age on mercury", () => {
    person.mercuryAge();
    expect(person.mercury).toEqual(1)
  });
})