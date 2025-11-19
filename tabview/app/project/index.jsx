import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ProjectScreen() {
  // List of projects by each person
  const projects = [
    {
      name: 'Dhanya',
      projectName: 'Lotus Meditation App',
      description: 'An app that guides users through daily meditation with soothing visuals and sounds.',
    },
    {
      name: 'Nami',
      projectName: 'Recipe Finder',
      description: 'A web app to search, save, and share cooking recipes with a simple interface.',
    },
    {
      name: 'Anusha',
      projectName: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and contact information.',
    },
    {
      name: 'Kavya',
      projectName: 'Task Manager',
      description: 'A mobile app to create, track, and complete tasks with reminders and notifications.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Team Projects</Text>

      {projects.map((project, index) => (
        <View key={index} style={styles.projectCard}>
          <Text style={styles.personName}>{project.name}</Text>
          <Text style={styles.projectName}>{project.projectName}</Text>
          <Text style={styles.description}>{project.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f3be8dff', // Light orange background
    alignItems: 'center',
    minHeight: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E65100', // Dark orange for title
  },
  projectCard: {
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
  personName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BF360C', // Darker orange
    marginBottom: 5,
  },
  projectName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#F57C00', // Medium orange
  },
  description: {
    fontSize: 14,
    color: '#424242',
  },
});
