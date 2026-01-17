import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: 'gray' }, headerTitleStyle: { color: 'white' }
        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
        </Stack>
    )
}

export default RootLayout