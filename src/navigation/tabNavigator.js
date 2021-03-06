import React from "react";
import {
  StyleSheet
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Account from "../modules/Screens/Account";
import Category from "../modules/Screens/Category";
import Courses from "../modules/Screens/Courses";
import MyLearning from "../modules/Screens/MyLearning";
import Settings from "../modules/Screens/Settings";
import {Colors} from "../Styles/colors";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../modules/Screens/splashScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {

 return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Courses"
        activeColor={Colors.primary}
        inactiveColor={Colors.gray}
        shifting={false}
        barStyle={{ backgroundColor: Colors.white }}
      >
       
        <Tab.Screen name="Courses" component={Courses} 
              name="Courses" 
              component={Courses}
              options={{
                tabBarLabel: 'Courses',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="book-variant-multiple" color={color} size={26} />
                ),
              }} 
        
        />
       
         
         <Tab.Screen 
        name="Profile" 
        component={Account}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}  
        />

    <Tab.Screen name="Settings" component={Settings} 
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                ),
              }} 
        
        
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create(
  {
    tabBarIcon:{
      height:15,
      width:15,
      marginBottom:5
    }
  }
)

export default TabNavigator;
