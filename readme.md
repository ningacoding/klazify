# Klazify v1.0

## Klazify is a React Native Style Sheet utility 

Klazify re-use styles just like CSS classes, highly inspired in bootstrap, but with the React Native limitations/features. It gives a professional and consistent look and feel, it also can improve the time and the way you develop with React Native.

Klazify loads all the Style Sheets from classes at the App startup and never more you StyleSheet.create() again, improving performance at runtime.

# Table of contents

- [Klazify](#klazify-v10)
  - [Install](#install)
  - [Usage](#usage)
  - [Examples](#examples)
  - [Theming](#theming)
- [Building Components made easy](#building-components-made-easy)
  - [Buttons](#buttons)
  - [Buttons outline](#buttons-outline)
  - [Buttons Extra](#buttons-extra)
  - [Typography](#typography)
  - [Grid](#grid)
  - [Alignment](#alignment)
  - [Tabs](#tabs)
  - [Popover](#popover)
  - [Forms](#forms)
  - [Borders, Margin and Padding](#borders-margin-and-padding)
  - [Separator](#separator)
  - [Disable anything visually](#disable-anything-visually)
  - [Progressbar](#progressbar)
  - [Backgrounds](#backgrounds)
  - [Shadows](#shadows)
  - [Cards](#cards)
  - [Alerts](#alerts)
- [Basics and 3rd part credits](#basics-and-3rd-part-credits)

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
init();

export default function App() {
 return <View>
    <Text>
      {"That's it! Klazify have loaded."}
    </Text>
  <View/>;
}
```



Now you are ready to add some classes to any React Component, combine classes to satisfy your needs:

```javascript 
import {css} from 'klazify';

export default function AwesomeView() {
 return <View style={css('p-1 bg-primary flex center'}>
    <Text style={css("text text-white")}>
      {"Awesome View built with Klazify."}
    </Text>
  <View/>;
}
```



Success!! You have saved time and lines, your code is readable and you didn't write the below code:

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
  }
});

```

## Examples

You can see the source code how the components were build and all the examples in live, in the next repository example:

https://github.com/ningacoding/klazify-examples 

Or open Expo Go Client for Android or Cam app for ios and scan this code:

![image](https://user-images.githubusercontent.com/17342546/153075276-b083fb82-6c3d-4bc9-9a35-1bdb6e98563a.png)

## Theming

![image](https://user-images.githubusercontent.com/17342546/153057329-cd4b48b8-ce43-4033-a46c-dc7bee78fbe0.png)


# Building Components made easy

> Klazify is NOT a component library, with Klazify you can build the below example components just by combining, creating or overriding classes.

## Buttons

Source code example:

```javascript 
import {css} from 'klazify';

export default function Btn() {
 return <TouchableOpacity style={css('btn-primary'} 
                          onPress={()=>alert('Pressed!')}>
    <Text style={css("text text-white")}>
      {"PRESS ME"}
    </Text>
  <View/>;
}
```

![image](https://user-images.githubusercontent.com/17342546/153060743-a06b5915-6e37-41e1-b46c-0beac43f66ad.png)

## Buttons outline

Source code example:

```javascript 
import {css} from 'klazify';

export default function Btn() {
 return <TouchableOpacity style={css('btn-outline-primary'} 
                          onPress={()=>alert('Pressed!')}>
    <Text style={css("text text-primary")}>
      {"PRESS ME"}
    </Text>
  <View/>;
}
```

![image](https://user-images.githubusercontent.com/17342546/153061586-49d38bd5-e41e-4d00-8fcd-69409e9b03f0.png)

## Buttons Extra

![image](https://user-images.githubusercontent.com/17342546/153061654-696eecad-701f-46c0-b7da-80a51a0b5cf7.png)

## Typography

![image](https://user-images.githubusercontent.com/17342546/153061793-7f220f42-2920-4984-8dc7-cd6cda6bc5ab.png)

## Grid

![image](https://user-images.githubusercontent.com/17342546/153061829-dcd6b9b1-2fa5-4b62-957b-be28fe8994eb.png)

## Alignment

![image](https://user-images.githubusercontent.com/17342546/153061869-6625cb8d-5cb8-4d3c-8d65-5e0c227f878f.png)

## Tabs

![image](https://user-images.githubusercontent.com/17342546/153061901-08464c8a-56cf-4332-b67b-e59bd0e55518.png)

## Popover

![image](https://user-images.githubusercontent.com/17342546/153061947-eb7b7fcf-5362-4eef-be3a-a96fe7c39230.png)

## Forms

![image](https://user-images.githubusercontent.com/17342546/153070246-742bb289-9de0-4157-9053-18ebce93853c.png)

## Borders, Margin and Padding

![image](https://user-images.githubusercontent.com/17342546/153070309-5c957b48-ab54-4eda-96cf-d8d8ea45a8a3.png)

## Separator 

![image](https://user-images.githubusercontent.com/17342546/153070349-af3bddcc-d04e-4217-bd4f-0b672d71da25.png)

## Disable anything visually

![image](https://user-images.githubusercontent.com/17342546/153070408-b17178cb-c19a-4141-ac39-a78c76e984e2.png)

## Progressbar

![image](https://user-images.githubusercontent.com/17342546/153070450-1b1b18a6-90f3-4260-8ab2-5b9b67b82494.png)

## Backgrounds

![image](https://user-images.githubusercontent.com/17342546/153070485-4b64e2ca-6894-4e7d-9c63-741950a28a72.png)

## Shadows

![image](https://user-images.githubusercontent.com/17342546/153070566-295ba816-f178-4812-8f21-b0d88ab1ae32.png)

## Cards

![image](https://user-images.githubusercontent.com/17342546/153070604-08c2a84f-f346-4b20-bcfc-6ed5dd90d47b.png)

## Alerts

![image](https://user-images.githubusercontent.com/17342546/153070641-7994ef3c-d9af-45b4-8705-30069e7c6304.png)


# Basics and 3rd part credits

Klazify was made thanks to the [EStyleSheets](https://github.com/vitalets/react-native-extended-stylesheet) (extended style sheets) library, and every EStyleSheet rules aplies for Klazify, you can create, re-use, override variables, scaling, etc.

Klazify also includes a Popover 
