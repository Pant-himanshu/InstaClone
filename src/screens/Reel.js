import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const { height } = Dimensions.get('window');

const videos = [
    { id: '1', source: require('../assets/video1.mp4'), likes: 0 },
    { id: '2', source: require('../assets/video2.mp4'), likes: 0 }
];

const Reel = ({ onLike, onComment }) => {
    return (
        <FlatList
            data={videos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.reelContainer}>
                    <Video
                        source={item.source}
                        style={styles.video}
                        resizeMode="cover"
                        repeat
                        controls
                    />
                    <View style={styles.overlay}>
                        <TouchableOpacity onPress={() => onLike(item.id)}>
                            <Text style={styles.likeButton}>Like ({item.likes})</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onComment(item.id)}>
                            <Text style={styles.commentButton}>Comment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            pagingEnabled
            vertical
        />
    );
};

const styles = StyleSheet.create({
    reelContainer: {
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    likeButton: {
        color: 'white',
        marginBottom: 10,
    },
    commentButton: {
        color: 'white',
    },
});

export default Reel;
