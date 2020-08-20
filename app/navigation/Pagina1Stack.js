import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import Pagina1Screen from "../screens/Pagina1";

// Creacion del icono
const leftIcon = (navigation, icon ) => (
    <Icon
        name={icon}
        style={{ marginLeft: 20}}
        size={20}
        color="#000"
        onPress={() => navigation.openDrawer()}
    />
);
const Pagina1ScreenStack = createStackNavigator({
    Pagina1:{
        screen: Pagina1Screen,
        navigationOptions: ({ navigation }) => ({
            title: "Inicio",
            headerLeft: () => leftIcon(navigation, "bars")
        })
    }
});
export default Pagina1ScreenStack;