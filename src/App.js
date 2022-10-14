import React from "react";
//Components
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import Contact from './components/Contact';

import Main from './components/Main';

//images
import aboutImage from './images/about.png';
import aboutImage1 from './images/download.png';

const App = () => {
    return (
        <>
<Header />
        <Main />

        {/* <Header />
        <Feature />
        <About image={aboutImage} title='Comes with All you Need for Daily Life' button='Get the App' />
        
        <Presentation />

        <About image={aboutImage1} title='fdkfjdfjkjfdj Need for Daily Life' button='Press Me' /> 

        <Contact /> */}

        </>
    )   
}    

export default App;
