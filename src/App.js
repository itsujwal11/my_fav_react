import './App.css';

const App =() => {
  const name = 'ujwal'
  const isNameShowing = false;
  return (
    <div className="App">
<h1>Hello, {2 +2}reacting {isNameShowing ? name : 'someone' }</h1>
   {name ? (
    <>
    <h1>{name}</h1>
    </>
   ) :(
    <>
    <h1>test </h1>
    <h2>There is no name</h2>
    </>
   )}
    </div>
  );
}

export default App;
