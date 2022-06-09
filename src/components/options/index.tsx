import { Text, View } from 'react-native'

import { feedbackTypes } from '../../utils/feedbackTypes'
import { Option } from '../option'
import { FeedbackType } from '../widget'

import { styles } from './styles'

interface OptionsProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function Options ({ onFeedbackTypeChanged }: OptionsProps) {
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
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
    </View>
  )
}
