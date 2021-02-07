import React,{useState} from 'react';
import './Chetan.css';

function App() {

  const [my_condition,ChangeMyCondtion]=useState(false)
  let MyDiv = '';

  const showMydiv = () =>
  {
    ChangeMyCondtion(true);
  }
  const HideMydiv = () =>
  {
    ChangeMyCondtion(false);
  }

  if(my_condition)
  {
        
        MyDiv = (
            <div className="MyDiv">
            <h5>Current Status : Active {my_condition}</h5>
            </div>
        );

  }
  else
  {

  }
  return (
    <div>
      <button className="myButton" onClick={showMydiv}>Show Div</button>
      <button className="myButton" onClick={HideMydiv}>Hide Div</button>
      {MyDiv}
    </div>
    
  );
}

export default App;