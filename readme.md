# Klazify v1.0

## Klazify is a React Native Style Sheet utility

Klazify re-use styles just like CSS classes, highly inspired in bootstrap, but with the React Native
limitations/features. It gives a professional and consistent look and feel, it also can improve the time and the way you
develop with React Native.

Klazify loads all the Style Sheets from classes at the App startup and never more you StyleSheet.create() again,
improving performance at runtime.

# Table of contents

- [Klazify](#klazify-v10)
    - [Install](#install)
    - [Usage](#usage)
        - [List of classes](#list-of-classes)
    - [Theming](#theming)
- [Basics and 3rd part credits](#basics-and-3rd-part-credits)

Help wanted to complete docs !!

## Install

You can install Klazify in any ReactNative project with v0.43 or above.

Witn NPM

`npm install klazify`

With Yarn

`yarn add klazify`

## Usage

It's usage is very very simple, you just need to call the method init just for the first time to load the setup.

```javascript 
import {init} from 'klazify';

// this loads all default config
init(); // <--- outside App function

export default function App() {
 return <View>
    <Text>
      {"That's it! Klazify is completly loaded."}
    </Text>
  <View/>;
}
```

Now you are ready to add some classes to any React Component, combine classes to satisfy your needs:

```javascript 
import {css} from 'klazify';

export default function AwesomeView() {
 return <View style={css('p-1 bg-primary flex-1 center')}>
    <Text style={css("text text-white")}>
      {"Awesome View built with Klazify."}
    </Text>
  <View/>;
}
```

### List of classes

Please see all [available classes](https://github.com/ningacoding/klazify/tree/main/modules)

## Save time and lines

Success!! You have saved time and lines, your code is readable.

FORGET THE OLD STYLES:
```javascript 
import {StyleSheets} from 'react-native';

export default function NotAwesomeView() {
 return <View style={styles.container}>
    <Text style={styles.text}>
      {"The same View but with more code ☹️"}
    </Text>
  <View/>;
}

// YOU SAVED CODE AND TIME:
// Note: every .create({}) uses app memory
const styles = StyleSheets.create({
  container: {
    padding: 8, // static values ☹️ instead of consistent and scalable values
    backgroundColor: '#0d6efd', // pass this value in every styles files ☹️
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: '#FFF' // or maybe creating a constant? with alot of imports ☹️
  },
  hybrid: {
    fontSize: 12,
    ...css('text text-green-500'), // just use klazify like this
  }
});
```

# Basics and 3rd part credits

Klazify was made thanks to the [EStyleSheets](https://github.com/vitalets/react-native-extended-stylesheet) (extended
style sheets) library, and every EStyleSheet rules aplies for Klazify, you can create, re-use, override variables,
scaling, etc.

Klazify also includes a Popover which was based on [Material Menu](https://github.com/mxck/react-native-material-menu)
but we made it easy to use.

Other dependencies: [color](https://www.npmjs.com/package/color) and [lodash](https://www.npmjs.com/package/lodash).

Klazify copyright.
