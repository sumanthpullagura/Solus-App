import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/Solus';
import MainScreen from "./src/screens/MainScreen";
import Push from "./src/screens/AppContainer";
import Swipe from "./src/screens/SwiperComponent";



const navigator = createStackNavigator(
  {
    LogIn:{
		screen:LoginScreen,
		navigationOptions:{
			headerTitle:'Solus'
		}
	},
	Main:{
		screen:MainScreen,
		navigationOptions:{
			headerTitle:''
		}
	},
	PushToken:Push,
  },
  {
    initialRouteName: "LogIn",
    defaultNavigationOptions: {
      title: "Solus",
	  headerTitleAlign:'center',
	  headerStyle:{height:65},
	  allowFontScaling:true,
	  
	}
  }
);

export default createAppContainer(navigator);

