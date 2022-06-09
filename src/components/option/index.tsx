import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text
} from 'react-native'

import { styles } from './styles'

interface OptionProps extends TouchableOpacityProps {
  title: string
  image: ImageProps
}

export function Option ({
  title,
  image,
  ...props
}: OptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image
        source={image}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
