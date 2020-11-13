import { StyleSheet } from 'react-native';

const outerRingSize = 200;
const innerRingSize = 100;
const roundButtonSize = 56;

const MoneySelectorStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  outerRing: {
    position: 'relative',
    width: outerRingSize,
    height: outerRingSize,
    borderRadius: outerRingSize / 2,
    backgroundColor: 'rgba(188, 224, 253, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerRing: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: innerRingSize,
    height: innerRingSize,
    borderRadius: innerRingSize / 2,
    backgroundColor: 'rgba(188, 224, 253, 0.2)',
  },

  value: {
    fontSize: 40,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#2699FB',
  },

  buttonContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 142,
  },

  roundButton: {
    width: roundButtonSize,
    height: roundButtonSize,
    borderWidth: 2,
    borderColor: '#f1f9ff',
    borderRadius: roundButtonSize / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  roundButtonLabel: {
    fontSize: 26,
    fontWeight: '300',
    color: '#2699fb',
    lineHeight: 26,
  },
});

export default MoneySelectorStyles;
