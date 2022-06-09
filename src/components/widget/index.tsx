import { useRef } from "react";

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
        {/* <Options /> */}

        <Form feedbackType="OTHER" />

        {/* <Success /> */}

        <View style={styles.copyrightWrapper}>
          <Copyright />
        </View>
      </BottomSheet>
    </>
  )
}
