import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import SchoolIcon from '@mui/icons-material/School';

import WorkIcon from '@mui/icons-material/Work';
import KeyIcon from '@mui/icons-material/Key';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Template1(prop) {
  console.log("input is ",prop)
  let education=prop.input.Educations;
  let experience=prop.input.experiences;
  let skill=prop.input.KeySkills
  ;
  console.log("skill is ",skill)
 
  
 

  return (
    // header starts
    <div style={{ width: '210mm',height:"297mm" }} >
    <Paper id="Temp4" elevation={3}  >
    
      
      <Grid container spacing={2} backgroundColor="#df487f" color="white" borderRadius={2} >
      <Grid  xs={6} >
<Typography  ml={1} variant='h3'  >{`${prop.input.First_Name}  ${prop.input.Last_Name}`}</Typography>
          
        </Grid>
        
          
        <Grid xs={6} ><CallIcon /><Typography variant='h6' >{prop.input.Mobile}</Typography></Grid>
       
        <Grid  xs={6}>  <HomeIcon /><Typography variant='h6' >{prop.input.Address}</Typography></Grid>
        <Grid  xs={6} > <EmailIcon  /><Typography  variant='h6'>{prop.input.Email}</Typography></Grid>
        
         
        
        </Grid>
       
      
      {/* headers end    */}

       {/* objective starts */}
     
      <Box sx={{ flexGrow: 1,boxShadow: 1  }}>
        <Grid container spacing={2} >

          <Grid xs={12} >
            

            <Typography variant='h5' color="#1F8C9E"  > Objective <FlagCircleIcon /></Typography>
            <Item><Typography ml={4} variant='h6' align='left'>{prop.input.Objective}</Typography></Item>
          </Grid>
           {/* objective info Ends */}
                    {/* work info starts */}

                    <Grid  xs={12}  >
            <Typography variant='h5' color="#1F8C9E"  >Work Experience <WorkIcon /></Typography>
            <Item >
            <Typography variant='h6' >Work Experience 1</Typography>
              
            <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Job Title:</Typography> {prop.input.Job_Title}</Typography>

<Typography ml={4} variant='h6' align='left' ><Typography component="span" fontWeight="bold">Organization:</Typography> {prop.input.Organization}</Typography>

<Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Time duration:</Typography>  {`${prop.input.Start_Date} to
               ${prop.input.End_Date}`}</Typography>
               </Item>
               
               {
              experience&&experience.map((exp,index)=>(
                
              <div key={index}> <Item> 
                <Typography variant='h6' >Work Experience {`${index+2}`}</Typography>
                <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Job Title:</Typography> {exp.Job_Title}</Typography>

              <Typography  ml={4} variant='h6' align='left' >< Typography component="span" fontWeight="bold">Organization:</Typography >{exp.Organization}</Typography>
              <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Degree:</Typography> {exp.Degree}</Typography>
              <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Time Duration:</Typography> 
              {`${exp.Start_Date} 
               ${exp.End_Date}`}</Typography> </Item></div>
              ))}
              

              
          </Grid>
          {/* work info Ends */}
 {/* education info starts */}
          <Grid xs={12} >
          <Typography variant='h5' color="#1F8C9E"  > Education Detail <SchoolIcon/></Typography>
          <Typography variant='h6' >Education 1</Typography>
            
          <Item >
              <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Type:</Typography> {prop.input.Type}</Typography>

              <Typography ml={4} variant='h6' align='left' ><Typography component="span" fontWeight="bold">University:</Typography>{prop.input.University}</Typography>
              <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Degree:</Typography> {prop.input.Degree}</Typography>
              <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Time Duration:</Typography> 
              {`${prop.input.Start_year} to
               ${prop.input.End_year}`}</Typography>
            </Item>  
           
              
              {
              education&&education.map((edu,index)=>(
                
              <div key={index}> <Item>
                <Typography variant='h6' >Education {`${index+2}`}</Typography>
                
                  <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Type:</Typography> {edu.Type}</Typography>

              <Typography ml={4} variant='h6' align='left' ><Typography component="span" fontWeight="bold">University:</Typography>{edu.University}</Typography>
              <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Degree:</Typography> {edu.Degree}</Typography>
              <Typography ml={4} variant='h6' align='left'><Typography component="span" fontWeight="bold">Time Duration:</Typography> 
              {`${edu.Start_year} 
               ${edu.End_year}`}</Typography></Item> </div>
              ))}
              
              
            
            
            
            
                   </Grid>
          {/* education info Ends */} 
            {/* Key info info starts */}

          <Grid xs={12}>
            <Typography variant='h5' color="#1F8C9E"  >Key Skills<KeyIcon /></Typography>
            <Item>
            <Typography ml={4} variant='h6' align='left' >{prop.input.Skill_1}</Typography>
            <Typography ml={4} variant='h6' align='left' >{prop.input.Skill_2}</Typography>

            {
              skill&&skill.map((sk,index)=>(
                
              <div key={index}>  <Typography ml={4} variant='h6' align='left'>{sk.Skill}</Typography> </div>
              ))}
            </Item>
          
          </Grid>
          {/* Key info info Ends */}

        </Grid>
      </Box>




   
    </Paper></div>
  )
}


export default Template1;