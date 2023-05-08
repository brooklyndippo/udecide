import React from 'react';
import Base from '../Base';


export default function Places() {

const category = 'places';

const defaultPlaces = [
  '🏖️ Beach',
  '🌳 Park',
  '🍻 Pub',
  '☕ Cafe',
  '🎢 Amusement Park',
  '🎳 Bowling Alley',
  '🍿 Movie Theater',
  '🎮 Arcade',
  '🎤 Karaoke Bar',
  '🎸 Live Music Venue',
  '🎭 Theater',
  '🎯 Game Night',
  '🎡 Carnival',
  '🎨 Art Gallery',
  '🏰 Museum',
  '🏫 Library',
  '🛍️ Mall',
  '🌸 Botanical Gardens',
  '🌊 Lake',
  '⛳ Golf Course',
  '🍸 Lounge',
  '💃 Nightclub',
]

  return (
    <Base category={category} defaultOptions={defaultPlaces}/>
  );
};