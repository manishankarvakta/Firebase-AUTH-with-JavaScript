// ==================
// Listen for auth status changes
// ==================
auth.onAuthStateChanged(user => {
  const login = document.querySelectorAll('.login');
  const logout = document.querySelector('.logout');
  const title = document.querySelector('.title');
  const user_email = document.querySelector('.user_email');

  console.log(login);
  if(user){
    console.log('User Logged in: ', user.email);

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



// FireBase Login codes  COnfig
// const auth = firebase.auth();
// const db = firebase.firestore();

// db.settings({timestampsInSnapshots: true});


// Login with Phone


// verification capatcha

// login with google
// login with Facebook


