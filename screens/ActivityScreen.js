import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Styles from '../styles/costum'

const Activity = () => {
    return(
        <View style={[Styles.container, {backgroundColor: "#41436A"}]}>
        <TouchableOpacity
            style={Styles.buttonTwo}
            onPress={ () => alert('Activity Screen !') }
        >
            <Text style={Styles.buttonTextTwo}> Click Here </Text>
        </TouchableOpacity>
    </View>
    )
}

export default Activity