import React,  {useState} from 'react';
import Buyer from './components/Buyer';

function App() {
  const [buyer, setBuyer] = useState(false);

  if(buyer) return <Buyer />
  return (
    <div className>
      <button onClick={() => setBuyer(true)} >Log in as buyer</button>
    </div>
  );
}

export default App;
