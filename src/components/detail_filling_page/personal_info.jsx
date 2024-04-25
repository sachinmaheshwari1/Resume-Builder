import * as React from 'react';

import Box from '@mui/material/Box';
import { useFormContext,Controller } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import {  TextField, Typography } from '@mui/material';




 function Personal_info() {
 

  const { register,formState: { errors }} = useFormContext()
  
  
  
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Typography variant='h4'  m={3}>
        Personal Information
        </Typography>
      <Grid container spacing={2}>


        <Grid item xs={6}>
         
          <TextField
         
          id="filled-basic" label="First Name" {...register("First_Name",{ required: true, pattern: /^[A-Za-z]+$/
         })} variant="outlined" fullWidth
         />
          {errors.First_Name && <span>**Please enter only alphabetic characters**</span>}
          
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Last Name" {...register("Last_Name",{  pattern: /^[A-Za-z]+$/
         })}  variant="outlined"fullWidth />
         {errors.Last_Name && <span>**Please enter only alphabetic characters**</span>}
        </Grid>
        

        <Grid item xs={6}>
          <TextField id="filled-basic" label="Email"{...register("Email",{ required: true, pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
             })} variant="outlined" fullWidth/>
          {errors.Email && <span>**Please enter a valid email address**</span>}
        </Grid>
       
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Mobile"{...register("Mobile",{ required: true,pattern: /^[0-9]{10}$/ })} variant="outlined" fullWidth />
          {errors.Mobile && <span>*Please enter a valid 10-digit mobile number*</span>}
        </Grid>
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Address" {...register("Address",{ required: true })} variant="outlined" fullWidth multiline />
          {errors.Address && <span>*This Address field is required*</span>}
        </Grid>
        
     
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Objective" {...register("Objective",{ required: true,
         })} variant="outlined" multiline fullWidth/>
          {errors.Objective && <span>***Please enter only alphabetic characters  in Objective** </span>}
        </Grid>
      

      </Grid>
    </Box>
  );
}
export default  Personal_info;