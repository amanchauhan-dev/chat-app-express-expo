import React, { useState } from 'react';
import { View, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export default function ImageViewer({ imgSource }: any) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            {/* Thumbnail Image */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={imgSource} style={styles.thumbnail} />
            </TouchableOpacity>

            {/* Full-Screen Modal */}
            <Modal visible={modalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.closeArea}
                        onPress={() => setModalVisible(false)}
                    >
                        {/* Full-Screen Image */}
                        <Image source={imgSource} style={styles.fullImage} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    thumbnail: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)', // Dark background for full screen
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '90%',
        height: '90%',
    },
    closeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
