import '@/index';
import $ from 'jquery';

// import {add,multip} from '@/lodash';

console.log('main',123);

console.log('main',$);



document.querySelector('#btn').onclick=function(){
    import(/* webpackChunkName:'lodash' */'@/lodash').then(function({add}){
        // console.log(arguments)
        add(1,2);
    })
}