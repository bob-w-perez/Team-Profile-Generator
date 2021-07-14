const Engineer = require("../lib/Engineer");

// All the class methods (getName(), etc.) make a console log in addition to returning their value,
//so this code stops them from displaying while running tests
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe("Engineer", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with name, id, email, and github properties corresponding to the given parameters", () => {
      const name = "Bob";
      const id = 13;
      const email = "bob@bob.com";
      const github = "bob-perez";
      const testEngineer = new Engineer(name, id, email, github);

      expect(testEngineer.name).toEqual(name);
      expect(testEngineer.id).toEqual(id);
      expect(testEngineer.email).toEqual(email);
      expect(testEngineer.github).toEqual(github);
    });

    // Exception tests
    it("should throw an error if the github parameter is not included", () => {
      const name = "Bob";
      const email = "bob@bob.com";
      const id = 13;
      const cb = () => new Engineer(name, id, email);
      const err = new Error("Must include GitHub username for Engineer");

      expect(cb).toThrowError(err);
    });
    
    it("should throw an error if the name does not contain any letters or contains any characters other than letters, spaces, or dashes", () => {
      const name = "Bob-1989";
      const name2 = "  ";
      const id = 13;
      const email = "bob@bob.com";
      const github = "bob-perez";
      const cb = () => new Engineer(name, id, email, github);
      const cb2 = () => new Engineer(name2, id, email, github)
      const err = new Error('Employee name must contain at least one upper-case and one lower-case letter and only contain letters, single spaces, or dashes');

      expect(cb).toThrowError(err);
      expect(cb2).toThrowError(err);
    });

    it("should throw an error if the email does not contain an @ symbol", () => {
      const name = "Bob";
      const id = 13;
      const email = "bob.com";
      const github = "bob-perez";
      const cb = () => new Engineer(name, id, email, github);
      const err = new Error('Email must be in a valid email format: {something}@{something}.{something}');

      expect(cb).toThrowError(err);
    });
  });

  describe("getGithub", () => {
    it("should return the engineer's github username when Engineer.getGithub() is called", () => {
      const name = "Bob";
      const id = 13;
      const email = "bob@bob.com";
      const github = "bob-perez";
      const testEngineer =  new Engineer(name, id, email, github);

      expect(testEngineer.getGithub()).toEqual(github)
    });
  });

  describe("getRole", () => {
    it("should return the engineer's role when Engineer.getRole() is called", () => {
      const name = "Bob";
      const id = 13;
      const email = "bob@bob.com";
      const github = "bob-perez";
      const testEngineer =  new Engineer(name, id, email, github);

      expect(testEngineer.getRole()).toEqual("Engineer")
    });
  });
});
