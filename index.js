/** @format */

import {AppRegistry} from 'react-native'
import App from './src/App'
import config from './src/config'

const {name : appName} = config
AppRegistry.registerComponent(appName, () => App)
