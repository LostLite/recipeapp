import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback 
} from 'react-native'

let TouchableComp = TouchableOpacity;

if(Platform.OS === 'android' && Platform.Version >= 21){
    TouchableComp = TouchableNativeFeedback;
}

const CategoryGridTile = props => {
    const {title, color, onSelect} = props;
    return (<View style={styles.gridItem}><TouchableComp 
        style={{flex:1}}
        onPress={onSelect}>
        <View style={{...styles.container, ...{backgroundColor:color}}}>
            <Text style={styles.title} numberOfLines={2}>
                {title}
            </Text>
        </View>
    </TouchableComp></View>);
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        textAlign: 'right'
    }
});

export default CategoryGridTile;