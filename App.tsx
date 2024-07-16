import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import GraphScreen from './src/screens/GraphScreen';
import DrawerScreen from './src/screens/DrawerScreen';
import { useAuth } from './src/Context/AuthContext';
import { images } from './src/assets/imageUri';
import ContactScreen from './src/screens/ContactScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignupListScreen from './src/screens/SignupListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AuthenticatedNavigator /> : <UnauthenticatedNavigator />}
    </NavigationContainer>
  );
}

function AuthenticatedNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeDrawer" drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={HomeDrawerNavigator} />
      <Drawer.Screen name="GraphDrawer" component={GraphDrawerNavigator} />
      <Drawer.Screen name="ContactDrawer" component={ContactDrawerNavigator} />
      <Drawer.Screen name="DashboardDrawer" component={DashboardScreen} />
      <Drawer.Screen name="ProfileDrawer" component={ProfileDrawerNavigator} />
      <Drawer.Screen name="SignupListDrawer" component={SignupListScreen} />
    </Drawer.Navigator>
  );
}

function HomeDrawerNavigator() {
  return (
     <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarShowLabel: false, // Hide tab bar labels
        headerShown: false, // Hide headers within tabs (if applicable)
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.home}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#075296' : '#9AA1AE',
                }}
              />
              <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Home</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function GraphDrawerNavigator() {
  return (
    <Tab.Navigator initialRouteName="GraphTab" screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen
        name="GraphTab"
        component={GraphScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.graph}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#075296' : '#9AA1AE',
                }}
              />
              <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Graph</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function ContactDrawerNavigator() {
  return (
    <Tab.Navigator initialRouteName="ContactTab" screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen
        name="ContactTab"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {/* <Image
                source={images.contact}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#075296' : '#9AA1AE',
                }}
              /> */}
              <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Contact</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function ProfileDrawerNavigator() {
  return (
    <Tab.Navigator initialRouteName="ProfileTab" screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {/* <Image
                source={images.contact}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#075296' : '#9AA1AE',
                }}
              /> */}
              <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Contact</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function UnauthenticatedNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
