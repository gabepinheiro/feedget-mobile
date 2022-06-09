import { useState } from 'react'

import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

import * as FileSystem from 'expo-file-system'

import { api } from '../../lib/api'

import { ArrowLeft } from 'phosphor-react-native'
import { ScreenshotButton } from '../screenshot-button'
import { Button } from '../button'

import { captureScreen } from 'react-native-view-shot'

import { theme } from '../../theme'
import { styles } from './styles'

import { FeedbackType } from '../widget'
import { feedbackTypes } from '../../utils/feedbackTypes'

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
  const [comment, setComment] = useState('')

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

  const handleSendFeedback = async () => {
    if(isSendingFeedback) return;

    setIsSendingFeedback(true)

    try {
      const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(
        screenshot, {
          encoding: 'base64'
        }
      )

      const res = await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      })

      setIsSendingFeedback(false)
      onFeedbackSent()
    } catch (error) {
      console.log(error)
      setIsSendingFeedback(false)
    }
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
        onChangeText={setComment}
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
