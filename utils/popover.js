import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {css} from 'klazify';
import Menu from 'react-native-material-menu';

export default forwardRef(Popover);

function Popover({children, content, style, contentContainerStyle, popupStyle}, ref) {
  const menuRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(undefined);

  useImperativeHandle(ref, () => ({
    toggleMenu: (show) => toggleMenu(show),
    show: () => toggleMenu(true),
    hide: () => toggleMenu(false),
  }));

  const onButtonLayout = ({nativeEvent}) => setButtonWidth(nativeEvent.layout.width);

  const toggleMenu = (show) => {
    const currentMenuRef = menuRef.current;
    if (!!currentMenuRef) {
      if (!!show) {
        currentMenuRef.show();
      } else {
        currentMenuRef.hide();
      }
    }
  };

  return <View onLayout={onButtonLayout}
               style={contentContainerStyle}>
    <TouchableOpacity onPress={() => toggleMenu(true)}>
      {children}
    </TouchableOpacity>
    <View style={[css('position-absolute top-0 left-0'), popupStyle]}>
      <Menu ref={menuRef}
            style={[css('rounded-5 bg-popover'), css({width: buttonWidth}), style]}>
        {content}
      </Menu>
    </View>
  </View>;
}
