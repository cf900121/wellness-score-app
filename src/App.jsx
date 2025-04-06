import React from 'react';
import WellnessScore from './components/WellnessScore'; // Make sure to import the WellnessScore component
import './styles/WellnessScore.css'; // Import your styling (optional if using inline styles or other methods)

const App = () => {
  return (
    <div className="App">
      <WellnessScore />
    </div>
  );
};

export default App;
