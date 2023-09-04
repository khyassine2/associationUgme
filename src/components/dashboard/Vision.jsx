import { Alert, Backdrop, Box, Button, CircularProgress, Fab, Snackbar, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState ,useEffect, useRef} from 'react'
import { db } from '../../firebase';
import {collection, deleteDoc, doc, getDoc, getDocs} from 'firebase/firestore';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
export default function Vision() {
  const [data,setData]=useState([]);
  const [oneData,setOneData]=useState({});
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openDelete, setopenDelete] = React.useState(false);
  const [msg,setMsg]=React.useState('');
  const [etatAlert,setEtatAlert]=React.useState('');
  const [idd,setId]=React.useState('');
  const theme = useTheme();
  const textInputRef = useRef(null); 
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate=useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickopenDelete = () => {
    setopenDelete(true);
  };

  const handleCloseopenDelete = () => {
    setopenDelete(false);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const ObjectifsCollectionRef=collection(db,'vision')
  const getData=async()=>{
    const data=await getDocs(ObjectifsCollectionRef);
    setData(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
  }
  useEffect(()=>{
    
    getData();
  },[])
  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  const columns=[
    
    {
      id: 'id',
      label: 'id',
      // minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },{
      id: 'data',
      label: 'data',
      minWidth: 70,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },{
      id: 'operation',
      label: 'operation',
      minWidth: 70,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
   
  ]
  const handleClick = () => {
    setOpenAlert(true);
  };
  // details
  const details = async (id) => {
    try {
      // alert(id)
      // Create a reference to the specific document by ID
      const documentRef = doc(ObjectifsCollectionRef, id);
  
      // Fetch the document
      const documentSnapshot = await getDoc(documentRef);
  
      if (documentSnapshot.exists()) {
        const data = documentSnapshot.data();
        setOneData(data.data);
        handleClickOpen();
      } else {
        // The document does not exist
        console.log('Document does not exist');
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
  };
  // edit 
  const edit=async(id)=>
  {
      try {
        if (id) {
          navigate('/dashboard/الرؤيا/'+id)
        } else {
          console.log('id not fin');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
  }
  // delete 
  const remove=async(id)=>
  {
    try {
      if(id)
      {
        setId(id);
        const documentRef = doc(ObjectifsCollectionRef, id);
  
        // Fetch the document
        const documentSnapshot = await getDoc(documentRef);
    
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          setOneData(data.data);
          
        } else {
          // The document does not exist
          console.log('Document does not exist');
        }
        handleClickopenDelete();
      }
      else
      {
        await setEtatAlert('error')
        await setMsg('id not find');
      }
    } catch (error) {
      await setEtatAlert('error')
        await setMsg(error);
      console.error('Error getting document:', error);
    }
  }
  const remeveFinal=async(id)=>
  {
    try {
      if(id)
      {
          const documentRef = doc(ObjectifsCollectionRef, id);
          await deleteDoc(documentRef);
          await handleCloseopenDelete();
          await setEtatAlert('success');
          await setMsg('لقد ثم حدف الهدف بنجاح');
          await getData();
          await handleClick();
      }
      else
      {
        await setEtatAlert('error')
        await setMsg('id not find');
        handleClick();
      }
    } catch (error) {
      await setEtatAlert('error')
        await setMsg(error);
      console.error('Error getting document:', error);
    }
  }

  // ajouter
  const ajouter=()=>
  {

  }
  return (
    <Box>
      {data.length!==0?<Paper sx={{ width: '80%', overflow: 'hidden',m:'auto' }}>
        <Typography variant="h5" align='right' sx={{marginTop:'3%',marginRight:'3%'}}><b>:الرؤيا</b></Typography>
        <Stack sx={{ width:'95%',display:'flex',flexDirection:'row',justifyContent:'end',m:'auto' }}>
        <Button
      onClick={()=>navigate('/dashboard/الرؤيا/إضافة')}
      variant="contained"
      sx={{
        backgroundColor: '#226d68',
        '&:hover': {
          backgroundColor: '#226d68',
        },
      }}
    >
  إضافة
</Button>
      </Stack>
      <TableContainer sx={{ maxHeight: 440 }} dir='rtl'>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data&&data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                    <TableCell  align='right'>
                     {index+1}
                    </TableCell>
                    <TableCell  align='right'>
                      {row.data}
                    </TableCell>
                    <TableCell  align='right'>
                      <Stack direction="row" >
                        <Tooltip title="Details" sx={{ marginLeft:'4%' }} onClick={()=>details(row.id)}>
                        <Fab size="small" color='primary' aria-label="details">
                          <VisibilityIcon/>
                        </Fab>
                        </Tooltip>
                        <Tooltip title="Modifie" sx={{ marginLeft:'4%' }} onClick={()=>edit(row.id)}>
                        <Fab size="small" color="warning" aria-label="Modifie">
                          <EditIcon/>
                        </Fab>
                        </Tooltip>
                        <Tooltip title="Delete" sx={{ marginLeft:'4%' }} onClick={()=>remove(row.id)}>
                        <Fab size="small" color="error" aria-label="delete">
                          <DeleteIcon/>
                        </Fab>
                        </Tooltip>
                       
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              }
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,20, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>:<div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
      chargement des donners...
        <CircularProgress color="inherit" />
        
      </Backdrop>
    </div>}
    {/* dialog de details */}
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        dir='rtl'
      >
        <DialogTitle id="responsive-dialog-title">
          {" تفاصيل الرؤيا:"}
        </DialogTitle>
        <DialogContent dir='rtl'>
          <DialogContentText>
           {oneData}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          إلغاء
          </Button>
        </DialogActions>
      </Dialog>
      {/* dialog delete */}
      <Dialog
        open={openDelete}
        onClose={handleCloseopenDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir='rtl'
      >
        <DialogTitle id="alert-dialog-title">
          {"هل أنت متأكد من حذف هذه الرؤيا؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" dir='rtl'>
          <b>الرؤيا هي:</b>{oneData}
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={()=>setopenDelete(false)}>إلغاء</Button>
          <Button onClick={()=>remeveFinal(idd)} color='error'>حدف</Button>
        </DialogActions>
      </Dialog>
      {/* snackbar  */}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose1}>
          <Alert onClose={handleClose1} severity={etatAlert} sx={{ width: '100%' }}>
            {msg}
          </Alert>
      </Snackbar>
    </Box>
  )
}
