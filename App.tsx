// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { ToastProvider } from 'react-native-toast-notifications';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
// import { AuthProvider } from './src/Context/AuthContext';
// import MainApp from './src/screens/MainApp';

// const Drawer = createDrawerNavigator();

// function App() {
//   return (
    
//     <AuthProvider>
//     <NavigationContainer>
//       <ToastProvider>
//         <MainApp />
//       </ToastProvider>
//     </NavigationContainer>
//     </AuthProvider>
//   );
// }


// export default App;



// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import scale, { width, height } from "./src/assets/scale"; 
// import HomeScreen from './src/screens/HomeScreen';
// import GraphScreen from './src/screens/GraphScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import DrawerScreen from './src/screens/DrawerScreen';
// import SplashScreen from './src/screens/SplashScreen';
// import {images} from './src/assets/imageUri'
// import { AuthProvider } from './src/Context/AuthContext';
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   function MyDrawer() {
//     return (
//       <Drawer.Navigator
//         screenOptions={{
//           activeTintColor: "#e91e63",
//           inactiveTintColor: "red",
//           headerShown: false,
//         }}
//         drawerContent={(props) => <DrawerScreen {...props} />}
//       >
//         <Drawer.Screen name={"MainTabs"} component={BottomTabs} />
//       </Drawer.Navigator>
//     );
//   }

//   function BottomTabs() {
//     return (
//       <Tab.Navigator
//       initialRouteName={"HomeTab"}
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: { position: "absolute" },
//         headerShown: false,
//         tabBarHideOnKeyboard: true
//       }}
//     >
//         {/* <Tab.Screen
//           name={Strings.rFeed}
//           component={FeedScreen}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: "center", alignItems: "center" }}>
//                 <Image
//                   resizeMode="contain"
//                   source={images.feed}
//                   style={{
//                     width: width * 0.09,
//                     height: height * 0.04,
//                     tintColor: focused ? "#075296" : "#9AA1AE",
//                   }}
//                 />
//                 <Text
//                   style={{
//                     color: focused ? "#075296" : "#9AA1AE",
//                     fontSize: scale(12),
//                   }}
//                 >
//                   Feed
//                 </Text>
//               </View>
//             ),
//           }}
//         /> */}
  
//         <Tab.Screen
//           name={"HomeTab"}
//           component={HomeScreen}
//           options={{
//             headers: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: "center", alignItems: "center" }}>
//                 <Image
//                   resizeMode="contain"
//                   source={images.home}
//                   style={{
//                     width: width * 0.09,
//                     height: height * 0.04,
//                     tintColor: focused ? "#075296" : "#9AA1AE",
//                   }}
//                 />
//                 <Text
//                   style={{
//                     color: focused ? "#075296" : "#9AA1AE",
//                     fontSize: 12,
//                   }}
//                 >
//                   Home
//                 </Text>
//               </View>
//             ),
//           }}
//         />
  
//   <Tab.Screen
//           name={"Details"}
//           component={GraphScreen}
//           options={{
//             headers: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: "center", alignItems: "center" }}>
//                 <Image
//                   resizeMode="contain"
//                   source={images.graph}
//                   style={{
//                     width: width * 0.09,
//                     height: height * 0.04,
//                     // tintColor: focused ? "#075296" : "#9AA1AE",
//                   }}
//                 />
//                 <Text
//                   style={{
//                     color: focused ? "#075296" : "#9AA1AE",
//                     fontSize: 12,
//                   }}
//                 >
//                   Fraph 
//                 </Text>
//               </View>
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <AuthProvider>
//       <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }}/>
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="Details" component={GraphScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//     </AuthProvider>
//     </SafeAreaView>
//   );

// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


// import React from 'react';
// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import scale, { width, height } from "./src/assets/scale"; 
// import HomeScreen from './src/screens/HomeScreen';
// import GraphScreen from './src/screens/GraphScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import DrawerScreen from './src/screens/DrawerScreen';
// import SplashScreen from './src/screens/SplashScreen';
// import {images} from './src/assets/imageUri'
// import { AuthProvider } from './src/Context/AuthContext';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   function MyDrawer() {
//     return (
//       <Drawer.Navigator
//         screenOptions={{
//           activeTintColor: "#e91e63",
//           inactiveTintColor: "red",
//           headerShown: false,
//         }}
//         drawerContent={(props) => <DrawerScreen {...props} />}
//       >
//         <Drawer.Screen name={"HomeDrawer"} component={BottomTabs} />
//       </Drawer.Navigator>
//     );
//   }

//   function BottomTabs() {
//     return (
//       <Tab.Navigator
//         initialRouteName={"HomeTab"}
//         tabBarOptions={{
//           showLabel: false,
//           Headers: false,
//           headerShown: false,
//           style: { position: "absolute", },
  
//         }}
//         screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
//       >
//         <Tab.Screen
//           name={"Home"}
//           component={HomeScreen}
//           options={{
//             headers: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: "center", alignItems: "center" }}>
//                 <Image
//                   resizeMode="contain"
//                   source={images.home}
//                   style={{
//                     width: width * 0.09,
//                     height: height * 0.04,
//                     tintColor: focused ? "#075296" : "#9AA1AE",
//                   }}
//                 />
//                 <Text
//                   style={{
//                     color: focused ? "#075296" : "#9AA1AE",
//                     fontSize: 12,
//                   }}
//                 >
//                   Home
//                 </Text>
//               </View>
//             ),
//           }}
//         />
  
//         <Tab.Screen
//           name={"GraphTab"}
//           component={GraphScreen}
//           options={{
//             headers: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: "center", alignItems: "center" }}>
//                 <Image
//                   resizeMode="contain"
//                   source={images.graph}
//                   style={{
//                     width: width * 0.09,
//                     height: height * 0.04,
//                     // tintColor: focused ? "#075296" : "#9AA1AE",
//                   }}
//                 />
//                 <Text
//                   style={{
//                     color: focused ? "#075296" : "#9AA1AE",
//                     fontSize: 12,
//                   }}
//                 >
//                   Graph 
//                 </Text>
//               </View>
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <AuthProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="SplashScreen">
//           <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }}/>
//           <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
//           <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
//           <Stack.Screen name="GraphScreen" component={GraphScreen} options={{ headerShown: false }}/>
//           <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
//           <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//       </AuthProvider>
//     </SafeAreaView>
//   );

// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

// import React from 'react';
// import { SafeAreaView, useColorScheme } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import GraphScreen from './src/screens/GraphScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import DrawerScreen from './src/screens/DrawerScreen';
// import SplashScreen from './src/screens/SplashScreen';
// import { AuthProvider } from './src/Context/AuthContext';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function BottomTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeTab"
//       screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
//     >
//       <Tab.Screen name="HomeTab" component={HomeScreen} />
//       <Tab.Screen name="GraphTab" component={GraphScreen} />
//     </Tab.Navigator>
//   );
// }

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <DrawerScreen {...props} />}
//       screenOptions={{ headerShown: false }}
//     >
//       <Drawer.Screen name="HomeDrawer" component={BottomTabs} />
//     </Drawer.Navigator>
//   );
// }

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <AuthProvider>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="SplashScreen">
//             <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
//             <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </AuthProvider>
//     </SafeAreaView>
//   );
// }

// export default App;



// import React from 'react';
// import { SafeAreaView, useColorScheme } from 'react-native';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './src/screens/HomeScreen';
// import GraphScreen from './src/screens/GraphScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import DrawerScreen from './src/screens/DrawerScreen';

// import SplashScreen from './src/screens/SplashScreen';
// import { useAuth,AuthProvider } from './src/Context/AuthContext';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function BottomTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeTab"
//       screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
//     >
//       <Tab.Screen name="HomeTab" component={HomeScreen} />
//       <Tab.Screen name="GraphTab" component={GraphScreen} />
//     </Tab.Navigator>
//   );
// }

// function MyDrawer() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={(props) => <DrawerScreen {...props} />}
//         screenOptions={{ headerShown: false }}
//       >
//         <Drawer.Screen name="HomeDrawer" component={BottomTabs} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// function App() {
//   const {user} = useAuth();
//   const isDarkMode = useColorScheme() === 'dark';

//   const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#673ab7', // Change the primary color
//     },
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <AuthProvider>
//         <NavigationContainer theme={isDarkMode ? DarkTheme : MyTheme}>
//           <Stack.Navigator initialRouteName="SplashScreen">
//           {user ? (
//         <>
//             <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
//             <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
//             </>
//       ) : (
//         <>
//             <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
//             </>
//              )}
//           </Stack.Navigator>
//         </NavigationContainer>
//       </AuthProvider>
//     </SafeAreaView>
//   );
// }

// export default App;




// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { ToastProvider } from 'react-native-toast-notifications';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
// import { AuthProvider } from './src/Context/AuthContext';
// import MainApp from './src/screens/MainApp';

// const Drawer = createDrawerNavigator();

// function App() {
//   return (
    
//     <AuthProvider>
//     {/* <NavigationContainer> */}
//       <ToastProvider>
//         <MainApp />
//       </ToastProvider>
//     {/* </NavigationContainer> */}
//     </AuthProvider>
//   );
// }


// export default App;


// import React from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SplashScreen from './src/screens/SplashScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import GraphScreen from './src/screens/GraphScreen';
// import DrawerScreen from './src/screens/DrawerScreen';
// import { useAuth } from './src/Context/AuthContext';
// import { images } from './src/assets/imageUri';
// import ContactScreen from './src/screens/ContactScreen';
// import DashboardScreen from './src/screens/DashboardScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import SignupListScreen from './src/screens/SignupListScreen';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function App() {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {user ? <AuthenticatedNavigator /> : <UnauthenticatedNavigator />}
//     </NavigationContainer>
//   );
// }

// function AuthenticatedNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="HomeDrawer" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
//       {/* <Stack.Screen name="GraphDrawer" component={DrawerNavigator} /> */}
//     </Stack.Navigator>
//   );
// }

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="HomeDrawer" screenOptions={{ headerShown: false }} drawerContent={props => <DrawerScreen {...props} />}>
//       <Drawer.Screen name="HomeDrawer" component={HomeTabs} />
//       <Drawer.Screen name="GraphDrawer" component={HomeTabs} />
//       <Drawer.Screen name="ContactDrawer" component={HomeTabs} />
//       <Drawer.Screen name="DashboardDrawer" component={DashboardScreen} />
//       <Drawer.Screen name="ProfileDrawer" component={ProfileScreen} />
//       <Drawer.Screen name="SignupListDrawer" component={SignupListScreen} />
//     </Drawer.Navigator>
//   );
// }

// function HomeTabs() {
//   return (
//     <Tab.Navigator initialRouteName="HomeTab" tabBarOptions={{ showLabel: false, headerShown: false }} screenOptions={{ headerShown: false }}>
//       <Tab.Screen
//         name="HomeTab"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.home}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Home</Text>
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="GraphTab"
//         component={GraphScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.graph}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Graph</Text>
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ContactTab"
//         component={ContactScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.graph}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Contact</Text>
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function UnauthenticatedNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="SplashScreen" component={SplashScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Register" component={RegisterScreen} />
//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// import React from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SplashScreen from './src/screens/SplashScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import GraphScreen from './src/screens/GraphScreen';
// import DrawerScreen from './src/screens/DrawerScreen'; // You need to create this component
// import { useAuth } from './src/Context/AuthContext';
// import { images } from './src/assets/imageUri';
// import ContactScreen from './src/screens/ContactScreen';
// import DashboardScreen from './src/screens/DashboardScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import SignupListScreen from './src/screens/SignupListScreen';

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function App() {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {user ? <AuthenticatedNavigator /> : <UnauthenticatedNavigator />}
//     </NavigationContainer>
//   );
// }

// function AuthenticatedNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={HomeDrawerNavigator} />
//       <Drawer.Screen name="Graph" component={GraphDrawerNavigator} />
//       <Drawer.Screen name="Contact" component={ContactDrawerNavigator} />
//       <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="SignupList" component={SignupListScreen} />
//     </Drawer.Navigator>
//   );
// }

// function HomeDrawerNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ showLabel: false, headerShown: false }}>
//       <Tab.Screen
//         name="HomeTab"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.home}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Home</Text>
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function GraphDrawerNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="GraphTab" screenOptions={{ showLabel: false, headerShown: false }}>
//       <Tab.Screen
//         name="GraphTab"
//         component={GraphScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.graph}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Graph</Text>
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function ContactDrawerNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="ContactTab" screenOptions={{ showLabel: false, headerShown: false }}>
//       <Tab.Screen
//         name="ContactTab"
//         component={ContactScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.contact}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Contact</Text>
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function UnauthenticatedNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="SplashScreen" component={SplashScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Register" component={RegisterScreen} />
//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;


// import React from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SplashScreen from './src/screens/SplashScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import GraphScreen from './src/screens/GraphScreen';
// import DrawerScreen from './src/screens/DrawerScreen'; 
// import { useAuth } from './src/Context/AuthContext';
// import { images } from './src/assets/imageUri';
// import ContactScreen from './src/screens/ContactScreen';
// import DashboardScreen from './src/screens/DashboardScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import SignupListScreen from './src/screens/SignupListScreen';

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function App() {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName={user ? 'Authenticated' : 'Unauthenticated'} screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Authenticated" component={AuthenticatedNavigator} />
//         <Stack.Screen name="Unauthenticated" component={UnauthenticatedNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function AuthenticatedNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerScreen {...props} />}>
//       <Drawer.Screen name="Home" component={HomeDrawerNavigator} />
//       <Drawer.Screen name="Graph" component={GraphDrawerNavigator} />
//       <Drawer.Screen name="Contact" component={ContactDrawerNavigator} />
//       <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="SignupList" component={SignupListScreen} />
//     </Drawer.Navigator>
//   );
// }

// function HomeDrawerNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ showLabel: false, headerShown: false }}>
//       <Tab.Screen
//         name="HomeTab"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.home}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Home</Text>
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function GraphDrawerNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="GraphTab" screenOptions={{ showLabel: false, headerShown: false }}>
//       <Tab.Screen
//         name="GraphTab"
//         component={GraphScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.graph}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Graph</Text>
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function ContactDrawerNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="ContactTab" screenOptions={{ showLabel: false, headerShown: false }}>
//       <Tab.Screen
//         name="ContactTab"
//         component={ContactScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={images.contact}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? '#075296' : '#9AA1AE',
//                 }}
//               />
//               <Text style={{ color: focused ? '#075296' : '#9AA1AE', fontSize: 12 }}>Contact</Text>
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function UnauthenticatedNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="SplashScreen" component={SplashScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Register" component={RegisterScreen} />
//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

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
      <Drawer.Screen name="ProfileDrawer" component={ProfileScreen} />
      <Drawer.Screen name="SignupListDrawer" component={SignupListScreen} />
    </Drawer.Navigator>
  );
}

function HomeDrawerNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ showLabel: false, headerShown: false }}>
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
    <Tab.Navigator initialRouteName="GraphTab" screenOptions={{ showLabel: false, headerShown: false }}>
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
    <Tab.Navigator initialRouteName="ContactTab" screenOptions={{ showLabel: false, headerShown: false }}>
      <Tab.Screen
        name="ContactTab"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.contact}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#075296' : '#9AA1AE',
                }}
              />
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
