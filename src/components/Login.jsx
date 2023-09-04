import { Button, Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from '../firebase';
export default function Login() {
    const email=useRef();
    const password=useRef();
    const navigate=useNavigate();
    const [errLogin,seterrLogin]=useState('');
    const [errpw,seterrpw]=useState('');
    const [authuser,setauthUser]=useState({});
    const login = async () => {
        try {
            if(email.current.value!==''&&password.current.value!=='')
            {
                const user=await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
                if(user)
                {
                    navigate('/dashboard');
                }
            }
            else{
                if(email.current.value=='')
                {
                    seterrLogin('Email obligatoire!!!');
                }
                else if( password.current.value=='')
                {
                    seterrLogin('');
                    seterrpw('Password obligatoire!!!')
                }
            }
        //   console.log(userCredential);
        } catch (error) {
        //   console.log(error);
          if (error.code === 'auth/invalid-email') {
            seterrLogin('email incorrect!!');
          } else if (error.code === 'auth/user-disabled') {
            seterrLogin('email incorrect!!');
          } else if (error.code === 'auth/user-not-found') {
            seterrLogin('email incorrect!!');
          } else if (error.code === 'auth/wrong-password') {
            seterrLogin('');
            seterrpw('password incorrect!!');
          } else {
            console.log('Unknown error:', error.message);
          }
        }
      };
    onAuthStateChanged(auth,(user)=>{
        if(user)
        {
            setauthUser(user)
        }else
        {
            setauthUser(null)
        }
    })
    const logout=async()=>{
        await signOut(auth);
    }
  return (
    <Box>
        <Card sx={{ width:'60%',margin:'auto',mt:"10%",paddingBottom:'4%' }}>
        <Box  component="form" noValidate
            autoComplete="off" sx={{marginLeft:'5%',mt:'5%',display:'flex',justifyContent:'center'}}>
                <Box sx={{ display:'flex',flexDirection:'column' }}>
                    {errLogin!==''?<TextField  label="Email" variant="outlined" error helperText={errLogin!==''?errLogin:''} fullWidth sx={{minWidth:'300px !important'}} 
                        inputRef={email}
                    />:errLogin===''?<TextField  label="Email" variant="outlined" fullWidth sx={{minWidth:'300px !important'}} 
                        inputRef={email}
                    />:''}
                    {errpw!==''?<TextField  label="Password" variant="outlined" type="password" error helperText={errpw!==''?errpw:''} fullWidth sx={{mt:'5%',minWidth:'300px !important'}}
                        inputRef={password} autoComplete="off"
                    />:<TextField label="Password" variant="outlined" type="password" fullWidth sx={{mt:'5%',minWidth:'300px !important'}}
                          inputRef={password}  autoComplete="off"
                    />}
                    
                    
                    <Button variant="outlined"  sx={{mt:'4%',border:'1px solid #226d68 !important',color:'#226d68'}} onClick={login}>Se Connecter</Button>
                    {/* <Button variant="outlined"  sx={{mt:'4%',border:'1px solid #226d68 !important',color:'#226d68'}} onClick={logout}>logout</Button>
                    {auth.currentUser?.email} */}
                </Box>
        </Box>
        </Card>
    </Box>
  )
}
