import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



function NavTabs(){
    const [value, setValue] = React.useState(0);
    console.log(value)

    const handleChange = (event, newValue) => {

       
        setValue(newValue);
    };

return(<>
<Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
<Tabs

    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons={false}
    aria-label="scrollable prevent tabs example"
    orientation="vertical"

>
    <Tab style={{ alignItems: 'flex-start' }} label="Personal Info"  />
    <Tab style={{ alignItems: 'flex-start' }} label="Work Experience"  />
    <Tab style={{ alignItems: 'flex-start' }} label="Education" />
    <Tab style={{ alignItems: 'flex-start' }} label="Key Skills" />  </Tabs></Box>
   
    </>)
  
    
}
export default NavTabs;