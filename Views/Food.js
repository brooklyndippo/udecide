import React from 'react';
import Base from '../Base';


export default function Food() {

const category = 'cuisines';

const defaultCuisines = [
  '🍕 Italian',
  '🌮 Mexican',
  '🥡 Chinese',
  '🍣 Japanese',
  '🍛 Indian',
  '🍜 Thai',
  '🥙 Greek',
  '🥐 French',
  '🥘 Spanish',
  '🍔 American',
  '🥗 Mediterranean',
  '🌯 Middle Eastern',
  '🍱 Korean',
  '🍲 Vietnamese',
  '🍖 Brazilian',
  '🍹 Caribbean',
  '🥨 German',
  '🥙 Turkish',
  '🍟 British',
  '🥟 Russian',
];

  return (
    <Base category={category} defaultOptions={defaultCuisines}/>
  );
};