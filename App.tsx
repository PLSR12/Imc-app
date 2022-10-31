import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function App() {
  const [data, setData] = useState<any>({
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

  function clearImc() {
    setData({ name: '', height: 0, weight: 0, result: 0, resultText: '' })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder="Nome:"
          value={data.name}
          style={styles.input}
          onChangeText={(name: any) => setData({ ...data, name: name })}
        />
        <TextInput
          placeholder="Peso:"
          value={data.weight}
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(weight: any) => setData({ ...data, weight: weight })}
        />
        <TextInput
          placeholder="Altura:"
          value={data.height}
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(height: any) => setData({ ...data, height: height })}
        />
      </View>
      <TouchableOpacity onPress={resultImc} style={styles.button}>
        {data.result === 0 ? (
          <Text style={styles.buttonText}>Calcular</Text>
        ) : (
          <Text style={styles.buttonText}>Calcular Novamente</Text>
        )}
      </TouchableOpacity>
      {data.result != 0 && (
        <TouchableOpacity onPress={clearImc} style={styles.button}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.result}>{data.result != 0 && data.result}</Text>
      <Text style={[styles.result, { fontSize: 40 }]}>{data.resultText}</Text>
    </View>
  )
}
