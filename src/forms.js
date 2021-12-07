import {
 Stack,
 Button,
 FormControl,
 FormLabel,
 Input,
 InputGroup,
 InputRightAddon
} from '@chakra-ui/react'
import React, { useState } from "react";

export default function Stats(props) {
 const [emailAddress,setEmailAddress]= useState('')
 const [nomeAdress,setNomeAdres]= useState('')
 const[sobrenome,setSobrenome]=useState('')
 const handleSignin=(event)=>{
  event.preventDefault();
  console.log('i was subscript')
  console.log(emailAddress,nomeAdress,sobrenome)
 }
 return (
  <form method="POST" onSubmit={handleSignin}>

   <Stack spacing={4} direction='column' align='center'>
 
    <FormControl id='email'>
     <FormLabel>Email address</FormLabel>
     <Input type='email' id="'email'" 
     onChange={({target})=>setEmailAddress(target.value)}   
     />
     <FormLabel>Nome</FormLabel>
     <Input type='nome' id='nome'
      onChange={({target})=>setNomeAdres(target.value)}
     />
     <FormLabel>Sobrenome</FormLabel>
     <Input type='sobrenome' id='sobrenome'
     onChange={({target})=>setSobrenome(target.value)}
     />
    </FormControl>
    <FormControl>
    <Button type='submit' colorScheme='blue' >Button</Button>
    </FormControl>
   </Stack>
  </form>
  );
}
