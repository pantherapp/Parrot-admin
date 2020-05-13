import React from 'react';

import { Admin, Resource } from 'react-admin';
// import { RestProvider, AuthProvider, base64Uploader } from 'ra-data-firestore-client';
import { RestProvider, AuthProvider } from './lib'

import { VoiceList, VoiceShow } from './models';

const firebaseConfig = {
  apiKey: "AIzaSyBhiU47emMZuyJ9AQbJPesDKo5l6qNL7O8",
  authDomain: "parrot-c87c3.firebaseapp.com",
  databaseURL: "https://parrot-c87c3.firebaseio.com",
  projectId: "parrot-c87c3",
  storageBucket: "parrot-c87c3.appspot.com",
  messagingSenderId: "470642441118",
  appId: "1:470642441118:web:02d787a5530ba65da6348f"
};
const trackedResources = [{ name: 'voices', path: 'voices' }];

const authConfig = {
  userProfilePath: '/users/',
  userAdminProp: 'isAdmin'
};

// const dataProvider = base64Uploader(RestProvider(firebaseConfig, { trackedResources }));
const dataProvider = RestProvider(firebaseConfig, { trackedResources });
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={AuthProvider(authConfig)}>
    <Resource name="voices" list={VoiceList} show={VoiceShow} />
  </Admin>
);

export default App;
