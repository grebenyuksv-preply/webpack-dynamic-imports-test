console.log('Parent loaded');
const locales = ['en', 'fr'];
const LOCALE = locales[Math.floor(Math.random() * locales.length)];
import(`child/dist/${LOCALE}`);
