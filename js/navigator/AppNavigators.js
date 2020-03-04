import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import WelcomePage from '../WelcomePage';

const AppStack = createStackNavigator();
const HomeStack = createStackNavigator();

function Home() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomePage}/>
        </HomeStack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <AppStack.Navigator mode="modal">
                <AppStack.Screen
                    name="Welcome"
                    options={{
                        header: () => {
                            return null;
                        }
                    }}
                    component={WelcomePage}/>
                <AppStack.Screen
                    name="Home"
                    options={{ headerShown: false }}
                    component={Home}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default App;
