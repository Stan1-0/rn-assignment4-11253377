import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

import { Entypo } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
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
        <Button
          styles={styles.logInButton}
          title="Log in"
          onPress={handleLogin}
        />
      </View>
      <View style={styles.continue}>
        <View style={styles.line}/>
        <Text style={styles.contText}>Or continue with</Text>
        <View style={styles.line}/>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => console.log('Continue with apple id')}>
          <View style={styles.icon}>
          <AntDesign name="apple1" size={24.5} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Continue with apple id')}>
          <View style={styles.icon}>
          <AntDesign name="google" size={24.5} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Continue with apple id')}>
          <View style={styles.icon}>
          <Entypo name="facebook-with-circle" size={24.5} color="#395185" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{top: 350, alignSelf: 'center'}}>
        <Text style={styles.regText}>Haven't an account?
          <Text style={{color: '#356899'}}> Register</Text>
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
    color: "#BDBEC2",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 22.4,
  },
  credentials: {
    top: 210,
    left: 16,
    height: 208,
    width: 328,
    marginHorizontal: 10,
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
    placeholderTextColor: "#AFB0B6",
    
  },
  logInButton: {
    gap: 10,
    color: "#356899",
    padding: [16, 48, 16, 48],
    width: 327,
    height: 56,
    top: 413,
    left: 50,
    borderRadius: 5,
    alignSelf: 'center',
  },
  continue: {
    position: "absolute",
    width: 327,
    height: 16,
    left: 50,
    top: 520,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    flexDirection: 'row',
  },
  line:{
    flex: 1,
    height: 1,
    backgroundcolor: '#AFB0B6',
  },
  contText: {
    color: "#AFB0B6",
    alignSelf: 'center'
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    top: 300,
    left: 120,
    width: 216,
    height: 56,
  },
  icon:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
  regText:{
    color: '#BDBEC2',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.71,
  }
});
