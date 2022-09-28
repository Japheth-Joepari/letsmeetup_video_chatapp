  
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import ChatContext, {controlMessageEnum} from '../components/ChatContext';
import ColorContext from '../components/ColorContext';
import {gql, useMutation} from '@apollo/client';
import {useParams} from '../components/Router';
import {BtnTemplate} from '../../agora-rn-uikit';

const MUTE_PSTN = gql`
  mutation mutePSTN($uid: Int!, $passphrase: String!, $mute: Boolean!) {
    mutePSTN(uid: $uid, passphrase: $passphrase, mute: $mute) {
      uid
      mute
    }
  }
`;

/**
 * Component to mute / unmute remote audio.
 * Sends a control message to another user over RTM if the local user is a host.
 * If the local user is not a host, it simply renders an image
 */
const RemoteAudioMute = (props: {
  uid: number;
  audio: boolean;
  isHost: boolean;
}) => {
  const {isHost = false} = props;
  const {primaryColor} = useContext(ColorContext);
  const {sendControlMessageToUid} = useContext(ChatContext);
  const [mutePSTN, {data, loading, error}] = useMutation(MUTE_PSTN);
  const {phrase} = useParams<{phrase: string}>();

  return (
    <BtnTemplate
      disabled={!isHost}
      onPress={() => {
        if (String(props.uid)[0] === '1')
          mutePSTN({
            variables: {
              uid: props.uid,
              passphrase: phrase,
              mute: props.audio,
            },
          });
        else sendControlMessageToUid(controlMessageEnum.muteAudio, props.uid);
      }}
      style={style.buttonIconMic}
      name={props.audio ? 'mic' : 'micOff'}
    />
  );
};

const style = StyleSheet.create({
  buttonIconMic: {
    width: 25,
    height: 24,
  },
});

export default RemoteAudioMute;
