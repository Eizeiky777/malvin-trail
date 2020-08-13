import React from 'react';

// containers
import Home from './home';
import About from './about';
import Gallery from './gallery';
import Journal from './journal';
import Place from './place';
import Contact from './contact';


const Container = () => {

    return (
        <>
            <div style={{background: 'yellow'}}>
                <Home />
                <About />
                <Gallery />
                <Journal />
                <Place />
                <Contact />
            </div>
        </>
    )
}

export default Container;