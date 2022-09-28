  
import React, {useContext} from 'react';
import CheckBox from '@react-native-community/checkbox';

/**
 * A checkbox component for mobile
 */
const Checkbox = (props: any) => {
  const urlCheckbox = props.value;
  const setUrlCheckbox = props.onValueChange;
  return (
    <CheckBox
      value={urlCheckbox}
      onValueChange={setUrlCheckbox}
      disabled={props?.disabled}
      tintColors={{
        true: props?.disabled ? 'grey' : $config.PRIMARY_COLOR,
        false: props?.disabled ? 'grey' : $config.PRIMARY_FONT_COLOR + 80,
      }}
      tintColor={props?.disabled ? 'grey' : $config.PRIMARY_FONT_COLOR + 80}
      onCheckColor={props?.disabled ? 'grey' : $config.PRIMARY_COLOR}
      onTintColor={props?.disabled ? 'grey' : $config.PRIMARY_COLOR}
    />
  );
};
export default Checkbox;
