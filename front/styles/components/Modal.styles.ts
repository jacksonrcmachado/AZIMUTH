import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlay: {
    flex: 1,
  },
  blur: {
    flex: 1,
    backgroundColor: 'rgba(77, 77, 77, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    position: 'relative',
  },
  buoyName: {
    fontWeight: 'bold',
    color: '#7749F8',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
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