  
import React from 'react';
import {View} from 'react-native';
import {LocalRaiseHand} from '../../../subComponents/livestream';

const LiveStreamControls = (props: any) => {
  const {showControls} = props;
  if (!$config.RAISE_HAND) return <></>;
  if (!showControls) return <></>;
  return (
    <View style={{alignSelf: 'center'}}>
      <LocalRaiseHand />
    </View>
  );
};

export default LiveStreamControls;
