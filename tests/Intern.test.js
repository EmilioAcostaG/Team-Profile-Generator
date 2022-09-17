const Intern = require('../library/Intern');
const intern = new Intern('Emilio Acosta', '92', 'acostaemilio92@gmail.com', 'GA Tech');

describe('Intern', () => {
  it('Should return constructor values for the intern object.', () => {
    expect(intern.name).toBe('Emilio Acosta');
    expect(intern.id).toBe('92');
    expect(intern.email).toBe('acostaemilio92@gmail.com');
    expect(intern.school).toBe('GA Tech');
  });

  it('Should return the name from getName() method', () => {
    expect(intern.getName()).toBe('Emilio Acosta');
  });

  it('Should return the id from getId() method', () => {
    expect(intern.getID()).toBe('92');
  });

  it('Should return the email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('acostaemilio92@gmail.com');
  });

  it('Should return the office number from getOfficeNumber() method', () => {
    expect(intern.getSchool()).toBe('GA Tech');
  });

  it('Should return the role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
  });
});