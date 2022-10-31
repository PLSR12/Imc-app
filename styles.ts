import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  input_container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    marginTop: 25,
  },
  input: {
    height: 50,
    textAlign: 'center',
    width: 200,
    fontSize: 30,
    padding: 0,
    marginTop: 24,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#000000',
    marginTop: 35,
    borderRadius: 20,
    minHeight: 60,
    minWidth: 200,
  },
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: 15,
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
