import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import featuredJobs from './components/FeaturedJobs';
import popularJobs from './components/popularJobs'

function getColor(index) {
  // Generate a random RGB color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB to HEX
  const hex =
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  const colors = ["#5386E4", "#04284A", "#FFD700", "#00BFFF"];
  return colors[index % colors.length];
}

export default function Home({ route }) {
  const { name, email } = route.params || {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
          <TextInput
            style={styles.input}
            placeholder="Search a job or position"
          />
          <View style={styles.filterIcon}>
            <TouchableOpacity>
              <Image
                source={require("./assets/filter.png")}
                style={{ width: 26, height: 26 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            top: 70,
            margin: 24,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#ODOD26",
              lineHeight: 20.8,
            }}
          >
            Featured Jobs
          </Text>
          <Text style={{ fontsize: 14, fontWeight: "light", color: "#95969D" }}>
            See all
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            data={featuredJobs}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 24 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => alert("Coming soon")}>
                <View
                  style={[styles.parent, { backgroundColor: getColor(index) }]}
                >
                  <Image
                    style={styles.cardItem}
                    source={require("./assets/cardBackground.png")}
                  />
                  <View style={styles.textOverlay}>
                    <View>
                      <View style={styles.info}>
                        <Text
                          style={{
                            color: "#FFFFFF",
                            fontSize: 16,
                            fontWeight: "bold",
                          }}
                        >
                          {item.jobTitle}
                        </Text>
                        <Text
                          style={{
                            color: "#FFFFFF",
                            fontSize: 14,
                            fontWeight: "semibold",
                          }}
                        >
                          {item.employer}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        width: 'auto',
                        margin: 10,
                        top: 40,
                        
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 15,
                          fontWeight: "medium",
                        }}
                      >
                        {item.Salary}
                      </Text>
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 15,
                          fontWeight: "medium",
                        }}
                      >
                        {item.location}
                      </Text>
                    </View>
                    <View style={styles.imageWrapper}>
                      <Image
                        style={styles.companyLogo}
                        source={item.companyLogo}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 24,
            top: 90,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#ODOD26",
              lineHeight: 20.8,
            }}
          >
            Popular Jobs
          </Text>
          <Text style={{ fontsize: 14, fontWeight: "light", color: "#95969D" }}>
            See all
          </Text>
          </View>
        <View style={styles.card}>
          <FlatList
          data={popularJobs}
          renderItem={({item})=> (
            <View style={styles.taskItem}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.image} style={{ width: 40, height: 40, marginRight: 10 }} />
                <View style={{ marginLeft: 16 }}>
                <Text style={{fontWeight: 'semibold', fontSize: 14, color:'#0D0D26'}}>{item.jobTitle}</Text>
                <Text style={{fontWeight: 'regular', fontSize: 13, color:'#0D0D26'}}>{item.company}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{flex: 1, alignItems: 'flex-end', top:-35}}>
                  <Text style={{fontWeight: 'medium', fontSize: 12, color:'#0D0D26'}}>{item.salary}</Text>
                  <Text style={{fontWeight: 'regular', fontSize: 13, color:'#0D0D26'}}>{item.location}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          vertical
          showsVerticalScrollIndicator={false}
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
  scrollViewContent:{
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: 50,
    width: 254,
    height: 55,
    left: 24,
  },
  title: {
    color: "#ODOD26",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 36,
  },
  email: {
    color: "#ODOD26",
    fontSize: 20,
    fontWeight: "light",
    lineHeight: 24,
    color: "#95969D",
  },
  profilePic: {
    width: 56,
    height: 56,
    left: 120,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: 'auto',
    margin: 24,
    top: 80,
  },
  input: {
    backgroundColor: "#F2F2F3",
    width: "80%",
    height: 48,
    borderRadius: 12,
    padding: 8,
  },
  filterIcon: {
    backgroundColor: "#F2F2F3",
    width: 50,
    height: 48,
    padding: 10,
    borderRadius: 14,
    alignItems: "center",
  },
  cardContainer: {
    top: 70,
    justifyContent: "space-between",
  },
  cardItem: {
    width: "100%",
    height: "100%",
  },
  info: {
    flexDirection: "column",
    top: -30,
    justifyContent: "space-between",
  },
  imageWrapper: {
    backgroundColor: "#FFFFFF",
    width: 46,
    height: 46,
    top: -110,
    left: -100,
    borderRadius: 12,
    justifyContent: "center",
    overflow: "hidden",
  },
  companyLogo: {
    width: 22,
    height: 23.57,
    alignSelf: "center",
    borderRadius: 12,
  },
  parent: {
    position: "relative",
    width: 280,
    height: 186,
    margin: 5,
    borderRadius: 24,
  },
  textOverlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  taskItem: {
    padding: 20,
    top: 80,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 'auto',
    height: 74,
    marginBottom: 20,
  },
  card: {
    
  },
});
