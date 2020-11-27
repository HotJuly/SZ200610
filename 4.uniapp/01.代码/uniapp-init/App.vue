<script>
	import ajax from './utils/ajax.js'
	export default {
		onLaunch: function() {
			wx.login({
				async success({code}){
					let token = await ajax('/getOpenId',{code});
					// console.log(token)
					uni.setStorage({
						key:'token',
						data:token
					})
				}
			})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
	@import url(./static/iconfont/iconfont.styl);
	page
		height 100%
</style>
