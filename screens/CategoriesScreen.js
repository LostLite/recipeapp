import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'

export default function CategoriesScreen( props ) {
    const renderGridItem = itemData =>{
        return <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={() =>
            props.navigation.navigate({
                routeName: 'CategoryMeals',
                params:{
                    categoryId: itemData.item.id
                }
            })
        } />
    }

    return (
        <FlatList 
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={item => item.id} />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});