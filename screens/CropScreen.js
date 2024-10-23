import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, ActivityIndicator, Modal, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImageManipulator from 'expo-image-manipulator';
import Header from '../components/Header';

const CropScreen = () => {
    const route = useRoute();
    const { imageUri } = route.params; // Get image URI from CameraScreen
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const cropImage = async () => {
        setLoading(true);
        try {
            console.log("Cropping image with URI:", imageUri); // Debugging log

            // Perform cropping with expo-image-manipulator
            const manipResult = await ImageManipulator.manipulateAsync(
                imageUri,
                [{ crop: { originX: 0, originY: 0, width: 300, height: 300 } }],
                { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
            );

            console.log("Cropped image result:", manipResult); // Debugging log

            // Navigate to the ExtractedTextScreen with the new image URI
            navigation.navigate('ExtractedTextScreen', {
                imageUri: manipResult.uri,
                extractedText: 'Sample extracted text',
            });
        } catch (error) {
            console.error('Error cropping image:', error); // Log any errors
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Header rotateleft={'rotate-ccw'} rotateright={'rotate-cw'} done={cropImage}/>
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.image} />

            {loading && (
                <Modal transparent={true}>
                    <View style={styles.modalContainer}>
                        <ActivityIndicator size="large" color="#8145DB" />
                        <Text style={styles.modalText}>Processing...</Text>
                    </View>
                </Modal>
            )}
        </View>
        </>
    );
};

export default CropScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 500,
        height: 500,
        resizeMode: 'contain',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
        color: 'white',
        fontSize: 16,
    },
});
