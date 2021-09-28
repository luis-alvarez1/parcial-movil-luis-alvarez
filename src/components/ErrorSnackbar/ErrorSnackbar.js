import React from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { errorSnackbarStyles } from './ErrorSnackbarStyles';

export const ErrorSnackbar = ({
  shown,
  setShown,
  message,
}) => {
  const onDismissSnackBar = () => setShown(false);
  return (
    <View style={errorSnackbarStyles.container}>
      <Snackbar
        visible={shown}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'OK',
          onPress: onDismissSnackBar,
        }}
      >
        {message}
      </Snackbar>
    </View>
  );
};
