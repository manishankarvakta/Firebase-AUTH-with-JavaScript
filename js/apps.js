// ==================
// Listen for auth status changes
// ==================
auth.onAuthStateChanged(user => {
  if(user){
    console.log('User Logged in: ', user.email);
  }else{
    console.log('User Logged Out');
  }
});





// ==================
// LogOut with User
// ==================

const logOutButton = document.querySelector('#logOut');

logOutButton.addEventListener('click', (e) => {
  auth.signOut().then(()=>{
    alert('Sign Out Successful');
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


