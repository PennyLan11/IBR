import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import OurTeam from './pages/OurTeam';
import TrainingProgram from './pages/TrainingProgram';
import FinancialArticles from './pages/FinancialArticles';
import Portfolio from './pages/Portfolio';
import JoinUs from './pages/JoinUs';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/OurTeam' exact component={OurTeam} />
        <Route path='/TrainingProgram' exact component={TrainingProgram} />
        <Route path='/FinancialArticles' exact component={FinancialArticles} />
        <Route path='/Portfolio' exact component={Portfolio} />
        <Route path='/JoinUs' exact component={JoinUs} />
      </Switch>
    </Router>
  );
}

export default App;
