  
import React from 'react';
import {View, StyleSheet, useWindowDimensions, Platform} from 'react-native';
import TextWithToolTip from '../../subComponents/TextWithTooltip';
import {RFValue} from 'react-native-responsive-fontsize';

const ParticipantName = ({value}: {value: string}) => {
  const {height, width} = useWindowDimensions();
  const fontSize = Platform.OS === 'web' ? 14 : 16;
  return (
    <View style={{flex: 1}}>
      <TextWithToolTip
        value={value}
        style={[
          style.participantText,
          {
            fontSize: RFValue(fontSize, height > width ? height : width),
          },
        ]}
      />
    </View>
  );
};
export default ParticipantName;

const style = StyleSheet.create({
  participantText: {
    flex: 1,
    fontWeight: '500',
    flexDirection: 'row',
    color: $config.PRIMARY_FONT_COLOR,
    lineHeight: 20,
    paddingHorizontal: 5,
    textAlign: 'left',
    flexShrink: 1,
  },
});
