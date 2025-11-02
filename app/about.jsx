import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { colors } from "../constants/color";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.title }]}>About Page</Text>

      <Link
        href="/"
        style={{ marginTop: 30, color: theme.iconColorFocused, fontSize: 16 }}
      >
        Go to Home Page
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
