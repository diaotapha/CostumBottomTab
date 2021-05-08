import React from 'react'
import { View, Text, Image } from 'react-native'
import ActionImg from '../assets/icons/action.png'

import Styles from '../styles/costum'

const BottomSheet = () => {
    return(
        <View style={Styles.bottomSheetContainer}>
            <Text style={{ fontSize: 17 , marginVertical: 30 }}> Hello, dear friend 😎 </Text>
            <Image source={ActionImg} style={{ width: 250, height: 200 }}/>
        </View>
    )
}

export default BottomSheet