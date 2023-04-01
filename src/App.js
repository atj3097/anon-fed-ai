import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import UploadDataPage from './pages/upload-data/upload-data';
import TrainingInitiationPage from './pages/training-initiatian-page/training-page';
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
        <Routes>
            <Route path="/" exact element={<UploadDataPage />} />
            <Route path="/training-initiation" element={<TrainingInitiationPage />} />
            <Route path="/model-selection" element={<ModelSelectionPage />} />
            <Route path="/model-aggregation" element={<ModelAggregationPage />} />
            <Route path="/model-retrieval" element={<ModelRetrievalPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
