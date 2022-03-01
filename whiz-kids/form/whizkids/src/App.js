//import logo from './logo.svg';
import wklogo from './Whiz_Kids_Thunderbolt.png';

import './App.css';
import * as React from 'react';
import video from './bottom_flow.mp4';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// For dates
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

// Buttons
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Firebase
import {initializeApp} from 'firebase/app';
import { getFirestore, collection} from 'firebase/firestore';
import {addDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8t3YC11TE-SY268nRTpmoEAW8p4CAhS4",
  authDomain: "dossier-cb890.firebaseapp.com",
  projectId: "dossier-cb890",
  storageBucket: "dossier-cb890.appspot.com",
  messagingSenderId: "955615741651",
  appId: "1:955615741651:web:dff68ca6fc1d8bd89cb626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let CURRENT_DATA = {
  major: '',
  sport: '',
  fun: '',
  genre: '',
  nickname: '',
  instagram: '',
  favoriteColor: '',
  threeFriends: '',
  yaleEmail: '',
}

async function sendDataToFirestore() {
  console.log(CURRENT_DATA);
  if (
    CURRENT_DATA.major === '' || 
    CURRENT_DATA.sport === '' || 
    CURRENT_DATA.fun === '' || 
    CURRENT_DATA.genre === '' || 
    CURRENT_DATA.nickname === '' || 
    CURRENT_DATA.instagram === '' || 
    CURRENT_DATA.favoriteColor === '' || 
    CURRENT_DATA.threeFriends === '' || 
    CURRENT_DATA.yaleEmail === '') {
    alert('Please fill out all fields.')
    return;
  }
  await addDoc(collection(db, "entries"), CURRENT_DATA);
}

function createFormGrid() {
  return (
    <Grid container spacing={2} style={{
      width: '50vw'
    }}>

    <Grid item xs={4}>
      <MajorSelects />
    </Grid>
    <Grid item xs={8}>
      <SportsSelects />
    </Grid>
    <Grid item xs={8}>
      <ForFunTextField />
    </Grid>
    <Grid item xs={4}>
      <GenreSelects />
    </Grid>
    <Grid item xs={4}>
      <NicknameTextField />
    </Grid>
    <Grid item xs={4}>
      <InstagramHandleTextField />
    </Grid>
    <Grid item xs={4}>
      <FavoriteColorTextField />
    </Grid>
    <Grid item xs={12}>
      <ThreeFriendsTextField />
    </Grid>
    <Grid item xs={12}>
      <YaleEmailTextField />
    </Grid>
    <Grid item xs={12}>
      <Button 
        variant="outlined" 
        style= {{
          backgroundColor: '#8014ff',
          border: 'none',
          color: 'black',
          fontWeight: 'bold',
        }}
        onClick={sendDataToFirestore}
        >Join the Whiz Kids</Button>
    </Grid>
    <Grid item xs={6}>
      <p style={{fontSize: 12,}}>
        All fields required. We're deleting emails once we start making
        the NFTs, so none of your data will be stored.
      </p>
    </Grid>
    <Grid item xs={6}>
      <h2>By young talent, for young talent.</h2>
    </Grid>
    <Grid item xs={12}>
    <a rel="noreferrer" href="https://www.prdgys.com/whiz-kids/" target="_blank"><h3>prdgys.com/whiz-kids</h3></a>
    </Grid>
    </Grid>
  );
}

export function FavoriteColorTextField() {
  const [value, setValue] = React.useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.favoriteColor = event.target.value;
  }

  return (
    <TextField 
      id="textfields" 
      label="Favorite Color(s)" 
      placeholder="(ex: Blue, Navy Blue)"
      variant="outlined" 
      style= {{
        backgroundColor: '#171717',
        width: '100%',
        color: 'white',
      }}
      value = {value}
      onChange = {handleChange}
    />
  )
}

export function InstagramHandleTextField() {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.instagram = event.target.value;
  };

  return (
    <TextField 
    id="textfields" 
    label="Instagram Handle" 
    placeholder='(ex: @seunomonije or N/A)'
    variant="outlined" 
    style= {{
      backgroundColor: '#171717',
      width: '100%',
      color: 'white',
    }} 
    value = {value}
    onChange = {handleChange}
    />
  )
}

