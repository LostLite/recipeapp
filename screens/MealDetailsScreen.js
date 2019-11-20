import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function MealDetailsScreen( props ) {
    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen</Text>
            <Button title="Go back to categories" onPress={()=> props.navigation.popToTop()} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});