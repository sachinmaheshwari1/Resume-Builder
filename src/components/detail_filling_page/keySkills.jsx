import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import {Typography} from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';


function AddSkills(props){
//adding keyskills experience by mapping
  const {register,errors}=props;

const {append,fields,remove}=useFieldArray({name:"KeySkills"})


return(<>
{fields.map((item,index)=>{return(<>

<Grid key={item.id} container spacing={2}>
 
  
        <Grid item xs={6} sx={{mt:2}}>
          <TextField id="filled-basic" label={`skill ${index+3}`} {...register(`KeySkills[${index}].Skill`,{ required: true })} defaultValue={item.skills} variant="outlined" fullWidth/>
          {errors.Skill_2 && <span>*This skill field is required*</span>}
        </Grid>
        <Grid item xs={6}>
        <Box sx={{m:2}}><Button  variant='contained' color='error' onClick={()=>{remove(index)}}>Remove</Button></Box>
        </Grid>
      </Grid>
      
      
      </>)})}

      <Grid item xs={12}>
       
        <Stack direction="row" spacing={2} justifyContent="center">
      
      <Button onClick={()=>{append()}}>Add skill</Button>
    </Stack>
        </Grid>
</>
  
)


}


 function KeySkills() {
  const { register,formState: { errors }} = useFormContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
         <Typography variant='h4'  m={3}>
       Key Skills
        </Typography>
      <Grid container spacing={2}>
        
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Skill 1" {...register(`Skill_1`,{ required: true })} variant="outlined" fullWidth/>
          {errors.Skill_1 && <span>*This skill field is required*</span>}
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Skill 2" {...register(`Skill_2`,{ required: true })} variant="outlined"fullWidth />
          {errors.Skill_2 && <span>*This skill field is required*</span>}
        </Grid>

       
      </Grid>
      <Grid item xs={12}>   <AddSkills register={register} errors={errors} /></Grid>

    </Box>
  );
}
export default  KeySkills;






