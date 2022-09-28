  
import React, {useEffect, useContext, useRef} from 'react';
import KeepAwake from 'react-native-keep-awake';
import Layout from '../LayoutEnum';
import ChatContext from '../../components/ChatContext';
import {
  RtcContext,
  MinUidContext,
  MaxUidContext,
} from '../../../agora-rn-uikit/src';

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const ScreenshareConfigure: React.FC = (props: any) => {
  const {userList} = useContext(ChatContext);
  const rtc = useContext(RtcContext);
  const {dispatch} = rtc;
  const max = useContext(MaxUidContext);
  const min = useContext(MinUidContext);
  const users = [...max, ...min];
  const prevUsers = usePrevious({users});
  const {setLayout} = props;

  useEffect(() => {
    // determine start and stop of screen share using new user left/join state and their type
    if (prevUsers !== undefined) {
      let joinedUser = users.filter((person) =>
        prevUsers?.users.every((person2) => !(person2.uid === person.uid)),
      );
      let leftUser = prevUsers?.users.filter((person) =>
        users.every((person2) => !(person2.uid === person.uid)),
      );

      if (joinedUser.length === 1) {
        const newUserUid = joinedUser[0].uid;
        // identify remote user screen type, if screen share, swap to PIN
        if (userList[newUserUid] && userList[newUserUid].type === 1) {
          dispatch({
            type: 'SwapVideo',
            value: [joinedUser[0]],
          });
          setLayout(Layout.Pinned);
        } else if (newUserUid === 1) {
          // identify local user screen type
          if (newUserUid !== users[0].uid) {
            // if not already maximized
            dispatch({
              type: 'SwapVideo',
              value: [joinedUser[0]],
            });
          }
          setLayout(Layout.Pinned);
        }
      }

      if (leftUser.length === 1) {
        const leftUserUid = leftUser[0].uid;
        if (userList[leftUserUid] && userList[leftUserUid].type === 1) {
          setLayout((l: Layout) =>
            l === Layout.Pinned ? Layout.Grid : Layout.Pinned,
          );
        }
      }
    }
  }, [users, userList]);

  return (
    <>
      {props.children}
      <KeepAwake />
    </>
  );
};

export default ScreenshareConfigure;
