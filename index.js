import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import { name as appName } from './app.json';
import theme from './src/core/theme/theme';

const Main = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => Main);
