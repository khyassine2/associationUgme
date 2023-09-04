import { Box, Button, Paper, Stack, TextField, Typography,Snackbar,Alert } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';

export default function ObjectifAdd() {
    const data=React.useRef();
    const navigate=useNavigate();
    const [msg,setMsg]=React.useState('');
    const [etatAlert,setEtatAlert]=React.useState('');
    const [openAlert, setOpenAlert] = React.useState(false);
    const ObjectifsCollectionRef=collection(db,'objectif')
    const ajouter=async()=>
    {
        try {
            // Créez une référence à la collection dans laquelle vous souhaitez ajouter un document
            const collectionRef = ObjectifsCollectionRef; // Utilisez ObjectifsCollectionRef

            const dataFinal = { 'data': data.current.value };
            // Utilisez la fonction addDoc pour ajouter un nouveau document
            await addDoc(collectionRef, dataFinal);
            setMsg('لقد ثم إضافة الهدف بنجاح');
            setEtatAlert('success');
            setOpenAlert(true);
            setTimeout(() => {
              setOpenAlert(false);
              navigate('/dashboard/الأهداف');
            }, 2000);
        } catch (error) {
            setMsg('error');
            setEtatAlert('error');
            setOpenAlert(true);
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
  return (
    <Box>
    <Paper sx={{ width: '80%', overflow: 'hidden',m:'auto' }}>
      <Typography variant="h5" align='right' sx={{marginTop:'3%',marginRight:'3%'}} dir='rtl'><b>إضافة الهدف :</b></Typography>
      <Stack>
      <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          inputRef={data}
          placeholder='يرجى كتابة الهدف'
          sx={{ width:'75%',m:'auto',mt:'2% !important' }}
          dir='rtl'
        />
      </Stack>
      <Stack sx={{ width:'75%',display:'flex',flexDirection:'row',justifyContent:'end',mt:'5% !important',mb:'5% !important',m:'auto' }}>
      <Button onClick={ajouter} sx={{color:'#226d68'}}>إضافة</Button>
      <Button onClick={()=>navigate('/dashboard/الأهداف')} >رجوع</Button>
      </Stack>
      </Paper>
      {/* snackbar  */}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={etatAlert} sx={{ width: '100%' }}>
            {msg}
          </Alert>
      </Snackbar>
    </Box>
  )
}
