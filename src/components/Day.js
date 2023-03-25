import React from "react";
import { Text, TouchableOpacity } from "react-native";

const style = {
    textTitle: {
    },
    dayCard: {
        height: 105,
        width: '90%',
        margin: 4,
        backgroundColor: 'blue',
        borderRadius: 15,
        alingContent: 'center',
        justifyContent: 'center'
    }
}

const Day = (item, index, nav) => {
    // console.log('NAVIGATE', item.nav)
    return (
        <TouchableOpacity
            style={style.dayCard}
            onPress={() => {
                console.log('JAJA')
                item.nav.navigate('ContentDay')}}
            >
            <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                {item.item.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )
}

export default Day