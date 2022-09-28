  
import React, {useContext} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import {secondaryBtn, secondaryButtonText} from '../../theme.json';
// import ColorContext from '../components/ColorContext';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  children?: React.ReactNode;
}

export default function SecondaryButton(props: ButtonProps) {
  // const primaryColor = $config.PRIMARY_FONT_COLOR; //useContext(ColorContext);
  const {children, ...otherProps} = props;
  return (
    <TouchableOpacity
      style={[
        styles.secondaryBtn,
        {borderColor: props.disabled ? $config.PRIMARY_COLOR + '80' : $config.PRIMARY_COLOR},
      ]}
      {...otherProps}>
      {props.text ? (
        <Text
          style={[
            styles.secondaryButtonText as StyleProp<TextStyle>,
            {color: props.disabled ? $config.PRIMARY_COLOR + '80' : $config.PRIMARY_COLOR},
          ]}>
          {props.text}
        </Text>
      ) : (
        <></>
      )}
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  secondaryBtn,
  secondaryButtonText,
});
