import React,{useRef} from 'react'
import { StyleSheet  ,Text , View , Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import CalendarScreen from '../screens/CalendarScreen'
import ActivityScreen from '../screens/ActivityScreen'
import MetricsScreen from '../screens/MetricsScreen'
import PostScreen from '../screens/PostScreen'

import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from '../screens/BottomSheet'

const Tab  = createBottomTabNavigator()

const CostumTabBarButton = ({children , onPress, navigation}) => {
    const refRBSheet = useRef();
    return(
        <>
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            // onPress={onPress}
            onPress={() => refRBSheet.current.open()}
        >

            <View 
                style={{ 
                    width: 70,
                    height: 70, 
                    borderRadius: 35,
                    backgroundColor: "#fff" 
                }}
            >
                {children}
            </View>
        </TouchableOpacity>

        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
            wrapper: {
                // backgroundColor: "transparent"
            },
            container: {
                height: 470
            },
            draggableIcon: {
                backgroundColor: "#6A6A6A",
                width: 150
            }
            }}
            >
            <BottomSheet navigation={navigation} refSheet={refRBSheet}/>
        </RBSheet>
        </>
    )
}

const Tabs = ({navigation}) => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options= {{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >  
                            <Image 
                                source={require('../assets/icons/icon-house-default.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#F64668' : '#F2F2F2'
                                }}
                            />
                            <Text style={{color: focused ? '#F64668' : '#F2F2F2', fontSize: 12}} >HOME</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Activity" component={ActivityScreen}
                 options= {{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >  
                            <Image 
                                source={require('../assets/icons/icon-activite-default.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#F64668' : '#F2F2F2'
                                }}
                            />
                            <Text style={{color: focused ? '#F64668' : '#F2F2F2', fontSize: 12}} >ACTIVITY</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={require('../assets/icons/icon-plus.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: '#F64668'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CostumTabBarButton {...props} navigation={navigation} />
                    )
                }}
            />

            <Tab.Screen name="Calendrier" component={CalendarScreen}
                 options= {{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >  
                            <Image 
                                source={require('../assets/icons/icon-calendar-default.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#F64668' : '#F2F2F2'
                                }}
                            />
                            <Text style={{color: focused ? '#F64668' : '#F2F2F2', fontSize: 12}} >CALENDAR</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Metrics" component={MetricsScreen}
                 options= {{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >  
                            <Image 
                                source={require('../assets/icons/icon-metrics-default.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#F64668' : '#F2F2F2'
                                }}
                            />
                            <Text style={{color: focused ? '#F64668' : '#F2F2F2', fontSize: 12}} >METRICS</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs