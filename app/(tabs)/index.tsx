import axios from "axios";
import {StatusBar, Alert, FlatList, View, ActivityIndicator, Text, RefreshControl, TouchableOpacity} from 'react-native';
import {Post} from "@/components/Post";
import {useEffect, useState} from "react";



export default function HomeScreen() {
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = () => {
        setIsLoading(true)
        axios
            .get('https://66f3069c71c84d8058779c36.mockapi.io/fakeApi/items')
            .then(({data}) => {
                setItems(data)
            }).catch(err => {
            console.log(err)
            Alert.alert('Ошибка', 'Не удалось получить статьи')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    if(isLoading){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size='large'/>
                <Text style={{marginTop: 15}}>
                    Загрузка
                </Text>
            </View>
        )
    }

  return (
   <View>
       <FlatList
           refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} /> }
           data={items}
           renderItem={({item}) =>
                <TouchableOpacity>
                    <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>
                </TouchableOpacity>}
       />
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
