import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ContactScreen() {
  const contacts = [
    { name: 'Dhanya', email: 'dhanya@gmail.com', phone: '+1234567890' },
    { name: 'Nami', email: 'nami@gmail.com', phone: '+1987654321' },
    { name: 'Anusha', email: 'anusha@gmail.com', phone: '+1123456789' },
    { name: 'Kavya', email: 'kavya@gmail.com', phone: '+1098765432' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact List</Text>

      {contacts.map((contact, index) => (
        <View key={index} style={styles.contactCard}>
          <Text style={styles.name}>{contact.name}</Text>

          <TouchableOpacity
            style={styles.row}
            onPress={() => Linking.openURL(`mailto:${contact.email}`)}
          >
            <FontAwesome name="envelope" size={20} color="blue" />
            <Text style={styles.text}>{contact.email}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.row}
            onPress={() => Linking.openURL(`tel:${contact.phone}`)}
          >
            <FontAwesome name="phone" size={20} color="green" />
            <Text style={styles.text}>{contact.phone}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#bef3faff', // <-- Light cyan background for the whole screen
    alignItems: 'center',
    minHeight: '100%',
  },
  title: {
    fontSize: 28,                  
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796B', // dark teal for contrast
  },
  contactCard: {
    width: '100%',
    backgroundColor: '#FFFFFF', // white card
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004D40', // dark teal
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#00796B',
  },
});
