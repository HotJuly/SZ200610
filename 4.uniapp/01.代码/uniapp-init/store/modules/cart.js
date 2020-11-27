import Vue from 'vue'
import ajax from '../../utils/ajax.js';
// import {
// 	SETINDEXDATAS
// } from '../mutation-types.js'

const state ={
	cartList:[
		{
			"selected":false,
			"count":2,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1535004,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1535004,
		    "sellVolume": 4001,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1538101761748,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575893634989,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 299,
		    "categoryL2Id": 0,
		    "retailPrice": 209,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 0,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "男式色拉姆内衣套装2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
		    "pointsPrice": 0,
		    "simpleDesc": "色拉姆发热面料，加厚升级",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1636062,
		    "displaySkuId": 1636056,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
			"selected":true,
			"count":5,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1536001,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1536001,
		    "sellVolume": 3634,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1538101896296,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575894115275,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 299,
		    "categoryL2Id": 0,
		    "retailPrice": 209,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 0,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "女式色拉姆内衣套装2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
		    "pointsPrice": 0,
		    "simpleDesc": "色拉姆发热面料，加厚升级",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1634105,
		    "displaySkuId": 1634104,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	]
}

const mutations ={
	addShopItem(state,good){
		/*
			情况1:如果该商品在购物车中不存在,应该将该商品添加到购物车中
			情况2:如果该商品在购物车中存在,应该将购物车中的该商品数量+1
		*/
	   console.log('addShopItem')
	   // good.count
	   //查看是否已存在
	   let shopItem = state.cartList.find((shopItem)=>{
		   return shopItem.id === good.id
	   })
	   // console.log()
	   if(shopItem){
		   shopItem.count+=1;
	   }else{
			// good.count=1;
			// let arr=[];
			// arr[0]={}
			// arr.0={}
			// arr.push('')
			Vue.set(good,'count',1);
			state.cartList.push(good)
	   }
	   console.log(shopItem,good)
	},
	changeCountMutation(state,{type,index}){
		// console.log(state,type,index)
		let shopItem = state.cartList[index];
		if(type){
			shopItem.count++;
		}else{
			if(shopItem.count<=1){
				//如果商品数量小于等于1,当前就应该删除该商品
				state.cartList.splice(index,1);
			}else{
				//如果商品数量大于1,就将商品数量-1即可
				shopItem.count--;
			}
		}
	},
	changeSelectedMutation(state,{selected,index}){
		// console.log(state,selected,index)
		let shopItem = state.cartList[index];
		shopItem.selected = selected;
	},
	changeSelectedAllMutation(state,selected){
		/*
			将购物车中所有的商品的选中状态都改成与当前全选按钮状态相反
			1.与当前全选按钮状态相反
				传参时,将选中状态取反
			2.将购物车中所有的商品的选中状态进行修改
				首先,需不需要返回值->forEach->forEch本身不存在返回值
		*/
	   let a= state.cartList.forEach((shopItem)=>{
		   shopItem.selected=selected
		   // return 123
	   })
	   // console.log(a)
	}
}

const actions ={
	
}

const getters ={
	isSelectedAll(state){
		/*
			1.返回值数据类型:Boolean
			2.当购物车中所有商品都被选中,返回true
				every->所有的数据都符合条件,返回true,否则返回false
				和
				some->只要有一个数据符合条件,返回true,否则返回false
					找到一个未选中的
			3.当购物车中有一个以上的商品未被选中,返回false
			4.当购物车中没有商品,返回false
		
		*/
	   //只要有一个商品是未选中状态,就返回true
	   let result = state.cartList.some((shopItem)=>{
		   return shopItem.selected === false;
	   })
	   
	   //只要有一个商品是未选中状态,就返回false
	   // let result = state.cartList.every((shopItem)=>{
		  //  return shopItem.selected === true;
	   // })
	   
		return state.cartList.length&&!result;
	}
}

export default{
	state,
	mutations,
	actions,
	getters
}