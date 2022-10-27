import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  input: {
    height: 50,
    textAlign: 'center',
    width: '60%',
    fontSize: 30,
    marginTop: 24,
    border: '3px solid #000',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#000000',
    marginTop: 35,
    borderRadius: 20,
    height: 70,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  result: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 65,
    padding: 15,
  },
})
