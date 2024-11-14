import { Platform, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      window.open(href, '_blank');
    } else {
      Linking.openURL(href);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
}