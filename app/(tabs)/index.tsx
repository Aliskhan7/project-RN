import {StatusBar, View} from 'react-native';
import {Post} from "@/components/Post";



export default function HomeScreen() {
  return (
   <View>
       <Post title='Test' imageUrl='https://imgd-ct.aeplcdn.com/1056x660/cw/ec/20361/Nissan-GTR-Front-view-84914.jpg?v=201711021421&q=80' createdAt='21/12/2024'/>
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
