import React from 'react';
import InteractiveCard from '../../components/interactivecard';
import ModelSelection from './components/modalselection';
import TrainingParameters from './components/trainingparameters';
import EncryptionMethod from './components/encryptionmethod';
import StartTraining from './components/starttraining';
import './styling/training-page.css';

const TrainingInitiation = () => {
  return (
    <div className="training-initiation-container">
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
    </div>
  );
};

export default TrainingInitiation;
