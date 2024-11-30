import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 48 / 32,
  },
  movieTitle: {
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;