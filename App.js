// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Reel from './src/screens/Reel';
import UploadScreen from './src/screens/UploadScreen';
import CommentScreen from './src/screens/CommentScreen';

const Stack = createStackNavigator();

const App = () => {
  const handleLike = (id) => {
    console.log('Liked video with ID:', id);
  };

  const handleComment = (id) => {
    console.log('Comment on video with ID:', id);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reels">
          {props => <Reel {...props} onLike={handleLike} onComment={handleComment} />}
        </Stack.Screen>
        <Stack.Screen name="Upload" component={UploadScreen} /> 
        <Stack.Screen name="Comments" component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
