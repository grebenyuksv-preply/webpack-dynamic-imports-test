console.log('Child loaded');
console.log(LOCALE);
import(/* webpackMode: "eager" */ `./dynamic.${LOCALE}`);
