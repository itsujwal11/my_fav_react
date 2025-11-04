import './App.css';
import {useState , useEffect} from 'react';

const Person = (props) => {
  return (
    <>
    <h1> Name: {props.name}</h1>
    <h2>Last Name: {props.LastName}</h2>
    <h2>Age : {props.age} </h2>
    </>
)
}
const App =() => {
const [counter, setCounter] = useState(0);


useEffect(()=>{
  alert("You've changed the counter to" +counter)

// setCounter  (100);
},[counter])
  // const name = 'ujwal'
  // const isNameShowing = false;
  return (
    <div className="App">
<button onClick={() => setCounter(prevCount => prevCount - 1)}>- </button>

<h1>{counter}</h1> 
<button onClick={() => setCounter(prevCount => prevCount + 1)}>+ </button>


{/* <Person 
name={'Ujwal'}
 LastName = {'stha'} 
 age = {25}/>

<Person 
name={'kiran'} 
LastName={'stha'}
age ={20}/>

<Person />
<Person /> */}
{/* we can call multiple times */}
    </div>
      );
}

export default App;


// {/* <h1>Hello, {2 +2}reacting {isNameShowing ? name : 'someone' }</h1> */}
//    {/* {name ? (
//     <>
//     <h1>{name}</h1>
//     </>
//    ) :(
//     <>
//     <h1>test </h1>
//     <h2>There is no name</h2>
//     </>
//    )} */
//    }
  

