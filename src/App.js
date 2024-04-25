
import './App.css';
import Detail from './components/detail_filling_page/detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Aboutus from './components/about_us_page/aboutus';

import Previewpage from './components/preview_page/priview';
import Mytemplates from './components/homepage/my_templates';



function App() {


  return (

    <BrowserRouter><Routes>
      <Route path='/' element={<Mytemplates />}></Route>
      <Route path='det' element={<Detail/>}></Route>
      <Route path="prev" element={<Previewpage/>}></Route>
    
      <Route path='/AboutUs'  element={<Aboutus/>}></Route>
      
    </Routes>

    </BrowserRouter>

  );
}

export default App;
