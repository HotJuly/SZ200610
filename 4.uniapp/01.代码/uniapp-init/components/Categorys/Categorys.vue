<template>
	<view class="categorysContainer">
		<image class="titlePicUrl" :src="categorys.titlePicUrl" mode=""></image>
		<scroll-view scroll-x="true" class="categoryScroll">
			<view class="category" v-for="category in categorys.itemList" :key="category.id">
				<image class="showPicUrl" :src="category.showPicUrl" mode=""></image>
				<text class="name">{{category.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:["categorys"]
	}
</script>

<style lang="stylus">
	.categorysContainer
		>.titlePicUrl
			width 100%
			height 370upx
		.categoryScroll
			white-space nowrap
			height 370upx
			padding 20upx 0
			.category
				display inline-block
				width 200upx
				margin 0 20upx
				vertical-align top
				.showPicUrl
					width 200upx
					height 200upx
					background #eee
				.name
					display -webkit-box
					-webkit-line-clamp 2
					-webkit-box-orient vertical
					white-space pre-wrap
					overflow hidden
					font-size 24upx
					
</style>
