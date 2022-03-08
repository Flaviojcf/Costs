import {BrowserRouter, Route, Routes, Link}from 'react-router-dom'
import Container from './components/layout/Container';
import Home from './components/pages/Home/Home';
import Company from './components/pages/Company/Company';
import Contact from './components/pages/Contact/Contact';
import NewProject from './components/pages/NewProject/NewProject';
import Projects from './components/pages/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
        <Container  customClass='minHeight'>
        <Routes>
            <Route path= "/Home" element={<Home/>}/>
            <Route path= "/Projects" element={<Projects/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>    
          </Routes>
          </Container>
        <Footer />
        </BrowserRouter>
     
  );
}
export default App;
