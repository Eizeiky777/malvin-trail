import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from "./redux";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// container
import Home from './container/home';
import About from './container/about';
import Gallery from './container/gallery';
import Journal from './container/journal';
import Place from './container/place';
import Contact from './container/contact';


// main container
import Container from './container';

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/place" component={Place} />
            <Route exact path="/journal" component={Journal} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Container} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
