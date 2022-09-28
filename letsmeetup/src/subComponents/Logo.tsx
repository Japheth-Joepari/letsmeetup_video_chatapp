  
import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useHistory} from '../components/Router';

/**
 * Displays the logo.
 */
export default function Logo() {
  const history = useHistory();

  return (
    <TouchableOpacity onPress={() => history.replace('/')} style={styles.marginAuto}>
      <Image
        source={{uri: $config.LOGO}}
        style={styles.logo}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '100%',
  },
  marginAuto: {
    width: '30%',
    height: '30%',
    minWidth: 60,
    minHeight: 30,
    // height: 'auto',
    marginHorizontal: 'auto',
  },
});
