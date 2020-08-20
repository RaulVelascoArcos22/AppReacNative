import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import Pagina2Screen from "../screens/Pagina2";

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
const Pagina2ScreenStack = createStackNavigator({
    Pagina2:{
        screen: Pagina2Screen,
        navigationOptions: ({ navigation }) => ({
            title: "Inicio",
            headerLeft: () => leftIcon(navigation, "bars")
        })
    }
});
export default Pagina2ScreenStack;