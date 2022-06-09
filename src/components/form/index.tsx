import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

import { ArrowLeft } from 'phosphor-react-native'
import { ScreenshotButton } from '../screenshot-button'
import { Button } from '../button'

import { captureScreen } from 'react-native-view-shot'

import { theme } from '../../theme'
import { styles } from './styles'

import { FeedbackType } from '../widget'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { useState } from 'react'

interface FormProps {
  feedbackType: FeedbackType
  onFeedbackReset: () => void
  onFeedbackSent: () => void
}

export function Form ({
  feedbackType,
  onFeedbackReset,
  onFeedbackSent
}: FormProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const handleScreenshot = async () => {
    try {
      const uri = await captureScreen({
        format: 'jpg',
        quality: 0.8
      })

      setScreenshot(uri)
      console.log(uri)
    } catch (error) {
      console.log(error)
    }
  }

  const handleScreenshotRemove = () => setScreenshot(null)

  const handleSendFeedback = () => {
    if(isSendingFeedback) return;

    setIsSendingFeedback(true)

    setTimeout(() => {
      setIsSendingFeedback(false)
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onFeedbackReset}
        >
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
            />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Conte com detalhes o que está acontecendo...'
        placeholderTextColor={theme.colors.text_primary}
        autoCorrect={false}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
        />

        <Button
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}
        />
      </View>
    </View>
  )
}
