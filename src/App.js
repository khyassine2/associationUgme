import './App.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Dashboard from './components/dashboard/Dashboard';
import Objectif from './components/dashboard/Objectif';
import Realisation from './components/dashboard/Realisation';
import Vision from './components/dashboard/Vision';
import Strategie from './components/dashboard/Strategie';
import Partenariat from './components/dashboard/Partenariat';
import Structures from './components/dashboard/Structures';
import ObjectifEdit from './components/dashboard/Objectifs/ObjectifEdit';
import ObjectifAdd from './components/dashboard/Objectifs/ObjectifAdd';
import RealisationAdd from './components/dashboard/Realisation/RealisationAdd';
import RealisationEdit from './components/dashboard/Realisation/RealisationEdit';
import VisionEdit from './components/dashboard/Vision/VisionEdit';
import VisionAdd from './components/dashboard/Vision/VisionAdd';
import StrategieEdit from './components/dashboard/Strategie/StrategieEdit';
import StrategieAdd from './components/dashboard/Strategie/StrategieAdd';
import PartenariatEdit from './components/dashboard/Partenariat/PartenariatEdit';
import PartenariatAdd from './components/dashboard/Partenariat/PartenariatAdd';

function App() {
  const [etatLogin,setEtatLogin]=useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      user?setEtatLogin(true):setEtatLogin(false);
  })
  },[])
  // console.log(etatLogin);
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home etat={etatLogin}/>}/>
      <Route path='/login' element={etatLogin===true?<Home/>:<Login />} />
      <Route path='/dashboard/' element={<Dashboard/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='الأهداف/' >
            <Route index element={<Objectif/>}/>
            <Route path=':id' element={<ObjectifEdit/>}/>
            <Route path='إضافة' element={<ObjectifAdd/>}/>
        </Route>
        <Route path='المنجزات/'>
            <Route index element={<Realisation/>}/>
            <Route path=':id' element={<RealisationEdit/>}/>
            <Route path='إضافة' element={<RealisationAdd/>}/>
        </Route>
        <Route path='الرؤيا/' >
            <Route index element={<Vision/>}/>
            <Route path=':id' element={<VisionEdit/>}/>
            <Route path='إضافة' element={<VisionAdd/>}/>
        </Route>
        <Route path='الاستراتيجية/'>
            <Route index  element={<Strategie/>}/>
            <Route path=':id'  element={<StrategieEdit/>}/>
            <Route path='إضافة' element={<StrategieAdd/>}/>
        </Route>
        <Route path='الشراكات/'>
            <Route index  element={<Partenariat/>}/>
            <Route path=':id'  element={<PartenariatEdit/>}/>
            <Route path='إضافة' element={<PartenariatAdd/>}/>
        </Route>
        {/* <Route path='الهياكل/'>
             <Route index  element={<Structures/>}/>
            <Route path=':id'  element={<PartenariatEdit/>}/>
            <Route path='إضافة' element={<PartenariatAdd/>}/>
        </Route> */}
      </Route>
     </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
