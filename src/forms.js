import {
 Stack,
 Button,
 FormControl,
 FormLabel,
 Input,
//  InputGroup,
//  InputRightAddon
} from '@chakra-ui/react'
import React, { useState } from "react";
// import useForm from './FormHook';

export default function Stats({childToParent}) {
//  const [emailAddress,setEmailAddress]= useState('')
//  const [nomeAdress,setNomeAdres]= useState('')
//  const[sobrenome,setSobrenome]=useState('')
 const initialFormData = Object.freeze({
  email: "",
  nome: "",
  sobrenome:""
});

 const [fromData, setFromDat] = useState(initialFormData)

const handleChange = (e)=>{

  setFromDat({
    ...fromData,
    [e.target.name]:e.target.value.trim()

  })
}

 const handleSignin=(event)=>{
  event.preventDefault();
  console.log('i was subscript')
  // console.log(emailAddress,nomeAdress,sobrenome)
// console.log(fromData)

 }

 return (
  <form method="POST" onSubmit={handleSignin}>

   <Stack spacing={4} direction='column' align='center'>
 
    <FormControl id='email'>
     <FormLabel>Email address</FormLabel>
     <Input name="email" type='email' id="'email'" 
     onChange={handleChange}   
     />
     <FormLabel>Nome</FormLabel>
     <Input name="nome" id='nome'
         onChange={handleChange}   
     />
     <FormLabel>Sobrenome</FormLabel>
     <Input name="sobrenome"type='sobrenome' id='sobrenome'
         onChange={handleChange}   
     />
    </FormControl>
    <FormControl>
    <Button type='submit' colorScheme='blue' onClick={()=>childToParent(fromData)} >Button</Button>
    </FormControl>
   </Stack>
  </form>
  );
}
