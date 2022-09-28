  
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import LiveStreamContext from '../../../components/livestream';
import {PropsContext} from '../../../../agora-rn-uikit';
import {BtnTemplate} from '../../../../agora-rn-uikit';
import icons from '../../../assets/icons';

const LocalRaiseHand = () => {
  const {styleProps} = useContext(PropsContext);
  const {audienceSendsRequest, audienceRecallsRequest, raiseHandRequestActive} =
    useContext(LiveStreamContext);
  const {localBtnStyles} = styleProps || {};
  const {theme} = styleProps || {};
  const {muteLocalAudio} = localBtnStyles || {};

  return (
    <BtnTemplate
      icon={icons['raiseHandIcon']}
      btnText={raiseHandRequestActive ? 'Lower hand' : 'Raise Hand'}
      color={raiseHandRequestActive ? '#FD0845' : theme}
      style={{
        ...style.localBtn,
        ...(localBtnStyles as object),
        ...(muteLocalAudio as object),
      }}
      onPress={() => {
        if (!raiseHandRequestActive) {
          audienceSendsRequest();
        } else {
          audienceRecallsRequest();
        }
      }}
    />
  );
};

const style = StyleSheet.create({
  localBtn: {
    borderRadius: 23,
    borderWidth: 4 * StyleSheet.hairlineWidth,
    borderColor: '#007aff',
    backgroundColor: '#007aff',
  },
});

export default LocalRaiseHand;
