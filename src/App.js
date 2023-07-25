import { useAuthContext } from "@asgardeo/auth-react";
import './app.css';


function App() {
  const {  signIn, signOut, state} = useAuthContext();
  console.log("isAuthenticated:", state.isAuthenticated); // Log the value of isAuthenticated


  const displayAuthenticatedContent = () => {
    return (
      <div>
        <h1>You are authenticated</h1>
        {console.log("Staaate",state)};
       <button onClick={ () =>{
           signOut()
           console.log('signed out')
       } }>Logout</button>
      </div>
    );
  }

  const displayLoginPage = () =>{
    return(
      <div>
        <h1>This is the login page</h1>
        <button onClick={ () => signIn() }>Login</button>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="box">

      {state.isAuthenticated ? displayAuthenticatedContent() : displayLoginPage()}
      
     </div>
    </div>
  );
}

export default App;
