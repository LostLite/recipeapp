import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button title="Go to Details" onPress={() => props.navigation.navigate('MealDetail')}/>
            
            <Button title="Save and Go Back" onPress={() => props.navigation.goBack()}/>
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;