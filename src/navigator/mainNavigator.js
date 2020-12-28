import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile188602Navigator from '../features/UserProfile188602/navigator';
import Settings188601Navigator from '../features/Settings188601/navigator';
import Settings188599Navigator from '../features/Settings188599/navigator';
import SignIn2188597Navigator from '../features/SignIn2188597/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile188602: { screen: UserProfile188602Navigator },
Settings188601: { screen: Settings188601Navigator },
Settings188599: { screen: Settings188599Navigator },
SignIn2188597: { screen: SignIn2188597Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
