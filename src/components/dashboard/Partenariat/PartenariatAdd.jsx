import { Box, Button, Paper, Stack, TextField, Typography,Snackbar,Alert, Tooltip } from '@mui/material'
import { Firestore ,addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function PartenariatAdd() {
    const img=React.useRef();
    const navigate=useNavigate();
    const [msg,setMsg]=React.useState('');
    const [etatAlert,setEtatAlert]=React.useState('');
    const [openAlert, setOpenAlert] = React.useState(false);
    const ObjectifsCollectionRef=collection(db,'partenariat');
    const ajouter = async () => {
        try {
            if ( !img.current.files[0]) {
              setMsg('الرجاء تحديد ملف وإدخال البيانات.');
              setEtatAlert('error');
              setOpenAlert(true);
            } else {
                const file = img.current.files[0];
                const collectionRef = ObjectifsCollectionRef;
                const timestamp = Date.now();
                const fileNameWithTimestamp = `${timestamp}_${file.name}`;
                const folderPath='partenariat';
                const fullPath = `${folderPath}/${fileNameWithTimestamp}`;
                const storageRef = ref(storage, fullPath);
                await uploadBytesResumable(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
                const dataFinal = {
                    img: downloadURL,
                };
                await addDoc(collectionRef, dataFinal);
                setMsg('لقد تم إضافة الشراكة بنجاح');
                setEtatAlert('success');
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                    navigate('/dashboard/الشراكات');
                }, 2000);
            }
          } catch (error) {
            setMsg(error.message);
            setEtatAlert('error');
            setOpenAlert(true);
            console.log(error);
          }
      }
      
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
  return (
    <Box component='form' enctype='multipart/form-data'>
    <Paper sx={{ width: '80%', overflow: 'hidden',m:'auto' }}>
      <Typography variant="h5" align='right' sx={{marginTop:'3%',marginRight:'3%'}} dir='rtl'><b>إضافة الشراكة :</b></Typography>
      <Stack>
      <Tooltip title='إختر صورة للشراكة'>
      <TextField
          id="file"
          type="file"
          inputRef={img}
          sx={{ width:'75%',m:'auto',mt:'2% !important' }}
          dir='rtl'
        />
      </Tooltip>
      </Stack>
      <Stack sx={{ width:'75%',display:'flex',flexDirection:'row',justifyContent:'end',mt:'5% !important',mb:'5% !important',m:'auto' }}>
      <Button onClick={ajouter} sx={{color:'#226d68'}}>إضافة</Button>
      <Button onClick={()=>navigate('/dashboard/الشراكات')} >رجوع</Button>
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
