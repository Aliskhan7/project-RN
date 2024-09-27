
import styled from 'styled-components/native'
// import img1 from '../../assets/images/AG_logo.png'

const PostView = styled.View`
    flex-direction: row;
    margin-top: 20px;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
`

const PostImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 12px;
    margin-right: 12px;
`
const PostTitle = styled.Text`
    font-size: 17px;
    font-weight: 700;
`

const PostDetails = styled.View`
    flex: 1;
    justify-content: center;
`

const PostDate = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 2px;
`

export const Post = ({title, imageUrl, createdAt}:{title:string, imageUrl: string, createdAt:string}) =>{
    return(
        <PostView>
            <PostImage
                source={{uri: imageUrl}}
            />
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{createdAt}</PostDate>
            </PostDetails>
        </PostView>
    )
}
