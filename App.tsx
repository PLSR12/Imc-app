import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'

import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function App() {
  const [data, setData] = useState({
    name: '',
    height: 0,
    weight: 0,
    result: 0,
    resultText: '',
  })

  function resultImc() {
    if (data.name != '' && data.height != 0 && data.weight != 0) {
      const imc: any = (data.weight / (data.height * data.height)).toFixed(0)

      let imcDefinition = ''

      if (imc < 18.5) {
        imcDefinition = `${data.name}, você está abaixo do peso.`
      } else if (imc < 25) {
        imcDefinition = `${data.name}, você está no peso ideal. Parabéns!!!`
      } else if (imc < 30) {
        imcDefinition = `${data.name}, você está acima do peso.`
      } else if (imc < 35) {
        imcDefinition = `${data.name}, você está com obesidade grau I.`
      } else if (imc < 40) {
        imcDefinition = `${data.name}, você está com obesidade grau I`
      } else {
        imcDefinition = `${data.name}, você está com obesidade grau III. Cuidado!!`
      }

      setData({ ...data, result: imc, resultText: imcDefinition })
    } else {
      alert('Preencha os campos')
    }
  }
  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          placeholder="Nome:"
          style={styles.input}
          onChange={(e: any) => {
            setData({ ...data, name: e.target.value })
          }}
        />
        <TextInput
          placeholder="Peso:"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e: any) => {
            setData({ ...data, weight: e.target.value })
          }}
        />
        <TextInput
          placeholder="Altura:"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e: any) => {
            setData({ ...data, height: e.target.value })
          }}
        />
      </View>

      <TouchableOpacity onPress={resultImc} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{data.result}</Text>
      <Text style={[styles.result, { fontSize: 40 }]}>{data.resultText}</Text>

      <StatusBar style="auto" />
    </View>
  )
}
