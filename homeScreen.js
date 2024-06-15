import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";

const featuredJobs =

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
        <View style={styles.searchBar}>
            <TextInput style={styles.input} placeholder="Search a job or position" />
            <View style={styles.filterIcon}>
              <TouchableOpacity>
                <Image
                  source={require("./assets/filter.png")}
                  style={{width: 26, height:26}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', top: 100, margin: 24}}>
            <Text style={{fontSize: 16, fontWeight:'bold', color: '#ODOD26', lineHeight: 20.8}}>Featured Jobs</Text>
            <Text style={{fontsiez: 14, fontWeight: 400, color: '#95969D'}}>See all</Text>
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
   top: 50,
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
    left: 120,

  },
  searchBar:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: 368,
    margin: 24,
    top: 100,
    
  },
  input:{
    backgroundColor: "#F2F2F3",
    width: "80%",
    height: 48,
    borderRadius: 12,
    padding: 8,
  },
  filterIcon:{
    backgroundColor: "#F2F2F3",
    width: 50,
    height: 48,
    padding: 10,
    borderRadius: 14,
    alignItems: 'center'
  }
});
