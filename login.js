import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.leftHeading}>Jobizz</Text>
        <Text style={styles.leftWelcome}>Welcome Back</Text>
        <Text style={styles.leftlogin}>Let's log in. Apply to jobs</Text>
      </View>
      <View style={styles.credentials}>
        <TextInput style={styles.box} placeholder="Name" />
        <TextInput style={styles.box} placeholder="Email" />
        <Button styles={styles.logInButton} title="Log in" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFD",
    flex: 1,
  },
  leftContent: {
    top: 106,
    left: 16,
    height: 33,
  },
  leftHeading: {
    color: "#356899",
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 33,
  },
  leftWelcome: {
    color: "#0D0D26",
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 33.6,
  },
  leftlogin: {
    color: "#0D0D26",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 22.4,
  },
  credentials: {
    top: 210,
    left: 16,
    height: 208,
    width: 328,
  },
  box: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#AFB0B6",
    height: 52,
    width: 355,
    padding: 5,
    fontSize: 14,
    fontWeight: 400,
    margin: 10,
  },
  logInButton: {
    gap: 10,
    color: "#356899",
  },
});
