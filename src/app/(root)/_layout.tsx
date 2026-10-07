import { useAuth } from '@clerk/expo'
import { Redirect, Stack } from 'expo-router';

export default function AuthRoutesLayout() {
    const {isSignedIn, isLoaded} = useAuth();

    //sync clerk user -> supabase 
    if (!isLoaded){
        return null;
    }

    if (isSignedIn){
        return <Redirect href={"/sign-in"}/>
    }

  return <Stack/>
}