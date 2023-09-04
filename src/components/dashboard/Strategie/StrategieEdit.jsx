
import { Alert, Backdrop, Button, CircularProgress, Paper, Snackbar, Stack, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MuiAlert from '@mui/material/Alert';
import { db } from '../../../firebase';
export default function StrategieEdit() {
    const {id}=useParams();
  const [oneData,setOneData]=React.useState({});
  const data=React.useRef();
  const title=React.useRef();
  const ObjectifsCollectionRef=collection(db,'strategie');
  const [open, setOpen] = React.useState(false);
  const [msg,setMsg]=React.useState('');
  const [etatAlert,setEtatAlert]=React.useState('');
  const navigate=useNavigate();
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(()=>{
    const getOneData=async()=>{
      try {
        // Create a reference to the specific document by ID
        const documentRef = doc(ObjectifsCollectionRef, id);
    
        // Fetch the document
        const documentSnapshot = await getDoc(documentRef);
    
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          setOneData(data);

          // handleClickopenEdit();
        } else {
          // The document does not exist
          console.log('Document does not exist');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    }
    getOneData();
  },[])
  console.log(oneData)
  const modifier=async()=>
  {
    try {
      // Créez une référence au document spécifique par son ID
      const documentRef = doc(ObjectifsCollectionRef, id);
      const dataFinal={'data':data.current.value,'title':title.current.value}
      // Utilisez la fonction updateDoc pour mettre à jour le document
      await updateDoc(documentRef, dataFinal);
      await setEtatAlert('success')
      await setMsg('لقد ثم تعديل الاستراتيجية بنجاح');
      handleClick();
      setTimeout(() => {
        setOpen(false);
        navigate('/dashboard/الاستراتيجية');
    }, 2000);
      console.log('Document mis à jour avec succès !');
    } catch (error) {
      // handleClick();
      await setEtatAlert('error')
      await setMsg('لقد وقع خطأ أثناء التعديل');
      handleClick();
      console.error('Erreur lors de la mise à jour du document :', error);
    }
  }
  return (
    <Box>
    {oneData.data?
    <Paper sx={{ width: '80%', overflow: 'hidden',m:'auto' }}>
    <Typography variant="h5" align='right' sx={{marginTop:'3%',marginRight:'3%'}} dir='rtl'><b>تعديل الاستراتيجية :</b></Typography>
    <Stack>
        <Tooltip title='يرجى إدخال عنوان الإستراتيجية إذا كنت تريد التعديل'>
                <TextField
                id="outlined-multiline-static"
                multiline
                rows={1}
                defaultValue={oneData.title}
                inputRef={title}
                sx={{ width:'75%',m:'auto',mt:'3% !important' }}
                dir='rtl'
            />
        </Tooltip>
        <Tooltip title='يرجى إدخال الإستراتيجية إذا كنت تريد التعديل' >
            <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue={oneData.data}
            inputRef={data}
            sx={{ width:'75%',m:'auto',mt:'3% !important' }}
            dir='rtl'
        />
        </Tooltip>
    </Stack>
    <Stack sx={{ width:'75%',display:'flex',flexDirection:'row',justifyContent:'end',mt:'5% !important',mb:'5% !important',m:'auto' }}>
    <Button onClick={modifier} sx={{color:'#226d68'}}>تعديل</Button>
    <Button onClick={()=>navigate('/dashboard/الاستراتيجية')} >رجوع</Button>
    </Stack>
    </Paper>
    :<div>
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
    chargement des donners...
      <CircularProgress color="inherit" />
      
    </Backdrop>
  </div>}
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={etatAlert} sx={{ width: '100%' }}>
          {msg}
        </Alert>
    </Snackbar>
  </Box>
  )
}
