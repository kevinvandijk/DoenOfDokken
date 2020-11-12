import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 24,
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#f1f9ff',
    width: '100%',
    height: '56%',
  },

  header: {
    marginTop: 31,
  },

  headerText: {
    fontFamily: 'Georgia',
    fontSize: 40,
    lineHeight: 46,
    color: '#2699fb',
    textAlign: 'center',
  },

  headerSubText: {
    marginTop: 18,
    fontFamily: 'Arial',
    lineHeight: 24,
    color: '#2699fb',
    textAlign: 'center',
  },

  content: {
    marginTop: -31,
  },

  footer: {
    width: '100%',
  },
});

export { HomeStyles };
