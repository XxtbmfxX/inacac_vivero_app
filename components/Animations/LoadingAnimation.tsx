import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimatedText = ({ text, duration }: {text: string, duration: number}) => {
  const [displayedText, setDisplayedText] = useState('');
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(text.length, {
      duration: text.length * duration,
      easing: Easing.linear,
    });
  }, [text, duration]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, Math.ceil(progress.value)));
    }, duration);

    return () => clearInterval(intervalId);
  }, [text, progress.value]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value / text.length,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, animatedStyle]}>
        {displayedText}
      </Animated.Text>
    </View>
  );
};

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedText text="Cargando contenido..." duration={90} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LoadingScreen;
