import { Button, Text, View } from "react-native";

export default function Login({ navigation }: { navigation: any }) {
    return (
        <View>
            <Button
                title="Logar"
                onPress={() => navigation.replace('Home')}
            />
        </View>
    );
}