import React from 'react'
import { createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors'

export default createAppContainer(createStackNavigator({
    Categories: myHeaderStyle(CategoriesScreen, 'Meal Categories'),
    CategoryMeals: myHeaderStyle(CategoryMealsScreen),
    MealDetail: myHeaderStyle(MealDetailsScreen, 'Meal Details')
},{
    //initialRouteName: 'Categories'
}));

function myHeaderStyle(screen, headerTitle) {
    const header = {
        screen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }

    if(headerTitle) 
        header.navigationOptions.headerTitle = headerTitle;

    return header;
}