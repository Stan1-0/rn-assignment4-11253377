import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ route }) {
  const { name, email } = route.params || {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
              <Image
                source={require("./assets/profilePic.png")}
                style={styles.profilePic}
              />
            </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
  },
  header: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   top: 64,
   width: 254,
   height: 55,
   left: 24,
  },
  title: {
    color: "#ODOD26",
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  email: {
    color: "#ODOD26",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 24,
    color: '#95969D',
  },
  profilePic:{
    width: 56,
    height: 56,

  },
});
