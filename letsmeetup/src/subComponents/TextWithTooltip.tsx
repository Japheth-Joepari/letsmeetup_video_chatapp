  
import React from 'react';
import {Text} from 'react-native';
import mobileAndTabletCheck from '../utils/mobileWebTest';
import TextWithToolTipNative from './TextWithTooltip.native';
/**
 * Text with tooltip
 * web - used title attribute to show the tooltip
 */
const TextWithToolTip = (props: any) => {
    return(
        <div 
            style={style.containerStyle} 
            title={props.value}
            >
            <Text
                numberOfLines={1}
                textBreakStrategy='simple'
                style={[props.style]}  
            >{props.value}</Text>
        </div>
    )
};

const style = {
    containerStyle:{
        display: 'flex'
    },
}
/**
 * Web and Desktop : using the TextWithToolTip - which have the browser tooltip 
 * Mobile and Mobile Web : using the TextWithToolTipNative - which have the custom tooltip using modal
 */
export default mobileAndTabletCheck() ? TextWithToolTipNative : TextWithToolTip;
