import { useState } from 'react'; 
function App() { 
const [count, setCount] = useState(0); 
return ( 
<div className="App"> 
<header className="App-header"> 
<h1>Virtual DOM Example</h1> 
<p>Count: {count}</p> 
<button onClick={() => setCount(count + 1)}>Increment</button> 
</header> 
</div> ); 
} 
export default App;