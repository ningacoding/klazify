import {useEffect, useRef, useState} from 'react';
import {Pressable, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {css} from 'klazify';

export default function HorizontalSelector({
                                             data,
                                             initialIndex = 0,
                                             currentIndex,
                                             extraData,
                                             renderItem,
                                             renderIndicator,
                                             itemStyle,
                                             containerStyle,
                                             selectorStyle,
                                             indicatorStyle,
                                             indicatorStyleWhenFirst,
                                             indicatorStyleWhenLast,
                                             animation,
                                             animationDuration = 1000,
                                             omitAnimationSelector = false,
                                             onItemSelected,
                                             onItemUnselected,
                                           }) {

  const viewSelectorRef = useRef();
  const viewIndicatorRef = useRef();

  const [containerWidth, setContainerWidth] = useState(0);
  const [selectorWidth, setSelectorWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const [currentIndexState, setCurrentIndexState] = useState(initialIndex + 1);
  const [dataState, setDataState] = useState([0]);

  useEffect(() => {
    const targetIndex = currentIndex + 1;
    if (currentIndexState !== targetIndex) {
      onPress(targetIndex);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setDataState(data);
      onPress(currentIndexState);
    } else {
      console.log('HorizontalSelector: data is not an array');
    }
  }, [extraData, containerWidth, selectorWidth]);

  if (!Array.isArray(data)) {
    return null;
  }
  const onPress = (targetIndex) => {
    let fromIndex = currentIndexState;
    let toIndex = targetIndex;
    if (typeof animation === 'string') {
      viewIndicatorRef.current?.[animation](animationDuration);
    }
    if (!omitAnimationSelector) {
      viewSelectorRef.current?.animate({
        0: css({
          left: ((containerWidth / dataState.length) * fromIndex) - (itemWidth / 2) - (selectorWidth / 2),
        }),
        0.5: css({
          left: ((containerWidth / dataState.length) * toIndex) - (itemWidth / 2) - (selectorWidth / 2),
        }),
        1: css({
          left: ((containerWidth / dataState.length) * toIndex) - (itemWidth / 2) - (selectorWidth / 2),
        }),
      });
    } else {
      viewSelectorRef.current?.animate({
        0: css({
          left: ((containerWidth / dataState.length) * toIndex) - (itemWidth / 2) - (selectorWidth / 2),
        }),
        1: css({
          left: ((containerWidth / dataState.length) * toIndex) - (itemWidth / 2) - (selectorWidth / 2),
        }),
      });
    }
    setCurrentIndexState(targetIndex);
  };

  const onLayout = ({nativeEvent: {layout: {width}}}) => setContainerWidth(width);
  const onLayoutSelector = ({nativeEvent: {layout: {width}}}) => setSelectorWidth(width);
  const onLayoutItem = ({nativeEvent: {layout: {width, height}}}) => {
    setItemWidth(width);
    setItemHeight(height);
  };

  return <View style={containerStyle}>
    <View style={css('flex-row')}
          onLayout={onLayout}>
      <Animatable.View ref={viewSelectorRef}
                       onLayout={onLayoutSelector}
                       style={[css('absolute'),
                         css({
                           height: itemHeight,
                         }), selectorStyle]}>
        <Animatable.View ref={viewIndicatorRef}
                         style={[
                           css('bg-blue-500'),
                           css({
                             width: itemWidth,
                             height: itemHeight,
                           }),
                           indicatorStyle,
                           currentIndexState === 1 ? indicatorStyleWhenFirst : undefined,
                           currentIndexState === data.length ? indicatorStyleWhenLast : undefined,
                         ]}>
          {typeof renderIndicator === 'function' ? renderIndicator() : null}
        </Animatable.View>
      </Animatable.View>
      {data.map((item, index) => {
        return <Item key={index}
                     item={item}
                     itemStyle={itemStyle}
                     index={index + 1}
                     isFirst={index === 0}
                     isLast={index === data.length - 1}
                     currentIndexState={currentIndexState}
                     onLayout={onLayoutItem}
                     onPress={onPress}
                     renderItem={renderItem}
                     onItemSelected={onItemSelected}
                     onItemUnselected={onItemUnselected}/>;
      })}
    </View>
  </View>;
}

function Item({
                item,
                index,
                onPress,
                onLayout,
                renderItem,
                onItemSelected,
                onItemUnselected,
                currentIndexState,
                isLast,
                isFirst,
                itemStyle,
              }) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const isActiveState = index === currentIndexState;
    setIsActive(isActiveState);
    onPressItem(isActiveState, false, isActive && index !== currentIndexState);
  }, [currentIndexState]);
  const onPressItem = (isActive, isEvent, wasActive) => {
    if (isEvent) {
      onPress(index);
    }
    if (isActive) {
      if (typeof onItemSelected === 'function') {
        onItemSelected({item, index: index - 1});
      }
    } else {
      if (wasActive && typeof onItemUnselected === 'function') {
        onItemUnselected({item, index: index - 1});
      }
    }
  };
  return <Pressable onPress={() => onPressItem(isActive, true, isActive && index !== currentIndexState)}
                    style={[css('flex-1'), itemStyle]}>
    <View onLayout={index === 1 ? onLayout : undefined}
          style={itemStyle}>
      {renderItem({
        item,
        index: index - 1,
        isSelected: index === currentIndexState,
        isLast,
        isFirst,
      })}
    </View>
  </Pressable>;
}
