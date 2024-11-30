import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params || {};

  useEffect(() => {
    if (movie) {
      console.log('Detail film dimuat:', movie.title);
      
      return () => {
        console.log('Detail film akan dilepas:', movie.title);
      };
    }
  }, [movie]);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Film tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MovieDetailScreen;