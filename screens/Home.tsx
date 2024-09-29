import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    RefreshControl,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {Post} from "@/components/Post";
import axios from "axios";

const Home = ({navigation}: any) => {
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
                    <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
                        <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>
                    </TouchableOpacity>}
            />
            <StatusBar
                barStyle='default'
            />
        </View>
    );
};

export default Home;
