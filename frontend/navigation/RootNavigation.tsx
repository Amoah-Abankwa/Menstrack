import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabsNavigator, { TabsStackParams } from "./TabsNavigation";
import notification from "@/app/Screens/notificationScreen";
import InsightsScreen from "@/app/Screens/InsightsScreen";

export type RootStackParam = {
    TabsStack: NavigatorScreenParams<TabsStackParams>;
    notification: {
        cartId: string;
        totalPrice: number;
    }

    checkoutDetails: {
        pickUpDate: string,
        selectedTime: string,
        no_of_days: string,
    }

    Insights: undefined
} 

const RootStack = createNativeStackNavigator<RootStackParam>();

export type RootStackScreenProps<T extends keyof RootStackParam> = 
NativeStackScreenProps<RootStackParam, T>;

const RootNavigator = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="TabsStack" 
                component={TabsNavigator} 
                options={{headerShown: false}}
            />
            <RootStack.Screen name="Insights" 
               component={InsightsScreen} 
                options={{headerShown: false}}
            />
        </RootStack.Navigator>
    );
}


export default RootNavigator;

