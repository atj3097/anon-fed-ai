import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import UploadDataPage from './pages/UploadDataPage';
import TrainingInitiationPage from './pages/TrainingInitiationPage';
import ModelSelectionPage from './pages/ModelSelectionPage';
import ModelAggregationPage from './pages/ModelAggregationPage';
import ModelRetrievalPage from './pages/ModelRetrievalPage';
import AboutPage from './pages/AboutPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/" exact component={UploadDataPage} />
          <Route path="/training-initiation" component={TrainingInitiationPage} />
          <Route path="/model-selection" component={ModelSelectionPage} />
          <Route path="/model-aggregation" component={ModelAggregationPage} />
          <Route path="/model-retrieval" component={ModelRetrievalPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
