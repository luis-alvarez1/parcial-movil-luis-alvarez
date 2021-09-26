import { StyleSheet } from 'react-native';
import theme from '../theme/theme';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    alignSelf: 'center',
    margin: 14,
    marginBottom: 20,
  },
  margin: 15,
  description: {
    margin: 5,
    textAlign: 'justify',
  },
  mainContent: {
    marginTop: 35,
    marginBottom: 50,
  },
  button: {
    marginVertical: 20,
  },
  appBar: { backgroundColor: theme.color.primary },
});
