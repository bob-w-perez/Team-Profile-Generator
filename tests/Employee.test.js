const Employee = require("../lib/Employee");

// All the class methods (getName(), etc.) make a console log in addition to returning their value,
//so this code stops them from displaying while running tests
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe("Employee", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with name, id, and email properties corresponding to the given parameters", () => {
      const name = "Bob";
      const id = 11;
      const email = "bob@bob.com";
      const testEmployee = new Employee(name, id, email);

      expect(testEmployee.name).toEqual(name);
      expect(testEmployee.id).toEqual(id);
      expect(testEmployee.email).toEqual(email);
    });

    // Exception tests
    it("should throw an error if the object is created without all the required parameters", () => {
      const name = "Bob-1989";
      const email = "bob@bob.com";
      const cb = () => new Employee(name, email);
      const err = new Error('Each employee must have a name, id, and email');

      expect(cb).toThrowError(err);
    });
    
    it("should throw an error if the name does not contain any letters or contains any characters other than letters, spaces, or dashes", () => {
      const name = "Bob-1989";
      const id = 11;
      const email = "bob@bob.com";
      const cb = () => new Employee(name, id, email);
      const err = new Error('Employee name must contain at least one upper-case and one lower-case letter and only contain letters, single spaces, or dashes');

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the email does not contain an @ symbol", () => {
      const name = "Bob";
      const id = 11;
      const email = "bob.com";
      const cb = () => new Employee(name, id, email);
      const err = new Error('Email must be in a valid email format: {something}@{something}.{something}');

      expect(cb).toThrowError(err);
    });
  });

  describe("getName", () => {
    it("should return the employee's name when Employee.getName() is called", () => {
      const name = "Bob";
      const id = 11;
      const email = "bob@bob.com";
      const testEmployee = new Employee(name, id, email);

      expect(testEmployee.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the employee's ID when Employee.getId() is called", () => {
      const name = "Bob";
      const id = 11;
      const email = "bob@bob.com";
      const testEmployee = new Employee(name, id, email);

      expect(testEmployee.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the employee's email when Employee.getEmail() is called", () => {
      const name = "Bob";
      const id = 11;
      const email = "bob@bob.com";
      const testEmployee = new Employee(name, id, email);

      expect(testEmployee.getEmail()).toEqual(email);
    });
  });
  
  describe("getRole", () => {
    it("should return the employee's role when Employee.getRole() is called", () => {
      const name = "Bob";
      const id = 11;
      const email = "bob@bob.com";
      const testEmployee = new Employee(name, id, email);

      expect(testEmployee.getRole()).toEqual("Employee")
    });
  });
});
