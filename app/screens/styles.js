import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
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
    marginTop: 30,
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
    marginTop: -30,
  },

  footer: {
    flexDirection: 'row',
  },
});

const ScreenStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  containerCentered: {
    justifyContent: 'center',
  },

  header: {
    paddingTop: 30,
  },

  body: {
    paddingHorizontal: 40,
  },

  bodySpacer: {
    height: 32,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 52,
  },

  footerSpacer: {
    width: 27,
  },
});

export { HomeStyles, ScreenStyles };
