import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

const contact = () => {
  return (
    <View>
      <Text>contact</Text>
        <Link href="/" style={{ marginTop: 30 }}>Go to Home Page</Link>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({})