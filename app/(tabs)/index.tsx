import {Image, StyleSheet, Platform, StatusBar, View} from 'react-native';

import styled from 'styled-components/native'

const Post = styled.View`
    margin-top: 30px;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
`


export default function HomeScreen() {
  return (
   <View>
     <Post/>
     <StatusBar
         barStyle='default'
     />
   </View>
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
