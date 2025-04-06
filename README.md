# Wellness Score App

This is a web application that allows users to input their wellness data (sleep, steps, water intake, mood, and heart rate) and calculates a "Wellness Score" based on their inputs. The score is calculated on a scale from 0 to 100, helping users track and improve their overall well-being.

## Features
- Input fields for:
  - Sleep (hours)
  - Steps taken
  - Water intake (oz)
  - Mood (1-10 scale)
  - Heart rate (bpm)
- Dynamic wellness score calculation based on input values.
- Responsive design, styled with Tailwind CSS.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/cf900121/wellness-score-app.git
   cd wellness-score-app

2. Install dependencies:

   ```bash
   npm install

3. Start the development server

   ```bash
   npm run dev

## How it Works

The wellness score is calculated using a weighted formula based on the following inputs:

- **Sleep**: 8 hours max, 0 min.
- **Steps**: 10,000 steps max, 0 min.
- **Water Intake**: 100 oz max, 0 min.
- **Mood**: 10 max, 0 min.
- **Heart Rate**: 75 bpm max, 0 min.

The score is normalized on a scale from 0 to 100. The higher the score, the better the wellness.

## Technologies Used

- **React**: Front-end framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript (ES6+)**: For app logic and functionality.

