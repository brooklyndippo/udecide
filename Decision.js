import React, {useRef, useState} from 'react';
import { useSelector } from 'react-redux'
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable
} from 'react-native';

import { useDispatch } from 'react-redux'
import { clearAllOptions } from './Options'

export default function Decision() {
  const dispatch = useDispatch();

  function handleClearOptions() {
    dispatch(clearAllOptions());
    fadeOut();
  }

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const options = useSelector(state => state.options.value)

  const getRandomDecision = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const [randomDecision, setRandomDecision] = useState(getRandomDecision());

  const fadeIn = () => {
    setRandomDecision(getRandomDecision());
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.decisionBox}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.decisionButton} onPress={fadeIn}>
          <Text>Decide for me!</Text>
        </TouchableOpacity>
        <Pressable style={styles.resetButton} onPress={()=>handleClearOptions()}>
          <Text>Reset Options</Text>
        </Pressable>
      </View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>{randomDecision}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  decisionBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fadingContainer: {
    padding: 20,
  },
  fadingText: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  decisionButton: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  resetButton: {
    alignItems: 'center',
    color: 'red',
  },
});