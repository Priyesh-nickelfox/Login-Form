import './App.css';
import { Container, Box, Typography, TextField, Select, MenuItem, Checkbox, Button } from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  typography:{
    fontFamily: "DM Sans"
  }  
})

function App() {

  const [industrySelected, setIndustrySelected] = useState(''); 
  const [productTypeSelected, setProductTypeSelected] = useState('');
  const [budgedRangeSelected, setBudgetRangeSelected] = useState('');


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Container maxWidth='sm' sx={{backgroundColor: '#0F1011', height: '770px', width: '430px', padding: '48px 20px 48px 20px'}}>
          <Box sx={{height: '674px', width: '390px'}}>
            <Typography variant='h4' sx={{fontSize: '32px', fontWeight: '700', color: '#FFFFFF'}}>Let's Connect</Typography>
            <Box sx={{Width: '390px', height: '625px', border: '1px solid #36363C', borderRadius: '16px', padding: '16px', marginTop: '24px', backgroundColor: '#21222433'}}>
              <form action="">

              <TextField label="Full Name" variant="outlined" sx={{width: '352px', backgroundColor: '#212224', borderRadius: '8px', '& .MuiInputLabel-root': {color: '#F4F6FD'}}}/>

              <Box sx={{width: '358px', margin: '20px 0px'}}>
                 <TextField label="Email" variant='outlined' sx={{marginRight: '12px', width: '169px', backgroundColor: '#212224', borderRadius: '8px', '& .MuiInputLabel-root': {color: '#F4F6FD'}, }}/>
                 <TextField label="Phone Number" variant='outlined' sx={{width: '170px', backgroundColor: '#212224', borderRadius: '8px', '& .MuiInputLabel-root': {color: '#F4F6FD'}}}/>
              </Box>
              <TextField label="Company Name" variant='outlined' sx={{width: '352px', backgroundColor: '#212224', borderRadius: '8px', '& .MuiInputLabel-root': {color: '#F4F6FD'}}}/>
  
              <Box sx={{width: '358px', margin: '20px 0px'}}>
              <Select value={industrySelected} onChange={(event) => setIndustrySelected(event.target.value)} displayEmpty sx={{width: '169px', borderRadius: '8px' ,marginRight: '12px', color: '#F4F6FD', backgroundColor: '#212224'}}>
              <MenuItem value={''} disabled>Industry</MenuItem>
              <MenuItem value={'Option1'}>Option 1</MenuItem>
              <MenuItem value={'Option2'}>Option 2</MenuItem>
              <MenuItem value={'Option3'}>Option 3</MenuItem>                                               
              </Select>
              <Select value={productTypeSelected} onChange={(event) => setProductTypeSelected(event.target.value)} displayEmpty sx={{width: '169px', borderRadius: '8px', backgroundColor: '#212224', color: '#F4F6FD'}}>
              <MenuItem value={''} disabled>Product Type</MenuItem>
              <MenuItem value={'Option1'}>Option 1</MenuItem>
              <MenuItem value={'Option2'}>Option 2</MenuItem>
              <MenuItem value={'Option3'}>Option 3</MenuItem>
              </Select>
              </Box>

              <Select value={budgedRangeSelected} onChange={(event) => setBudgetRangeSelected(event.target.value)} displayEmpty sx={{width: '352px', borderRadius: '8px', backgroundColor: '#212224', color: '#F4F6FD'}}>
              <MenuItem value={''} disabled>Budget Range</MenuItem>
              <MenuItem value={'Option1'}>Option 1</MenuItem>
              <MenuItem value={'Option2'}>Option 2</MenuItem>
              <MenuItem value={'Option3'}>Option 3</MenuItem>
              </Select>

              <TextField label="Additional Requirements or Questions" variant="outlined" multiline rows='2' sx={{width: '352px', backgroundColor: '#212224', borderRadius: '8px', '& .MuiInputLabel-root': {color: '#F4F6FD'}, marginTop: '20px'}}/>

              <Box sx={{width: '358px', margin: '20px 0px', display: 'flex'}}>
                <Checkbox sx={{height: '24px', width: '24px', borderRadius: '3px', backgroundColor: '#212224'}}></Checkbox>
                <Typography variant='body1' sx={{fontWeight: '400', fontSize: '14px', color: '#C1C1C9', marginLeft: '15px', fontSize: '14px', width: '318px', height: '42px'}}>I understand & consent to my personal data being processed in accordance with Teche AI</Typography>
              </Box>

              <Button variant='contained' sx={{color: '#0F1011', backgroundColor: '#FFFFFF', width: '358px', height: '48px', borderRadius: '10px', fontWeight: '700'}}>SUBMIT</Button>
              </form>
            </Box>
          </Box>
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
