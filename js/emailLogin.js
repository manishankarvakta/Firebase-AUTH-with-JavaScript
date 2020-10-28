// ==================
// Registration with email
// ==================

const emailReg = document.querySelector("#emailLogin");

emailReg.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = emailReg['email'].value;
  const password = emailReg['password'].value;

  // signup user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);

    // reset form
    emailReg.reset();
    
  });

});