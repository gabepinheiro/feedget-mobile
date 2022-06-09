import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator
} from 'react-native'
import { theme } from '../../theme'

import { styles } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean
}

export function Button ({
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {isLoading && (
        <ActivityIndicator
          color={theme.colors.text_on_brand_color}
        />
      )}

      {!isLoading && (
        <Text style={styles.text}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  )
}
