import React from 'react';
import { View } from 'react-native';
import Input from './Input';
import ListOptions from './ListOptions';
import Decision from './Decision';
import DefaultOptions from './DefaultOptions';

export default function Base(props) {
  const { category, defaultOptions } = props

  return (
    <View style={{ minHeight: 750, padding: 16, backgroundColor: 'white' }}>
      <Input/>
      {category && defaultOptions && <DefaultOptions category={category} defaultOptions={defaultOptions}/>}
      <ListOptions/>
      <Decision/>
    </View>
  );
};