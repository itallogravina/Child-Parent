import FormikExample from "./forms"
import React, { useState } from "react";

function App() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }
  console.log(data)

  const myObj = [
{
    'name': 'Umut',
    'age' : 34
},
{
  'name': 'Umut',
  'age' : 34
},
{
  'name': 'Umut',
  'age' : 34
}
];

const myObj2 = {
  name: 'Umut',
  age : 1
}

Object.entries(myObj).forEach(([key, value]) => {
  value.name=myObj2.name+key
  value.age=myObj2.age+key
  console.log(value)
});

  return (
    <div className="App">
      <FormikExample childToParent={childToParent}/>
    </div>
  );
}

export default App;
