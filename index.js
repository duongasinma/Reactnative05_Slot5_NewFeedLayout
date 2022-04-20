/**
 * @format
 */

import {AppRegistry} from 'react-native';
import DataBindingScreen from './screen/databinding/DataBindingScreen';
import LoginScreen from './screen/login/LoginScreen';
import PostScreen from './screen/post/PostScreen';
import EmojiScreen from './screen/emoji/EmojiScreen';
import DemoProps from './screen/demoprops/DemoProps';

import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => PostScreen);
