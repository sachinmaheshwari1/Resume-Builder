import React from 'react'
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import Stack from '@mui/material/Stack';
import Personal_Info from "./personal_info"
import { updateinfo } from "../../state/action"
import { Button } from "@mui/material"
import Work_info from "./workexperience"
import Education from "./education"
import KeySkills from "./keySkills"
import DrawerAppBar from '../navbar/navbar'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {  useNavigate } from 'react-router-dom'

// As soon as details are filled for particular categories/sections browser moves further to next fields if ! then same field on same page

function Detail() {
    const method = useForm()
    const navigate=useNavigate()
    const { formState: { errors }} = useForm();
    let input = useSelector(state => state.updateinfos)
    //dispacting data to store
    const dispatch = useDispatch()
    let onSubmit = (data) => {
        
        dispatch(updateinfo(data))
        // alert("submitted")
        console.log("data", data)
        navigate('/prev')
       


    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {



        setValue(newValue);
    };
  



    return (<>




        <DrawerAppBar />

        <Grid container spacing={2} >
            <Grid>

                <Grid >

                    <Item>
                        <Tabs

                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons={false}
                            aria-label="scrollable prevent tabs example"
                            orientation="vertical"



                        >
                            <Tab style={{ alignItems: 'flex-start' }} label="Personal Info" disabled={(value==0)?false:true}/>
                            <Tab style={{ alignItems: 'flex-start' }} label="Work Experience" disabled={(value==1)?false:true} />
                            <Tab style={{ alignItems: 'flex-start' }} label="Education" disabled={(value==2)?false:true}/>
                            <Tab style={{ alignItems: 'flex-start' }} label="Key Skills" disabled={(value==3)?false:true} />  </Tabs>

                    </Item>





                </Grid>
            </Grid>
            <Grid item xs={10} >
                {console.log(value,"this is value")}
                <FormProvider {...method}>
                    <form onSubmit={method.handleSubmit(onSubmit)} >
                        {value == 0 &&(<Personal_Info />)}
                        {value == 1 && (<Work_info />)}
                        {value == 2 && (<Education />)}
                        {value == 3 && (<KeySkills />)}
                        
                        <Grid container spacing={2} >
                        <Stack direction="row" spacing={6} mt={3} ml={2}>
                       <Button  variant="outlined" onClick={() => { (value >= 1) && setValue(value - 1) }}>Back</Button>
{(value<3)&&<Button  variant="contained"   onClick={method.handleSubmit(() => {(value <= 2)&&setValue(value + 1) })}>Next</Button>}
                              <Grid xs={4}>{value==3 && (<Button   variant="contained" type="submit" >Preview</Button>)}</Grid>
                                </Stack>
                        </Grid>
                    </form>
                </FormProvider>

            </Grid>
        </Grid>



    </>

    )

}
export default Detail;

