import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import UploadDataPage from './pages/upload-data/upload-data';
import TrainingInitiationPage from './pages/training-initiation-page/training-initiation-page';
import ModelSelectionPage from './pages/model-selection/model-selection';
import ModelAggregationPage from './pages/model-aggregation/model-aggregation';
import ModelRetrievalPage from './pages/model-retrieval/model-retrieval';
import AboutPage from './pages/about-page/about-page';

import './App.css';

function App() {
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
}

export default App;
