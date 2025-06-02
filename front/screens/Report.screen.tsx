import { Button, Text, View } from "react-native";

export default function Report({ navigation }: { navigation: any }) {
    return (
        <View>
            <Button
                title="Voltar"
                onPress={() => navigation.replace('Home')}
            />
        </View>
    );
}