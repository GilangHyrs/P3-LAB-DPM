import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: movie.poster }} style={styles.image} />
      <Text style={styles.movieTitle}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;