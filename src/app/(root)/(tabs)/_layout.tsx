import { useUserStore } from '@/src/store/userStore';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import {Ionicons} from "@expo/vector-icons";

function AndroidTabs() {
  const isAdmin = useUserStore((state) => state.isAdmin);

  return (
    <Tabs screenOptions = {{headerShown: false,
       tabBarStyle: {
          // backgroundColor: 'transparent', 
          elevation: 0,          // Removes shadow on Android
          borderTopWidth: 0,     // Removes the top border line
          backgroundColor: '#ffffff', 
          position: 'absolute',  
        },
    }}>
     <Tabs.Screen
     name='index'
     options={{
      title: "Home",
      tabBarIcon:({color, size}) => (
        <Ionicons name = "home" color = {color as string} size ={size} />
      )
     }}/>

     <Tabs.Screen
     name='search'
     options={{
      title: "Search",
      tabBarIcon:({color, size}) => (
        <Ionicons name = "search" color = {color as string} size ={size} />
      )
     }}/>

     <Tabs.Screen
     name='create'
     options={{
      title: "Add Property",
      href: isAdmin? undefined : null,
      tabBarIcon:({color, size}) => (
        <Ionicons name = "create" color = {color as string} size ={size} />
      )
     }}/>

     <Tabs.Screen
     name='saved'
     options={{
      title: "Saved",
      tabBarIcon:({color, size}) => (
        <Ionicons name = "save" color = {color as string} size ={size} />
      )
     }}/>

     <Tabs.Screen
     name='profile'
     options={{
      title: "Profile",
      tabBarIcon:({color, size}) => (
        <Ionicons name = "person" color = {color as string} size ={size} />
      )
     }}/>


    </Tabs>
      
    
  );
}
function IosTabs() {
  const isAdmin = useUserStore((state) => state.isAdmin);

  return (
    <NativeTabs
      backgroundColor="transparent"
      iconColor="black"
      tintColor="blue"
      indicatorColor="transparent"
      shadowColor="transparent"
    >
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="magnifyingglass" md="search" />
      </NativeTabs.Trigger>
      {isAdmin && (
        <NativeTabs.Trigger name="create">
          <NativeTabs.Trigger.Label>Add Property</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="plus.circle.fill" md="add" />
        </NativeTabs.Trigger>
      )}

      <NativeTabs.Trigger name="saved">
        <NativeTabs.Trigger.Label>Saved</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="heart.fill" md="favorite" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.fill" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

export default function TabsLayout(){
  return Platform.OS === "ios"? <IosTabs/>:
  <AndroidTabs/>
}
