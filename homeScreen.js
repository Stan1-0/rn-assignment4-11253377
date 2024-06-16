import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";



const featuredJobs = [
  {id: 1, jobTitle:'Software Engineer', employer:'Facebook', Salary: '$180,000', location: 'Accra, Ghana', companyLogo: require('./assets/fbsmall.png'),},
  {id: 2, jobTitle:'Software Engineer', employer:'Facebook', Salary: '$180,000', location: 'Accra, Ghana'},
  {id: 3, jobTitle:'Software Engineer', employer:'Facebook', Salary: '$180,000', location: 'Accra, Ghana'},
  {id: 4, jobTitle:'Software Engineer', employer:'Facebook', Salary: '$180,000', location: 'Accra, Ghana'},
  {id: 5, jobTitle:'Software Engineer', employer:'Facebook', Salary: '$180,000', location: 'Accra, Ghana'},
  {id: 6, jobTitle:'Software Engineer', employer:'Facebook', Salary: '$180,000', location: 'Accra, Ghana'},
  {id: 7, jobTitle:'Software Engineer', employer:'Facebook', Salary: '$180,000', location: 'Accra, Ghana'},
]

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
          <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', top: 70, margin: 24}}>
            <Text style={{fontSize: 16, fontWeight:'bold', color: '#ODOD26', lineHeight: 20.8}}>Featured Jobs</Text>
            <Text style={{fontsiez: 14, fontWeight: 400, color: '#95969D'}}>See all</Text>
              </View>
              <View style={styles.cardContainer}>
              <FlatList
            data={featuredJobs}
            horizontal
            showsHorizontalScrollIndicator={false}
            
            renderItem={({item}) => (
              <View style={styles.parent}>
                <Image 
                style={styles.cardItem}
                source={require('./assets/cardBackground.png')}
                />
                <View style={styles.textOverlay}>
                  <View>
                <Image
                  style={styles.companyLogo}
                  source={item.companyLogo}
                  />
                  <View style={styles.info}>
                  <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'medium'}}>{item.jobTitle}</Text>
                  <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: 'semibold'}}>{item.employer}</Text>
                  </View>
                  </View>
                  <View style={{flexDirection: "row", justifyContent: 'space-between', margin: 10, top: 30}}>
                  <Text style={{color: '#FFFFFF', fontSize: 15, fontWeight: 'medium'}}>{item.Salary}</Text>
                  <Text style={{color: '#FFFFFF', fontSize: 15, fontWeight: 'medium'}}>{item.location}</Text>
                  </View>
                  <Image
                  style={styles.companyLogo}
                  source={item.companyLogo}
                  />
                </View>
                
              </View>
              )}
              keyExtractor={(item) => item.id}
            />
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
    top: 80,
    
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
  },
  cardContainer: {
    top: 70,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardItem: {
    backgroundColor: '#5386E4',
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  info:{
   flexDirection: 'column',
   
   top: -50,
   justifyContent: 'space-between',
  },
  companyLogo:{
    width: 22,
    height: 23.57,
    top: -120,
    left: -100,
    backgroundColor: '#FFFFF',
    borderRadius: 12,
  },
  parent:{
    position: 'relative',
    width: 280,
    height: 186,
    margin: 5,
  },
  textOverlay:{
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
