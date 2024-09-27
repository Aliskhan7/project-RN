import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FullPost from "@/screens/FullPost";
import {NavigationContainer} from "@react-navigation/native";
import Home from "@/screens/Home";

const Stack = createNativeStackNavigator()
export const Navigation = () =>{
    return(
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title: 'News'}}/>
                <Stack.Screen name="FullPost" component={FullPost} options={{title: 'Arctic'}}/>
            </Stack.Navigator>
    )
}
