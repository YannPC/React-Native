import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        
        <View styles={styles.items}>
        {/* This is where the task will go*/}
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
        <Task />
        </View>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal:20,
      
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight:'bold',
    },
    items: {
      marginTop: 30,
    },
  
});
