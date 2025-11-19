import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{uri :"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fwhite-lotus-flower-on-black-background--626422629434721332%2F&psig=AOvVaw0m4RGWyQWnpgG2OGKjPFCB&ust=1763617450240000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDlno_B_ZADFQAAAAAdAAAAABAE"}}
        style={styles.image}
      />
      
      <Text style={styles.hello}>Hello!</Text>
      <Text style={styles.welcome}>Welcome to Home</Text>
      <Text style={styles.intro}>I am Dhanyashree</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f18842ff', // your background color
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  hello: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    marginBottom: 5,
  },
  intro: {
    fontSize: 18,
    color: 'black',
  },
});
