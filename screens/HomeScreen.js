import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Styles from '../styles/costum'

const Home = () => {
    return(
        <View style={[Styles.container, {backgroundColor: "#41436A"}]}>
            <TouchableOpacity
                style={Styles.buttonOne}
                onPress={ () => alert('Home Screen !') }
            >
                <Text style={Styles.buttonTextOne}> Click Here </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home