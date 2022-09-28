  
import React from 'react';
import {View, Text} from 'react-native';
import RemoteAudioMute from '../../subComponents/RemoteAudioMute';
import RemoteVideoMute from '../../subComponents/RemoteVideoMute';
import {ApprovedLiveStreamControlsView} from '../../subComponents/livestream';
import RemoteEndCall from '../../subComponents/RemoteEndCall';
import ParticipantName from './ParticipantName';

interface remoteParticipantsInterface {
  p_styles: any;
  name: string;
  user: any;
  showControls: boolean;
  isHost: boolean;
}

const RemoteParticipants = (props: remoteParticipantsInterface) => {
  const {p_styles, user, name, showControls, isHost} = props;

  return (
    <View style={p_styles.participantRow}>
      <ParticipantName value={name} />
      {showControls ? (
        <View style={p_styles.participantActionContainer}>
          {$config.EVENT_MODE && (
            <ApprovedLiveStreamControlsView
              p_styles={p_styles}
              uid={user.uid}
            />
          )}
          <View style={[p_styles.actionBtnIcon, {marginRight: 10}]}>
            <RemoteEndCall uid={user.uid} isHost={isHost} />
          </View>
          <View style={[p_styles.actionBtnIcon, {marginRight: 10}]}>
            <RemoteAudioMute
              uid={user.uid}
              audio={user.audio}
              isHost={isHost}
            />
          </View>
          <View style={[p_styles.actionBtnIcon]}>
            <RemoteVideoMute
              uid={user.uid}
              video={user.video}
              isHost={isHost}
            />
          </View>
        </View>
      ) : (
        <></>
        // <View style={p_styles.dummyView}>
        //   <Text>Remote screen sharing</Text>
        // </View>
      )}
    </View>
  );
};
export default RemoteParticipants;
