import { useRef, useState } from "react";

import { TouchableOpacity, View } from "react-native";

import BottomSheet from "@gorhom/bottom-sheet";

import { Options } from "../options";
import { Copyright } from "../copyright";

import { ChatTeardropDots } from 'phosphor-react-native'

import { styles } from './styles'

import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../form";
import { Success } from "../success";

export type FeedbackType = keyof typeof feedbackTypes

export const Widget = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleFeedbackType = (type: FeedbackType) => {
    setFeedbackType(type)
  }

  const handleOpen = () => {
    bottomSheetRef.current?.expand()
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {!feedbackType && (
          <Options onFeedbackTypeChanged={handleFeedbackType} />
        )}

        {feedbackType && !feedbackSent && <Form feedbackType={feedbackType} />}

        {feedbackSent && <Success />}

        <View style={styles.copyrightWrapper}>
          <Copyright />
        </View>
      </BottomSheet>
    </>
  )
}
