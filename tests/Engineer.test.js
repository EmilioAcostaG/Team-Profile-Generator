const Engineer = require('../library/Engineer');
const engineer = new Engineer('Emilio Acosta', '92', 'acostaemilio92@gmail.com', 'emilioacostag');

describe('Engineer', () => {
  it('Should return constructor values for the engineer object.', () => {
    expect(engineer.name).toBe('Emilio Acosta');
    expect(engineer.id).toBe('92');
    expect(engineer.email).toBe('acostaemilio92@gmail.com');
    expect(engineer.github).toBe('emilioacostag');
  });

  it('Should return the name from getName() method.', () => {
    expect(engineer.getName()).toBe('Emilio Acosta');
  });

  it('Should return the id from getId() method.', () => {
    expect(engineer.getID()).toBe('92');
  });

  it('Should return the email from getEmail() method.', () => {
    expect(engineer.getEmail()).toBe('acostaemilio92@gmail.com');
  });

  it('Should return the gihub username from getGithub() method.', () => {
    expect(engineer.getRole()).toBe('Engineer')
  })
})