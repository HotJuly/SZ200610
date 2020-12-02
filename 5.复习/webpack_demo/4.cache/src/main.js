import '@/index';

console.log('main',1234);

import(/* webpackChunkName:'lodash' */ '@/lodash.js').then(({add})=>{
    add(1,2)
})