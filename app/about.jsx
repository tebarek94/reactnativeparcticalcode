import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About page</Text>
        <Link href="/" style={{ marginTop: 30 }}>Go to Home Page</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})