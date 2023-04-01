import React from 'react';
import Header from './Header';
import Footer from './Footer';
import InteractiveCard from './InteractiveCard';
import ModelSelection from './ModelSelection';
import TrainingParameters from './TrainingParameters';
import EncryptionMethod from './EncryptionMethod';
import StartTraining from './StartTraining';
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
