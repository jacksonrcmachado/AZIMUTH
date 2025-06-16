import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlay: {
    flex: 1,
  },
  blur: {
    flex: 1,
    // backgroundColor: 'rgba(151, 151, 151, 0.7)',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  modalContainer: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: '60%',
    alignItems: 'center',
    position: 'relative',
  },
  buoyName: {
    fontWeight: 'bold',
    color: '#7749F8',
  },
  closeButton: {
    position: 'absolute',
    top: -1,
    right: 6,
    zIndex: 10,
    padding: 6,
  },
  closeButtonText: {
    fontSize: 28,
    color: '#444',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    marginBottom: 16,
    width: '100%',
    height: 50,
  },
  submitButton: {
    marginTop: 8,
    backgroundColor: '#7749F8',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default styles;