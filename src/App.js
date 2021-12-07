import FormikExample from "./forms"
import React, { useState } from "react";

function App() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }
  console.log(data)
  return (
    <div className="App">
      <FormikExample childToParent={childToParent}/>
    </div>
  );
}

export default App;
