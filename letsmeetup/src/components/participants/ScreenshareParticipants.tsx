  
import React from 'react';
import {View, Text} from 'react-native';
import ParticipantName from './ParticipantName';

const ScreenshareParticipants = (props: any) => {
  const {p_styles, name} = props;
  return (
    <View style={p_styles.participantRow}>
      <ParticipantName value={name} />
      <View style={p_styles.dummyView}>
        {/** its just the placeholder to adjust the UI. if no icon option to be shown */}
        <Text>local screen sharing</Text>
      </View>
    </View>
  );
};
export default ScreenshareParticipants;
