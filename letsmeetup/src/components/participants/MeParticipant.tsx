  
import React from 'react';
import {View} from 'react-native';
import {LocalAudioMute, LocalVideoMute} from '../../../agora-rn-uikit';
import {LocalUserContext} from '../../../agora-rn-uikit';
import ParticipantName from './ParticipantName';

const MeParticipant = (props: any) => {
  const {p_style, name} = props;

  return (
    <View style={p_style.participantRow}>
      <ParticipantName value={name} />
      <View style={p_style.participantActionContainer}>
        <LocalUserContext>
          <View style={[p_style.actionBtnIcon, {marginRight: 10}]}>
            <LocalAudioMute btnText=" " variant="text" />
          </View>
          <View style={p_style.actionBtnIcon}>
            <LocalVideoMute btnText=" " variant="text" />
          </View>
        </LocalUserContext>
      </View>
    </View>
  );
};
export default MeParticipant;
