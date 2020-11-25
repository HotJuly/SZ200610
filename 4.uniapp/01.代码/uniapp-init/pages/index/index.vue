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
	</view>
	<!-- <div class="indexContainer">indexContainer</div> -->
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello1'
			}
		},
		onLoad() {

		},
		methods: {

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
</style>