export function NicknameTextField() {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.nickname = event.target.value;
  };

  return (
    <TextField 
    id="textfields" 
    label="Nickname" 
    placeholder='(ex: computabeast)'
    variant="outlined" 
    style= {{
      backgroundColor: '#171717',
      width: '100%',
      color: 'white',
    }} 
    value = {value}
    onChange = {handleChange}
    />
  )
}

export function ForFunTextField() {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.fun = event.target.value;
  };

  return (
    <TextField 
    id="textfields" 
    label="Hobbies/Interests" 
    placeholder='(ex: Skateboarding, Tennis, Smash Bros.)'
    variant="outlined" 
    style= {{
      backgroundColor: '#171717',
      width: '100%',
      color: 'white',
    }} 
    value = {value}
    onChange = {handleChange}
    />
  )
}

export function ThreeFriendsTextField() {
  const [value, setValue] = React.useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.threeFriends = event.target.value;
  }

  return (
    <TextField 
      id="textfields" 
      label="Three Yalies you respect/admire/love" 
      placeholder="(ex: Sunny Agrawal, Trenton Johnson, Rosa Chang)"
      variant="outlined" 
      style= {{
        backgroundColor: '#171717',
        width: '80%',
        color: 'white',
      }}
      value = {value}
      onChange = {handleChange}
    />
  )
}

export function YaleEmailTextField() {
  const [value, setValue] = React.useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.yaleEmail = event.target.value;
  }

  return (
    <TextField 
      id="textfields" 
      label="Yale Email" 
      placeholder="(ex: seun.omonije@yale.edu)"
      variant="outlined" 
      style= {{
        backgroundColor: '#171717',
        width: '80%',
        color: 'white',
      }}
      value = {value}
      onChange = {handleChange}
    />
  )
}

export function GenreSelects() {
  let name = 'Favorite Music';

  let GENRE_SELECTIONS = [
    'Hip Hop',
    'Rap',
    'Classical',
    'Alternative',
    'Pop',
    'White Girl Music',
    'Old School',
    'Rock',
  ];

  const [value, setValue] = React.useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.genre = event.target.value;
  }

  return  (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Major"
          onChange={handleChange}
        >
        {
          GENRE_SELECTIONS.map((selection, index) => {
            return (
              <MenuItem key={index} value={selection}>{selection}</MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  </Box>
  );
}

export function MajorSelects() {
  let name = 'Major';

  let MAJOR_SELECTIONS = [
    'Computer Science',
    'Engineering',
    'Humanities',
    'Arts/Music',
    'Political Science',
  ];

  const [value, setValue] = React.useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.major = event.target.value;
  }

  return  (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Major"
          onChange={handleChange}
        >
        {
          MAJOR_SELECTIONS.map((selection, index) => {
            return (
              <MenuItem key={index} value={selection}>{selection}</MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  </Box>
  );

}

export function SportsSelects() {

  let name = 'Sport';

  let SPORTS_SELECTIONS = [
    "Varsity Athlete",
    'Club Sport Athlete',
    'Intramural Athlete/Played in high school',
    "I don't care about sports",
  ]

  const [value, setValue] = React.useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    CURRENT_DATA.sport = event.target.value;
  }
  
  return  (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Major"
          onChange={handleChange}
        >
        {
          SPORTS_SELECTIONS.map((selection, index) => {
            return (
              <MenuItem key={index} value={selection}>{selection}</MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  </Box>
  );
}

export function DateSelect() {
  const [value, setValue] = React.useState(new Date('2000-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
    CURRENT_DATA.date = newValue;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          id="date-picker"
          label="Birthday"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} id="textfields" style= {{
            backgroundColor: '#171717',
            width: '100%',
          }}/>}
        />
    </LocalizationProvider>
  );
}

function App() {

  return (
    <div className="App">
      <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
      </video>
      <header className="App-header">
        <img src={wklogo} className="App-logo" alt="logo" />
        {createFormGrid()}
        
      </header>
    </div>
  );
}

export default App;
