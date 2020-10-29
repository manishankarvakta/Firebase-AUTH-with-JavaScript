// ==================
// Listen for auth status changes
// ==================
auth.onAuthStateChanged(user => {
  const login = document.querySelectorAll('.login');
  const logout = document.querySelector('.logout');
  const title = document.querySelector('.title');
  const user_email = document.querySelector('.user_email');

  if(user){
    // console.log('User Logged in: ', user.email);

    login.forEach(item => item.style.display = "none");   
    logout.style.display = "block";
    title.innerHTML = "You are Logged in as";
    user_email.innerHTML = user.email;

  }else{
    login.forEach(item => item.style.display = "block");
    logout.style.display = "none";
    title.innerHTML = "Login with Firebase AUTH";
    user_email.innerHTML = "";
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





// Login with Phone


// verification capatcha

// login with google

const googleButton = document.querySelector('#googleButton');

googleButton.addEventListener('click', (e) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  
  auth.signInWithPopup(provider).then(function(result) {

    // This gives you a Google Access Token. You can use it to access the Google API.
    var user = result.user;
    console.log(user);
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorCode);
  });
});



// login with Facebook

const facebookButton = document.querySelector('#facebookButton');

facebookButton.addEventListener('click', (e) => {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(user);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(errorCode);
  });

});
