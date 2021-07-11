const Intern = require("../lib/Intern");

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe("Intern", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with name, id, email, and school properties corresponding to the given parameters", () => {
      const name = "Bob";
      const id = 15;
      const email = "bob@bob.com";
      const school = "GA Tech";
      const testIntern = new Intern(name, id, email, school);

      expect(testIntern.name).toEqual(name);
      expect(testIntern.id).toEqual(id);
      expect(testIntern.email).toEqual(email);
      expect(testIntern.school).toEqual(school);
    });

    // Exception tests
    it("should throw an error if the school parameter is not included", () => {
      const name = "Bob";
      const email = "bob@bob.com";
      const id = 15;
      const cb = () => new Intern(name, id, email);
      const err = new Error("Must include school for Intern");

      expect(cb).toThrowError(err);
    });
    
    it("should throw an error if the name does not contain any letters or contains any characters other than letters, spaces, or dashes", () => {
      const name = "Bob-1989";
      const name2 = "  ";
      const id = 15;
      const email = "bob@bob.com";
      const school = "GA Tech";
      const cb = () => new Intern(name, id, email, school);
      const cb2 = () => new Intern(name2, id, email, school)
      const err = new Error('Employee name must contain at least one letter and only contain letters,single spaces, or dashes');

      expect(cb).toThrowError(err);
      expect(cb2).toThrowError(err);
    });

    it("should throw an error if the email does not contain an @ symbol", () => {
      const name = "Bob";
      const id = 15;
      const email = "bob.com";
      const school = "GA Tech";
      const cb = () => new Intern(name, id, email, school);
      const err = new Error('Email must contain an @');

      expect(cb).toThrowError(err);
    });
  });

  describe("getSchool", () => {
    it("should return the intern's school when Intern.getSchool() is called", () => {
      const name = "Bob";
      const id = 15;
      const email = "bob@bob.com";
      const school = "GA Tech";
      const testIntern =  new Intern(name, id, email, school);

      expect(testIntern.getSchool()).toEqual(school)
    });
  });

  describe("getRole", () => {
    it("should return the intern's role when Intern.getRole() is called", () => {
      const name = "Bob";
      const id = 15;
      const email = "bob@bob.com";
      const school = "GA Tech";
      const testIntern =  new Intern(name, id, email, school);

      expect(testIntern.getRole()).toEqual("Intern")
    });
  });
});
