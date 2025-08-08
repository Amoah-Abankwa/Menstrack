import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/app/Screens/HomeScreen";
import CalenderScreen from "@/app/Screens/CalenderScreen";
import ReadScreen from "@/app/Screens/ReadScreen";
import { RootStackScreenProps } from "./RootNavigation";
import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export type TabsStackParams = {
    Home: undefined;
    Cart: {
        pickUpDate: string,
        selectedTime: string,
        no_of_days: string,
    }
    Calender: undefined;
    Read: undefined;
}

const TabsStack = createBottomTabNavigator<TabsStackParams>();

export type TabsStackScreenProps<T extends keyof TabsStackParams> = 
CompositeScreenProps<BottomTabScreenProps<TabsStackParams, T>,
RootStackScreenProps<"TabsStack">>;

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    right: 0,
                    height: 70,
                    backgroundColor: '#000000',
                    borderRadius: 40,
                    margin: 10,
                    paddingTop: 15,
                },
            }}
        >
            <TabsStack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: focused ? '#FFE4E1' : 'transparent',
                            borderRadius: 20,
                            padding: 8,
                            paddingHorizontal: 12,
                            height:40,
                            width: 100,
                        }}>
                            <AntDesign 
                                name="home" 
                                size={24} 
                                color={focused ? '#f758e9ff' : '#ffffffff'} 
                            />
                            <Text style={{
                                color: focused ? '#f758e9ff' : 'transparent',
                                marginLeft: 8,
                                fontWeight: '600',
                            }}>Home</Text>
                        </View>
                    )
                }}
            />
            <TabsStack.Screen 
                name="Calender" 
                component={CalenderScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: focused ? '#FFE4E1' : 'transparent',
                            borderRadius: 20,
                            padding: 8,
                            paddingHorizontal: 12,
                            height:40,
                            width: 120,
                        }}>
                            <FontAwesome 
                                name="calendar" 
                                size={24} 
                                color={focused ? '#f758e9ff' : '#ffffffff'} 
                            />
                            <Text style={{
                                color: focused ? '#f758e9ff' : 'transparent',
                                marginLeft: 8,
                                fontWeight: '600',
                            }}>Calender</Text>
                        </View>
                    )
                }} 
            />
            <TabsStack.Screen 
                name="Read" 
                component={ReadScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: focused ? '#FFE4E1' : 'transparent',
                            borderRadius: 20,
                            padding: 8,
                            paddingHorizontal: 12,
                            height:40,
                            width: 100,
                        }}>
                            <MaterialCommunityIcons 
                                name="lightbulb-on-outline" 
                                size={24} 
                                color={focused ? '#f758e9ff' : '#ffffffff'} 
                            />
                            <Text style={{
                                color: focused ? '#f758e9ff' : 'transparent',
                                marginLeft: 8,
                                fontWeight: '600',
                            }}>Read</Text>
                        </View>
                    )
                }} 
            />
            
        </TabsStack.Navigator>
    );
}

export default TabsNavigator;
