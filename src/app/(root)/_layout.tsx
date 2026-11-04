import { useUserSync } from '@/src/hooks/useUserSync'
import { useAuth } from '@clerk/expo'
import { Redirect, Stack } from 'expo-router'

export default function AuthRoutesLayout() {
    const { isSignedIn, isLoaded } = useAuth()
    useUserSync();

    if (!isLoaded) {
        return null
    }

    if (!isSignedIn) {
        return <Redirect href="/sign-in" />
    }

    return <Stack screenOptions={{ headerShown: false }} />
}