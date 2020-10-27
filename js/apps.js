// All login protocols go through this..

const auth = firebase.auth();
const db = firebase.firestore();
// database setting
db.settings({timestampsInSnapshots: true});

// Registration with email
const emailReg = document.querySelector("#emailReg");

emailReg.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = emailReg['email'].value;
  const password = emailReg['password'].value;

  // signup user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);

    // reset form
    emailReg.reset();
  });


});



// FireBase Login codes  COnfig
// const auth = firebase.auth();
// const db = firebase.firestore();

// db.settings({timestampsInSnapshots: true});


// Login with Phone


// verification capatcha

// login with google
// login with Facebook


