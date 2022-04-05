import { View, Pressable, StyleSheet, Text } from 'react-native';

function HeaderButton({ children }) {
    function onHeaderButtonPressHandler() {
        console.log("pressed")
    }

    return (
        <Pressable onPress={onHeaderButtonPressHandler}>
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    {children}
                </Text>
            </View>
        </Pressable>
    )
}

export default HeaderButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#e2b497',
        borderRadius: 4,
    },
    containerText: {
        color: '#351401',
    }
})