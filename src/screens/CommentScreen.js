import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

const CommentScreen = ({ route }) => {
  const { reelId } = route.params;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.comment}>{item}</Text>}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Add a comment"
        style={styles.input}
      />
      <Button title="Post" onPress={addComment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  comment: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default CommentScreen;
