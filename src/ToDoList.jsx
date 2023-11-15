import React from 'react';
import { StyleSheet, ScrollView, Pressable, View, Text} from 'react-native';


export default function ToDoList({tasks = []}) {
    return (
        <>
            <ScrollView>
                {tasks.map((task, index) => (
                    <React.Fragment key={index}>
                        <Pressable>
                            <View style={[styles.task]}>
                                <Text style={styles.taskText}>{task}</Text>
                            </View>
                        </Pressable>
                    </React.Fragment>
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    }
});