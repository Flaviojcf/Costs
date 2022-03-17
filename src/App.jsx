import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Container from './components/layout/Container/Container';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import NewProject from './components/pages/NewProject/NewProject';
import Projects from './components/pages/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Edit from './components/Edit/Edit';


function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
        <Container  customClass='minHeight'>
        <Routes>
            <Route path= "/Home" element={<Home/>}/>
            <Route path= "/Projects" element={<Projects/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/> 
            <Route path= "/Edit/:id" element={<Edit/>}/>       
          </Routes>
          </Container>
        <Footer/>
        </BrowserRouter>
     
  );
}
export default App;
