import { Alert, Avatar, Backdrop, Button, CircularProgress, Paper, Snackbar, Stack, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MuiAlert from '@mui/material/Alert';
import { db, storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
export default function PartenariatEdit() {
    const {id}=useParams();
    const [oneData,setOneData]=React.useState({});
    const img=React.useRef();
    const ObjectifsCollectionRef=collection(db,'partenariat');
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
    const modifier=async()=>
    {
      try {
        // Créez une référence au document spécifique par son ID
        const documentRef = doc(ObjectifsCollectionRef, id);
        const collectionRef = ObjectifsCollectionRef;
        const timestamp = Date.now();
        
        var dataFinal='';
        if(img.current.files[0]!==undefined)
        {
            const folderPath = 'partenariat'; // Remplacez par le chemin du dossier souhaité
            const fileNameWithTimestamp = `${timestamp}_${img.current.files[0].name}`;
            // Créez le chemin complet du fichier dans le dossier spécifique
            const fullPath = `${folderPath}/${fileNameWithTimestamp}`;
            const file=img.current.files[0]
            const storageRef = ref(storage, fullPath);
            await uploadBytesResumable(storageRef, file);
            const upload = await getDownloadURL(storageRef);
            console.log(upload);
            dataFinal={'img':upload}
            
        }else if(img.current.files[0]==undefined)
        {
            dataFinal={'img':oneData.img};
        }
        // Utilisez la fonction updateDoc pour mettre à jour le document
        await updateDoc(documentRef, dataFinal);
        await setEtatAlert('success');
        await setMsg('لقد ثم تعديل الشراكة بنجاح');
        handleClick();
        setTimeout(() => {
            setOpen(false);
            navigate('/dashboard/الشراكات');
        }, 2000);
        // console.log('Document mis à jour avec succès !');
      } catch (error) {
        // handleClick();
        await setEtatAlert('error')
        await setMsg('لقد وقع خطأ أثناء التعديل');
        handleClick();
        console.error('Erreur lors de la mise à jour du document :', error);
      }
    }
  return (
    <Box component='form' enctype='multipart/form-data'>
    {oneData.img?
    <Paper sx={{ width: '80%', overflow: 'hidden',m:'auto' }}>
    <Typography variant="h5" align='right' sx={{marginTop:'3%',marginRight:'3%'}} dir='rtl'><b>تعديل المنجز:</b></Typography>
    <Stack sx={{ mt:'3%' }}>
        <Stack direction='row' sx={{ justifyContent:'center' }}>
            <Tooltip title='صورة الشراكة القديمة'>
                    <img
                        alt="img"
                        src={oneData.img}
                        // sx={{  }}
                        height='80px'
                        width='120px'
                    />
            </Tooltip>
        </Stack>
        <Stack sx={{ mt:'3%' }} direction='row'>

           <Tooltip title='اختر صورة للشراكة إذا كنت تريد تعديلها'>
              <TextField
                id="outlined-multiline-static"
                type='file'
                inputRef={img}
                sx={{ width:'60%',m:'auto' }}
                dir='rtl'
            />
           </Tooltip>  
           
        </Stack>
    </Stack>
    <Stack sx={{ width:'75%',display:'flex',flexDirection:'row',justifyContent:'end',mt:'5% !important',mb:'5% !important',m:'auto' }}>
    <Button onClick={modifier} sx={{color:'#226d68'}}>تعديل</Button>
    <Button onClick={()=>navigate('/dashboard/الشراكات')} >رجوع</Button>
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
