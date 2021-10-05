import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Router>
        <MenuBar></MenuBar>
        <Switch>

          <Route exact path='/'>
            <Banner></Banner>
            <About></About>
            <Courses></Courses>
            <Services></Services>
            <Contact></Contact>
          </Route>
          <Route path='/home'>
            <Banner></Banner>
            <About></About>
            <Courses></Courses>
            <Services></Services>
            <Contact></Contact>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
