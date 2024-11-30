import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import movieService from '../services/movieService';
import styles from '../styles/styles';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieService.getMovies();
        setMovies(response);
        setFilteredMovies(response); 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      console.log('Data film telah diperbarui:', movies);
    }
  }, [movies]);

  useEffect(() => {
  
    if (searchQuery) {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);

  const renderItem = ({ item }) => (
    <MovieCard movie={item} onPress={() => navigation.navigate('MovieDetail', { movie: item })} />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari film..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Text style={styles.title}>Daftar Film</Text>
      <FlatList
        data={filteredMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});

export default HomeScreen;