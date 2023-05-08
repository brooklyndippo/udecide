import React, {useRef, useState} from 'react';
import { useSelector } from 'react-redux'
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

export default function Decision() {
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
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <View style={styles.buttonRow}>
        <Button title="Decide for me!" onPress={fadeIn} />
        <Button title="Reset" onPress={fadeOut} />
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
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    color: 'black'
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});