  
import React from 'react';
import KeepAwake from 'react-native-keep-awake';
import {ClientRole} from '../../agora-rn-uikit';

interface Props {
  userRole: ClientRole;
}
const DeviceConfigure: React.FC<Props> = (props: any) => {
  return (
    <>
      {props.children}
      <KeepAwake />
    </>
  );
};

export default DeviceConfigure;
