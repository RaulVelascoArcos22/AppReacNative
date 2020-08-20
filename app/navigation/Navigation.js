import React from "react";
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreenStack from "./HomeStack";
import Pagina1ScreenStack from "./Pagina1Stack";
import Pagina2ScreenStack from "./Pagina2Stack";


const NavigationStacks = createDrawerNavigator({
    Home: {
        screen: HomeScreenStack,
        navigationOptions: ({ tintColor }) => ({
            drawerLabel: "Inicio",
            drawerIcon: () => <Icon name="home" size={24} style={{color: tintColor }}/>
        })
    },
    Pagina1: {
        screen:  Pagina1ScreenStack,
        navigationOptions: ({ tintColor }) => ({
            drawerLabel: " Pagina1",
            drawerIcon: () => <Icon name="user" size={24} style={{color: tintColor }}/>
        })
    },
    Pagina2: {
        screen:  Pagina2ScreenStack,
        navigationOptions: ({ tintColor }) => ({
            drawerLabel: " Pagina2",
            drawerIcon: () => <Icon name="user" size={24} style={{color: tintColor }}/>
        })
    }

},
{
    drawerBackgroundColor: "#717171",
    contentOptions: {
        activeTintColor: "white",
        inactiveTintColor: "white",
        itemsContainerStyles:{
            margintVertical: 0
        }
    }
}
);
export default createAppContainer(NavigationStacks);