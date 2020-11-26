<template>
	<view class="recommendContainer">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/1a75b1f4017cc206b5f397b23545da3b.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/a49b317a5dd9e16cf907f49ebc32f851.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/e2d211a3aa15d2bcb837814c4cb99751.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="policyDescList">
			<view class="policyItem" v-for="item in indexDatas.policyDescList" :key="item.desc">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<view class="kingKongList">
			<view class="kingKongItem" v-for="item in indexDatas.kingKongModule.kingKongList" :key="item.L1Id">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		
		<Categorys :categorys="categorys" v-for="categorys in indexDatas.categoryModule" :key="categorys.titlePicUrl"/>
	</view>
</template>

<script>
	import Categorys from '../Categorys/Categorys.vue';
	export default{
		props:{
			indexDatas:Object
		},
		components:{
			Categorys
		}
	}
</script>

<style lang="stylus">
	.recommendContainer
		.swiper-item
			height 100%
			image
				width 100%
				height 100%
		.policyDescList
			display flex
			justify-content space-around
			.policyItem
				image
					width 32upx
					height 32upx
					vertical-align middle
				text
					font-size 28upx
					vertical-align middle
		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				display flex
				flex-direction column
				align-items center
				width 20%
				image
					width 110upx
					height 110upx
				text
					font-size 24upx
</style>
