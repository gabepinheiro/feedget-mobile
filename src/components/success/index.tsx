import { View, Text, Image, TouchableOpacity } from 'react-native'

import successImg from '../../assets/success.png'

import { styles } from './styles'

interface SuccessProps {
  onSendAnotherFeedback: () => void
}

export function Success ({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.successImg}
      />

      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>Quero enviar outro.</Text>
      </TouchableOpacity>
    </View>
  )
}
