/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/component/redux/store'
import TabNavigation from './src/component/tabNavigation'

const App = () => {
    return(
        <Provider store={store}>
            <TabNavigation />
        </Provider>
    )
} 

export default App;