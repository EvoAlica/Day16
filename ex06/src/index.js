const firstName = (firstName) => {
    var a = firstName.toUpperCase();
  
    return a;
  };
  
  const lastName = (lastName) => {
    var b = lastName.toLowerCase();
    return b;
  };
  
  console.log(firstName("Tarik "));
  console.log(lastName("Alic"));
  
  exports.firstName = firstName;
  exports.lastName = lastName;