const auth= firebase.auth();

function signUp(){
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
  alert("SignUp Successful");
}

function signIn(){
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
}

function signOut(){
  auth.signOut();
  alert("Signout Successfull");
}

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);

  }else{
    alert("No Active user Found")
  }
})