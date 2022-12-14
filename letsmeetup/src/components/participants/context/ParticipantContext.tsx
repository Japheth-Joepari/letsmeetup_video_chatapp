  
import {createContext} from 'react';
import React, {useState, useContext, useEffect} from 'react';
import chatContext from '../../ChatContext';
import {UserType} from '../../../components/RTMConfigure';
import {filterObject} from '../../../utils';
import {
  ClientRole,
  MinUidContext,
  MaxUidContext,
} from '../../../../agora-rn-uikit';

interface ParticipantContext {
  hostList: any;
  audienceList: any;
  hostCount: number;
  audienceCount: number;
}

const ParticipantContext = createContext(null as unknown as ParticipantContext);

export const ParticipantContextProvider: React.FC = (props: any) => {
  const [hostCount, setHostCount] = useState(0);
  const [hostList, setHostList] = useState({});
  const [audienceList, setAudienceList] = useState({});
  const [audienceCount, setAudienceCount] = useState(0);

  const {userList, localUid} = useContext(chatContext);
  // For host list which are publishing
  const min = useContext(MinUidContext);
  const max = useContext(MaxUidContext);

  useEffect(() => {
    const hostList = [...min, ...max].reduce((acc, cur) => {
      if (
        cur.uid === 'local' &&
        userList[localUid]?.role == ClientRole.Audience
      ) {
        // If local user skip
        return acc;
      }
      const userUID =
        cur.uid === 'local'
          ? localUid
          : cur.uid == 1
          ? userList[localUid].screenUid
          : cur.uid;

      return {
        ...acc,
        [userUID]: {...userList[userUID]},
      };
    }, {});
    setHostList(hostList);
    setHostCount(Object.keys(hostList).length);
  }, [min, max, userList]);

  useEffect(() => {
    if (Object.keys(userList).length !== 0) {
      const audienceList = filterObject(
        userList,
        ([k, v]) =>
          v?.type === UserType.Normal &&
          v?.role == ClientRole.Audience &&
          !v.offline,
      );
      setAudienceList(audienceList);
      setAudienceCount(Object.keys(audienceList).length);
    }
  }, [userList]);

  return (
    <ParticipantContext.Provider
      value={{
        hostList,
        audienceList,
        hostCount,
        audienceCount,
      }}>
      {props.children}
    </ParticipantContext.Provider>
  );
};

export const ParticipantContextConsumer = ParticipantContext.Consumer;

export default ParticipantContext;
