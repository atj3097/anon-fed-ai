import React from 'react';
import Header from './Header';
import Footer from './Footer';
import InteractiveCard from '../../components/interactivecard';
import ModelSelection from './components/modalselection';
import TrainingParameters from './components/trainingparameters';
import EncryptionMethod from './components/encryptionmethod';
import StartTraining from './components/starttraining';
import './styling/training-page.css';

const TrainingInitiation = () => {
  return (
    <div className="training-initiation-container">
      <Header />
      <main className="training-initiation-main">
        <InteractiveCard>
          <ModelSelection winningModel="Model A" />
        </InteractiveCard>
        <InteractiveCard>
          <TrainingParameters />
        </InteractiveCard>
        <InteractiveCard>
          <EncryptionMethod />
        </InteractiveCard>
        <InteractiveCard>
          <StartTraining summary="Summary of settings and selections" />
        </InteractiveCard>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingInitiation;
