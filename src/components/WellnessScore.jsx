import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const WellnessScore = () => {
  const [sleep, setSleep] = useState('');
  const [steps, setSteps] = useState('');
  const [water, setWater] = useState('');
  const [mood, setMood] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [scoreHistory, setScoreHistory] = useState([]);

  const calculateScore = () => {
    const sleepScore = sleep >= 8 ? 100 : sleep >= 7 ? 80 : sleep >= 5 ? 60 : 0;
    const stepsScore = steps >= 10000 ? 100 : steps >= 7500 ? 80 : steps >= 5000 ? 60 : 0;
    const waterScore = water >= 100 ? 100 : water >= 64 ? 70 : water >= 40 ? 50 : 0;
    const moodScore = mood >= 8 ? 100 : mood >= 7 ? 80 : mood >= 5 ? 60 : 0;
    const heartRateScore = heartRate <= 75 ? 100 : heartRate <= 90 ? 80 : heartRate <= 100 ? 60 : 0;

    const finalScore =
      (sleepScore * 0.30) +
      (stepsScore * 0.20) +
      (waterScore * 0.20) +
      (moodScore * 0.15) +
      (heartRateScore * 0.15);

    return finalScore.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculated = calculateScore();
    setScore(calculated);
    setSubmitted(true);

    const timestamp = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });

    setScoreHistory(prev => [...prev, { date: timestamp, score: parseFloat(calculated) }]);
  };

  return (
    <div className="wellness-score">
      <h1 className="text-3xl font-bold text-center mb-4">Wellness Score</h1>

      <form onSubmit={handleSubmit} className="input-fields">
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
        <button type="submit">Calculate Wellness Score</button>
      </form>

      {submitted && (
        <div className="score-result">
          <h2>Your Wellness Score: {score}</h2>
        </div>
      )}

      {scoreHistory.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-center mb-2">Wellness Score Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={scoreHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default WellnessScore;
