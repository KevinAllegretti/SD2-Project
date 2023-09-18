class User {
    constructor(firstname, lastname, email) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
    }
}


exports.createUser = function(firstname, lastname, email, ){
    return new User(firstname, lastname, email)
} 

console.log('User model loaded');