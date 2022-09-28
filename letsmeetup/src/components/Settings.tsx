  
import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import icons from '../assets/icons';
import SelectDevice from '../subComponents/SelectDevice';
import HostControlView from './HostControlView';
import ColorContext from './ColorContext';
import {SidePanelType} from '../subComponents/SidePanelEnum';
import {BtnTemplate} from '../../agora-rn-uikit';

const Settings = (props: any) => {
  const {primaryColor} = useContext(ColorContext);
  const {isHost, sidePanel, setSidePanel} = props;

  return (
    <BtnTemplate
      style={[style.localButtonWithMatchingStyle, {borderColor: primaryColor}]}
      onPress={() => {
        sidePanel === SidePanelType.Settings
          ? setSidePanel(SidePanelType.None)
          : setSidePanel(SidePanelType.Settings);
      }}
      name={
        sidePanel === SidePanelType.Settings ? 'settingsFilled' : 'settings'
      }
    />
  );
};

const style = StyleSheet.create({
  fullOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000000aa',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    paddingVertical: 5,
    zIndex: 50,
  },
  main: {
    width: '50%',
    height: '80%',
    left: '25%',
    backgroundColor: $config.SECONDARY_FONT_COLOR,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    paddingVertical: 5,
    flexDirection: 'column',
  },
  popupPickerHolder: {
    // height: '40%',
    justifyContent: 'space-around',
    paddingHorizontal: '8%',
  },
  buttonIcon: {
    // width: 30,
    // height: 30,
    width: '100%',
    height: '100%',
    tintColor: $config.PRIMARY_COLOR,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: $config.PRIMARY_FONT_COLOR,
    // marginBottom: 20,
    alignSelf: 'center',
  },
  primaryBtn: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: $config.PRIMARY_COLOR,
    maxWidth: 400,
    minHeight: 45,
  },
  primaryBtnText: {
    width: '100%',
    height: 45,
    lineHeight: 45,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: $config.SECONDARY_FONT_COLOR,
  },
  localButton: {
    borderRadius: 2,
    borderColor: $config.PRIMARY_COLOR,
    // borderWidth: 1,
    width: 30,
    height: 30,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  localButtonWithMatchingStyle:{    
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});

export default Settings;
