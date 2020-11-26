<template>
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder" value="" />
			</view>
			<button class="username">七月</button>
		</view>
		
		<scroll-view scroll-x="true" class="navScroll" v-if="indexDatas.kingKongModule">
			<view class="scrollItem"
			 :class="navIndex===-1?'active':''"
			 @click="changeNavIndex(-1)"
			 >
				推荐
			</view>
			<view class="scrollItem"
			 :class="navIndex===index?'active':''"
			 v-for="(item,index) in indexDatas.kingKongModule.kingKongList"
			 @click="changeNavIndex(index)"
			 :key="item.L1Id"
			  >
				{{item.text}}
			</view>
		</scroll-view>
		<Recommend :indexDatas="indexDatas"/>
		
	</view>
	<!-- <div class="indexContainer">indexContainer</div> -->
	
</template>

<script>
	import {mapState} from 'vuex';
	import ajax from '../../utils/ajax.js';
	import Recommend from '../../components/Recommend/Recommend.vue';
	export default {
		data() {
			return {
				// indexDatas:{},
				navIndex:3
			}
		},
		/*
			1.往哪发
				根据自己服务器配置的路由来确定
			2.在哪发
				如果是Vue项目	->	created或者mounted	->	组件挂载结束
				如果是小程序		->	onLoad(created)	->	页面开始加载
				1.从速度上来说onLoad优先于mounted
				2.无论是uniapp还是mpvue等框架,都更加推荐使用小程序的生命周期
				
				uniapp支持小程序的组件,小程序的生命周期
			3.怎么发
				Vue	->	ajax(axios)
				小程序->wx.request()
				uni-app->uni.request()
		*/
	   // mounted(){
		  //  console.log('mounted')
	   // },
	   async onLoad(){
		   console.log('onLoad')
		   //想要得到promise的value值,要么async和await或者then方法
		   // let indexDatas = await ajax('http://localhost:3000/getIndexDatas');
		   // let indexDatas = await ajax('/getIndexDatas');
		   // console.log('indexDatas',indexDatas)
		   // this.indexDatas=indexDatas;
		   
		   this.$store.dispatch('getIndexDatas');
		   // console.log(this.$store.state)
		   
		   // this.$store.commit('set1');
		   // this.$store.commit('set2');
	   },
	   methods:{
		   changeNavIndex(index){
			   this.navIndex=index;
		   }
	   },
	   computed:{
		   // indexDatas(){
			  //  // console.log('store',this.$store)
			  //  return this.$store.state.home.indexDatas
		   // },
		   // ...mapState(['indexDatas'])	没有模块化时候,可用
		   ...mapState({
			   indexDatas:state=>state.home.indexDatas
		   })
	   },
	   components:{
		   Recommend
	   }
	   
	}
</script>

<style lang="stylus">
	.indexContainer
		.header
			display flex
			align-items center
			padding-top 20upx
			.logo
				width 140upx
				height 40upx
				flex-shrink 0
				margin 0 20upx
			.search
				position relative
				width 100%
				height 60upx
				background #ededed
				padding-left 60upx
				.iconfont
					position absolute
					left 20upx
					top 50%
					transform translateY(-50%)
				input
					height 60upx
					.placeholder
						font-size 24upx
						color #333
						text-align center
						text-indent -40upx
			.username
				width 144upx
				height 60upx
				font-size 24upx
				color red
				flex-shrink 0
				margin 0 20upx
		.navScroll
			// display flex
			white-space nowrap
			// height 300upx
			.scrollItem
				position relative
				display inline-block
				width 140upx
				height 80upx
				font-size 28upx
				text-align center
				line-height 80upx
				margin 0 10upx
				&.active::after
					position absolute
					left 0
					bottom 2upx
					content ""
					display block
					height 2upx
					width 100%
					background-color red
</style>
