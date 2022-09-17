const Employee = require('../library/Employee');
const employee = new Employee('Emilio Acosta', '92', 'acostaemilio92@gmail.com');

describe('Employee', () => {
  it('Should return constructor values for the employee object.', () => {
    expect(employee.name).toBe('Emilio Acosta');
    expect(employee.id).toBe('92');
    expect(employee.email).toBe('acostaemilio92@gmail.com');
  });

  it('Should return the name from getName() method', () => {
    expect(employee.getName()).toBe('Emilio Acosta');
  });

  it('Should return the id from getId() method', () => {
    expect(employee.getID()).toBe('92');
  });

  it('Should return the email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('acostaemilio92@gmail.com');
  });

  it('Should return the role from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
  });
});
