import ajax from '../../utils/ajax.js';
import {
	SETINDEXDATAS
} from '../mutation-types.js'

const state ={
	indexDatas:{},
	num:0
}

const mutations ={
	[SETINDEXDATAS](state,{indexDatas,num}){
		state.indexDatas=indexDatas;
		// console.log(indexDatas,num)
	},
	// set1(state){
	// 	// setTimeout(()=>{
	// 		state.num=1
	// 	// },1000)
	// },
	// set2(state){
	// 	// setTimeout(()=>{
	// 		state.num=2
	// 	// },1000)
		
	// },
	
	// setA(){
	// 	console.log('这是a程序员定义的mutation')
	// },
	// // ......1000行代码
	// setA(){
	// 	console.log('这是b程序员定义的mutation')
	// }
}

const actions ={
	async getIndexDatas(store){
		let indexDatas = await ajax('/getIndexDatas');
		// console.log(store)
		store.commit('setIndexDatas',{indexDatas,num:2})
		// store.state.indexDatas=indexDatas;
		// console.log(store)
	}
}

const getters ={
	
}

export default{
	state,
	mutations,
	actions,
	getters
}