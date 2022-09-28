  
import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import ColorContext from '../../components/ColorContext';
import {ImageIcon} from '../../../agora-rn-uikit';
import ScreenshareContext from './ScreenshareContext';
/**
 * A component to start and stop screen sharing on web clients.
 * Screen sharing is not yet implemented on mobile platforms.
 * Electron has it's own screen sharing component
 */
const ScreenshareButton = () => {
  const {screenshareActive, startUserScreenshare} =
    useContext(ScreenshareContext);
  const {primaryColor} = useContext(ColorContext);

  return (
    <TouchableOpacity onPress={() => startUserScreenshare()}>
      <View
        style={
          screenshareActive
            ? style.greenLocalButton
            : [style.localButton, {borderColor: primaryColor}]
        }>
        <ImageIcon
          name={screenshareActive ? 'screenshareOffIcon' : 'screenshareIcon'}
          style={[style.buttonIcon]}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 5,
          color: $config.PRIMARY_COLOR,
        }}>
        Share
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  localButton: {
    backgroundColor: $config.SECONDARY_FONT_COLOR,
    borderRadius: 20,
    borderColor: $config.PRIMARY_COLOR,
    width: 40,
    height: 40,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenLocalButton: {
    backgroundColor: '#4BEB5B',
    borderRadius: 20,
    borderColor: '#F86051',
    width: 40,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: '90%',
    height: '90%',
  },
});

export default ScreenshareButton;
