import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import StudentSignIn from './components/StudentSignIn';
import StudentDashboard from './components/StudentDashboard';
import TeacherSignIn from './components/TeacherSignIn';
import TeacherDashboard from './components/TeacherDashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentSignIn"
          component={StudentSignIn}
          options={{ title: 'Student Login' }}
        />
        <Stack.Screen
          name="StudentDashboard"
          component={StudentDashboard}
          options={{ title: 'Student Dashboard', headerLeft: null }}
        />
        <Stack.Screen
          name="TeacherSignIn"
          component={TeacherSignIn}
          options={{ title: 'Teacher Login' }}
        />
        <Stack.Screen
          name="TeacherDashboard"
          component={TeacherDashboard}
          options={{ title: 'Teacher Dashboard', headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
