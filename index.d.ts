declare module 'klazify' {
  function init(opts: {
    theme?: object,
    extraGlobalVars?: object,
    customClasses?: object,
  });
  
  function css(classes: string | object);
  
  export {init, css};
}
