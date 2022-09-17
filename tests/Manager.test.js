const Manager = require('../library/Manager');
const manager = new Manager('Emilio Acosta', '92', 'acostaemilio92@gmail.com', '99');

describe('Manager', () => {
  it('Should return constructor values for the manager object.', () => {
    expect(manager.name).toBe('Emilio Acosta');
    expect(manager.id).toBe('92');
    expect(manager.email).toBe('acostaemilio92@gmail.com');
    expect(manager.officeNumber).toBe('99');
  });

  it('Should return the name from getName() method', () => {
    expect(manager.getName()).toBe('Emilio Acosta');
  });

  it('Should return the id from getId() method', () => {
    expect(manager.getID()).toBe('92');
  });

  it('Should return the email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('acostaemilio92@gmail.com');
  });

  it('Should return the office number from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('99');
  });

  it('Should return the role from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
  });
});