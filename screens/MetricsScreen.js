import React from 'react'
import { View, Text , TouchableOpacity } from 'react-native'

import Styles from '../styles/costum'

const Metrics = () => {
    return(
        <View style={[Styles.container, {backgroundColor: "#F64668"}]}>
            <TouchableOpacity
                style={Styles.buttonOne}
                onPress={ () => alert('Metrics Screen !') }
            >
                <Text style={Styles.buttonTextOne}> Click Here </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Metrics