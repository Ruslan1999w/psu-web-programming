import './App.css';
import {useEffect} from "react";
import SignIn from "./SingIn";

function App() {
  useEffect(() => {
    fetch('/sayHi')
        .then(res => console.log('res.json' , res));
  })

  return (
      <div className='autoForm'>
        <SignIn />
      </div>
  );
}

export default App;
