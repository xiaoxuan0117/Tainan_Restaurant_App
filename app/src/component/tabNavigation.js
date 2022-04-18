

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainPage from './screen/mainPage';
import Favorite from './screen/favorite';
import About from './screen/about';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator
        openBydefault={false}
          drawerType="slide"
        >
            <Drawer.Screen name='Restaurants in Tainan' component={TabBottomNavigation} /> 
            <Drawer.Screen name='Favorite Restauraunts' component={Favorite} /> 
            <Drawer.Screen name='About' component={About} /> 
        </Drawer.Navigator>
    )
}

function TabBottomNavigation(){
  const routes = [
    {
      name: 'All Restauraunt',
      id: 'Restauraunt',
      icon: 'list',//list-outline
      component: <MainPage/>,
    },
    {
      name: 'Favorite',
      id: 'Favorite',
      icon: 'heart',//favorite-outline
      component: <Favorite/>,
    },
    {
      name: 'About',
      id: 'About',
      icon: 'information',//person-outline
      component: <About/>,
    }
  ]

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInActiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'list';

          for(let i = 0 ; i< routes.length; i +=1){
            if(route.name === routes[i].name){
              iconName = focused 
              ? routes[i].icon
              : `${routes[i].icon}-outline`;
              break;
            }
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      >
      <Tab.Screen name="All Restauraunts" component={MainPage}/>
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  )
}


export default function TabNavigation() {

  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}