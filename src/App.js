import React, { useState } from 'react';
import IntroCover from './components/IntroCover';
import MessageBook from './components/MessageBook';
import Proposal from './components/Proposal';
import Celebration from './components/Celebration';

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="App">
      {step === 0 && <IntroCover onNext={() => setStep(1)} />}
      {step === 1 && <MessageBook onNext={() => setStep(2)} />}
      {step === 2 && <Proposal onAccept={() => setStep(3)} />}
      {step === 3 && <Celebration />}
    </div>
  );
}

export default App;
