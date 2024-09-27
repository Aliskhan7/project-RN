import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native'
import {ActivityIndicator, Alert, Text, View} from "react-native";
import axios from "axios";
import Loading from "@/components/Loading";

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`

interface IData {
    id: string,
    title: string,
    imageUrl: string,
    text: string,
    createdAt: number,
}

const FullPost = () => {
    const [data, setData] = useState<IData>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://66f3069c71c84d8058779c36.mockapi.io/fakeApi/items/1')
            .then(({data}) => {
                setData(data)
            }).catch(err => {
            console.log(err)
            Alert.alert('Ошибка', 'Не удалось получить статьи')
        })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    if(isLoading){
        return <Loading/>
    }

    return (
        <View style={{padding: 20}}>
            <PostImage source={{uri: data?.imageUrl}} />
            <PostText>
                {data?.text}
            </PostText>
        </View>
    );
};

export default FullPost;
