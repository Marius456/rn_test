import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextStyle, ViewStyle } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle | ViewStyle;
}

import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps & ComponentProps<typeof Ionicons>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
