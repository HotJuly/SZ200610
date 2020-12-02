import '@/index';

console.log('main',1234);

import(/* webpackChunkName:'lodash' */ '@/lodash.js').then(({add})=>{
    add(1,2)
})

 if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
         navigator.serviceWorker.register('./service-worker.js').then(registration => {
           console.log('SW registered: ', registration);
         }).catch(registrationError => {
           console.log('SW registration failed: ', registrationError);
         });
       });
}
//如果是当前开发环境需要写相对路径,如果是生产环境,将路径写为绝对路径