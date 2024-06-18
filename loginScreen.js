
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.leftHeading}>Jobizz</Text>
        <Text style={styles.leftWelcome}>Welcome Back👋</Text>
        <Text style={styles.leftlogin}>Let's log in. Apply to jobs</Text>
      </View>
      <View style={styles.credentials}>
        <TextInput
          style={styles.box}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.box}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.logInButton} onPress={handleLogin}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              alignSelf: "center",
              fontWeight: "medium",
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.continue}>
        <View style={styles.line} />
        <Text style={styles.contText}>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => alert("Continue with apple id")}>
          <View>
            <Image style={styles.icon} source={require("./assets/apple.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Continue with google")}>
          <View>
            <Image
              style={styles.icon}
              source={require("./assets/google.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Continue with facebook")}>
          <View>
            <Image
              style={styles.icon}
              source={require("./assets/facebook.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ top: 350, alignSelf: "center" }}>
        <Text style={styles.regText}>Haven't an account?
          <Text style={{ color: "#356899" }} onPress={() => alert("Registration not avaliable")}> Register</Text>
        </Text>
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
    left: 24,
    height: 33,
  },
  leftHeading: {
    color: "#356899",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 33,
  },
  leftWelcome: {
    color: "#0D0D26",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 33.6,
  },
  leftlogin: {
    color: "#BDBEC2",
    fontWeight: "light",
    fontSize: 14,
    lineHeight: 22.4,
  },
  credentials: {
    top: 210,

    height: 208,
    width: "auto",
  },
  box: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#AFB0B6",
    alignSelf: "center",
    height: 52,
    width: 355,
    padding: 5,
    fontSize: 14,
    fontWeight: "light",
    margin: 8,
    placeholderTextColor: "#AFB0B6",
  },
  logInButton: {
    justifyContent: "center",
    backgroundColor: "#356899",
    width: 355,
    height: 56,
    borderRadius: 5,
    top: 20,
    alignSelf: "center",
  },
  continue: {
    position: "absolute",
    width: 327,
    height: 16,
    left: 50,
    top: 520,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20,
    flexDirection: "row",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundcolor: "#AFB0B6",
  },
  contText: {
    color: "#AFB0B6",
    alignSelf: "center",
  },
  iconContainer: {
    flexDirection: "row",
    top: 300,
    justifyContent: "space-evenly",
    width: "auto",
    height: 56,
  },
  icon: {
    width: 80,
    height: 80,
  },
  regText: {
    color: "#BDBEC2",
    fontWeight: "light",
    fontSize: 14,
    lineHeight: 17.71,
  },
});
