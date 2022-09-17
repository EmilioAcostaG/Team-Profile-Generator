class Employee {
  constructor(name, id, email) {
    this.role = 'Employee'
    this.name = name;
    this.id = id;
    this.email = email;
  };

  getName() {
    //console.log(`NAME: ${this.name}`)
    return this.name;
  };

  getID() {
    //console.log(`ID: ${this.id}`)
    return this.id;
  };

  getEmail() {
    //console.log(`Email: ${this.email}`)
    return this.email;
  };

  getRole() {
    
    return this.role;
    
  }
}

module.exports = Employee;