import axios from "axios";
import {StatusBar, Alert, FlatList, View, ActivityIndicator, Text, RefreshControl, TouchableOpacity} from 'react-native';
import {Post} from "@/components/Post";
import {useEffect, useState} from "react";
import {Navigation} from "@/screens/Navigation";
import Home from "@/screens/Home";



export default function HomeScreen() {


  return (
   <Navigation/>
  );
}





//
//
// <ParallaxScrollView
//     headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//     headerImage={
//       <Image
//           source={require('@/assets/images/AG_logo.png')}
//           style={styles.reactLogo}
//       />
//     }>
//   <ThemedView style={styles.titleContainer}>
//     <ThemedText type="title">Welcome</ThemedText>
//     <HelloWave />
//   </ThemedView>
// </ParallaxScrollView>
// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: "100%",
//     width: "100%",
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
