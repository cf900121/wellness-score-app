import React, { useState } from 'react';

const WellnessScore = () => {
  const [sleep, setSleep] = useState('');
  const [steps, setSteps] = useState('');
  const [water, setWater] = useState('');
  const [mood, setMood] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const calculateScore = () => {
    // Sleep score (8 hours max, 0 min)
    const sleepScore = sleep >= 8 ? 100 : sleep >= 7 ? 80 : sleep >= 5 ? 60 : 0;

    // Steps score (10,000 steps max, 0 min)
    const stepsScore = steps >= 10000 ? 100 : steps >= 7500 ? 80 : steps >= 5000 ? 60 : 0;

    // Water intake score (100 oz max, 0 min)
    const waterScore = water >= 100 ? 100 : water >= 64 ? 70 : water >= 40 ? 50 : 0;

    // Mood score (10 max, 0 min)
    const moodScore = mood >= 8 ? 100 : mood >= 7 ? 80 : mood >= 5 ? 60 : 0;

    // Heart rate score (60 bpm max, 0 min)
    const heartRateScore = heartRate <= 75 ? 100 : heartRate <= 90 ? 80 : heartRate <= 100 ? 60 : 0;

    // Apply weights (30% for sleep, 20% for steps, 20% for water, 15% for mood, 15% for heart rate)
    const finalScore =
      (sleepScore * 0.30) +
      (stepsScore * 0.20) +
      (waterScore * 0.20) +
      (moodScore * 0.15) +
      (heartRateScore * 0.15);

    return finalScore.toFixed(2); // Return score rounded to 2 decimal places
  };

  return (
    <div className="wellness-score">
      <h1 className="text-3xl font-bold text-center mb-4">Wellness Score</h1>

      <div className="input-fields">
        <div className="field">
          <label>Sleep (hours):</label>
          <input
            type="number"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
            placeholder="Enter hours of sleep"
          />
        </div>
        <div className="field">
          <label>Steps:</label>
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter steps taken"
          />
        </div>
        <div className="field">
          <label>Water Intake (oz):</label>
          <input
            type="number"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            placeholder="Enter water intake (oz)"
          />
        </div>
        <div className="field">
          <label>Mood (1-10):</label>
          <input
            type="number"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Enter mood (1-10)"
            min="1"
            max="10"
          />
        </div>
        <div className="field">
          <label>Heart Rate (bpm):</label>
          <input
            type="number"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            placeholder="Enter heart rate (bpm)"
          />
        </div>
      </div>

      <div className="score-result">
        <h2>Your Wellness Score: {calculateScore()}</h2>
      </div>
    </div>
  );
};

export default WellnessScore;
