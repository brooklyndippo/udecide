import React from 'react';
import Base from '../Base';


export default function Activities() {

const category = 'activities';

const defaultActivities = [
  '🏋️ Exercise',
  '⛰️ Hike',
  '🏊 Swim',
  '🧘 Yoga',
  '📚 Read',
  '🎨 Paint',
  '🎵 Listen to Music',
  '🍳 Cook',
  '🧩 Solve Puzzles',
  '🎮 Play Games',
  '🎥 Watch Movies',
  '🌱 Garden',
  '🛼 Roller Skate',
  '✈️ Travel',
  '🎯 Play Sports',
  '🎤 Sing',
  '🚶 Walk',
  '🏃 Run',
  '🚴 Cycle',
];

  return (
    <Base category={category} defaultOptions={defaultActivities}/>
  );
};