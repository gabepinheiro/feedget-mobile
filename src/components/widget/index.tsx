import { useRef } from "react";

import { TouchableOpacity, View } from "react-native";

import BottomSheet from "@gorhom/bottom-sheet";

import { ChatTeardropDots } from 'phosphor-react-native'

import { styles } from './styles'

import { theme } from "../../theme";
import { Copyright } from "../copyright";

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

        <View style={styles.copyrightWrapper}>
          <Copyright />
        </View>
      </BottomSheet>
    </>
  )
}
