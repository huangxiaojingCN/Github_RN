import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import WelcomePage from '../WelcomePage';

const Stack = createStackNavigator();

console.log(Stack.Screen);

function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                options={{
                    header: () => {
                        return null;
                    }
                }}
                component={HomePage}/>
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    options={{
                        header: () => {
                            return null;
                        }
                    }}
                    component={WelcomePage}/>
                <Stack.Screen
                    name="Home"
                    options={{
                        header: () => {
                            return null;
                        }
                    }}
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
