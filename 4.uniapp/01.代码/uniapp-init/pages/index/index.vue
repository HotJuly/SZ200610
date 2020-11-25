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
		
		<scroll-view scroll-x="true" class="navScroll">
			<view class="scrollItem active">
				推荐
			</view>
			<view class="scrollItem">
				美食酒水
			</view>
			<view class="scrollItem">
				服饰鞋包
			</view>
			<view class="scrollItem">
				推荐
			</view>
			<view class="scrollItem">
				美食酒水
			</view>
			<view class="scrollItem">
				服饰鞋包
			</view>
			<view class="scrollItem">
				推荐
			</view>
			<view class="scrollItem">
				美食酒水
			</view>
			<view class="scrollItem">
				服饰鞋包
			</view>
			<view class="scrollItem">
				推荐
			</view>
			<view class="scrollItem">
				美食酒水
			</view>
			<view class="scrollItem">
				服饰鞋包
			</view>
			<view class="scrollItem">
				推荐
			</view>
			<view class="scrollItem">
				美食酒水
			</view>
			<view class="scrollItem">
				服饰鞋包
			</view>
			<view class="scrollItem">
				推荐
			</view>
			<view class="scrollItem">
				美食酒水
			</view>
			<view class="scrollItem">
				服饰鞋包
			</view>
		</scroll-view>
		
	</view>
	<!-- <div class="indexContainer">indexContainer</div> -->
	
</template>

<script>
	export default {
		data() {
			return {
			}
		},
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
				background #ededed
				padding-left 60upx
				.iconfont
					position absolute
					left 20upx
					top 50%
					transform translateY(-50%)
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
