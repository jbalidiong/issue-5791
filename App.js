import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
.....
})

const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("User is signed in");
    console.log(user)
  } else {
    // User is signed out
    console.log("User is signed out");
  }
})

const goSignAnonymously = async (e) => {
  auth.signInAnonymously
  .then((result)=>{
    let credential = result.credential;
    console.log(credential)

  }).catch((error)=>{
    console.log(error)
  });
}
const goSignOut = async (e) => {
  auth.signOut();
}

function App() {
  return (
    <div className="App">
          <button onClick={goSignAnonymously}>Sign-In</button>
          <button onClick={goSignOut}>Sign-out</button>
    </div>
  );
}

export default App;
