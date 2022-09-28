  
import {createContext} from 'react';

interface ScreenshareContext {
  screenshareActive: boolean;
  startUserScreenshare: () => void;
  stopUserScreenShare: () => void;
}

const ScreenshareContext = createContext(null as unknown as ScreenshareContext);
export default ScreenshareContext;
