
import React from "react";
import { Route,  Switch,BrowserRouter } from 'react-router-dom';


import firebaseConfig from '../../firebase-config';
//Redux
import { Provider } from "react-redux";
import store from './redux/store'
//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer";
import LoginUserNew from './components/LoginUserNew';

import Carrito from "./components/Carrito";
import Footer from './components/Footer'

import withFirebaseAuth from './firebase/login'

//Firebase
import firebase from "firebase/app";
import "firebase/auth";
//import config from '../../firebase-config';

import {
  FirebaseAuthProvider,
  //FirebaseAuthConsumer,
  //IfFirebaseAuthed,
  //IfFirebaseAuthedAnd
} from "@react-firebase/auth";



function App({ user, signOut, signInWithGoogle, signInWithFacebook }) {
  
  return (


    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <Provider store={store}>
        <>
      <style>
      {'body{background-image: url(https://media.discordapp.net/attachments/771492002147598348/774013141330952272/flowers.jpg?width=860&height=532);background-position: center center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;height: 100%; }'}
    </style>
        <NavBar />
        <BrowserRouter>
          <div >
            <Switch>
            <Route exact path='/login' component={LoginUserNew}></Route>
              <Route exact path='/shopping' component={Carrito}></Route>
              <Route exact path='/' component={ProductosContainer}></Route>
            </Switch>
          </div>
        </BrowserRouter>
        
       <Footer/> 
        </>
      </Provider>
    </FirebaseAuthProvider>

  );
}

export default withFirebaseAuth(App);
