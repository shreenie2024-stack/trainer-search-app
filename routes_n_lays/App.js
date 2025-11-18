import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Hello!</Text>
      <Text>Hope you are doing GOOD!💕😊</Text>
      <Text>NAME:DHANYASHREE.K.M</Text>
      <Text>Class:ISE "D"</Text>
      <Text>Place:MYSURU</Text>

     

      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f18e70ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 30,  // bigger text
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold', // makes text bold
  },
  italicText: {
    fontSize: 24,
    fontStyle: 'italic', // makes text italic
  },
   });
