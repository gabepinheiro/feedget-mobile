import { Text, View } from 'react-native'

import { feedbackTypes } from '../../utils/feedbackTypes'
import { Option } from '../option'

import { styles } from './styles'

export function Options () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu Feedback
      </Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            {...value}
          />
        ))}
      </View>
    </View>
  )
}
