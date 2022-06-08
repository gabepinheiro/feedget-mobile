import { TouchableOpacity } from "react-native";

import { ChatTeardropDots } from 'phosphor-react-native'

import { styles } from './styles'

import { theme } from "../../theme";

export function Widget () {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <ChatTeardropDots
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
    </>
  )
}
