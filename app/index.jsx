import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import logo from '../assets/splash-icon.png';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading a list of app</Text>

      <View style={styles.card}>
        <Text>Hello, this is a card</Text>
      </View>
      <Link href="/about" style={{ marginTop: 30 }}>Go to About Page</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    // React Native doesn’t support CSS boxShadow — use shadow props instead
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
  },
});
