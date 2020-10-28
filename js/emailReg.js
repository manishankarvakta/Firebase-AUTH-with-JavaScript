// ==================
// Registration with email
// ==================

const emailReg = document.querySelector("#emailReg");

emailReg.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = emailReg['email'].value;
  const password = emailReg['password'].value;

  // signup user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // console.log(cred.user);

    // reset form
    emailReg.reset();
    
  });

});