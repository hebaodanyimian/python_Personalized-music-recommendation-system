<template>
	<div class="home-preview" :style='{"width":"100%","margin":"0 auto","position":"relative","alignItems":"flex-start","flexWrap":"wrap","display":"flex"}'>




		
<!-- 商品推荐 -->
<div id="animate_recommendgequxinxi" class="recommend animate__animated" :style='{"padding":"110px 10%","margin":"0","background":"url(http://codegen.caihongy.cn/20231228/66b2219633104669aa2b2ccc41d01f72.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","position":"relative","backgroundRepeat":"no-repeat","order":"4"}'>
    <div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","textAlign":"center","background":"none"}'>
		<span :style='{"border":"1px solid #BFF2FF","color":"#000","borderWidth":"0 0 2px","display":"inline-block","width":"calc(100% - 40px)","fontSize":"30px","fontWeight":"bold"}'>歌曲信息推荐</span>
	</div>
	<div v-if="gequxinxiRecommend.length" class="list list14 index-pv1" :style='{"border":"5px solid #BFF2FF","padding":"120px 50px 50px","margin":"-90px 0 0","borderRadius":"20px","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
	  <div :style='{"width":"30%","position":"relative","height":"auto"}' class="left">
	    <img :style='{"width":"100% ","objectFit":"cover","display":"block","height":"535px"}' src="http://codegen.caihongy.cn/20230814/797fe92c8ce14417a09161c42381f9b3.jpg">
	    <template v-for="item,index in gequxinxiRecommend">
		<template v-if="recommendIndex14gequxinxi == index">
		<img @click="toDetail('gequxinxiDetail', item)" :name="item.id" :style='{"objectFit":"cover","top":"70px","left":"96px","display":"block","width":"88% ","position":"absolute","height":"500px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('gequxinxiDetail', item)" :name="item.id" :style='{"objectFit":"cover","top":"70px","left":"96px","display":"block","width":"88% ","position":"absolute","height":"500px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	  <div :style='{"padding":"0","alignItems":"center","flexWrap":"wrap","display":"flex","width":"65%","justifyContent":"space-between","height":"auto"}' class="list">
	    <template v-for="item,index in gequxinxiRecommend">
		<img @click="recommendClick14(index, 'gequxinxi')" :name="item.id" :style='{"width":"31% ","objectFit":"cover","display":"block","height":"220px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="recommendClick14(index, 'gequxinxi')" :name="item.id" :style='{"width":"31% ","objectFit":"cover","display":"block","height":"220px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
	  </div>
	</div>
	<div @click="moreBtn('gequxinxi')" :style='{"border":"2px solid #80BBCA","margin":"10px auto","top":"120px","textAlign":"center","background":"none","display":"block","width":"80px","lineHeight":"30px","position":"absolute","right":"calc(10% + 20px)"}'>
		<span :style='{"color":"#80BBCA","fontSize":"12px"}'>查看更多</span>
		<i :style='{"color":"#80BBCA","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
</div>
<!-- 商品推荐 -->
<!-- 特价商品 -->
<div id="animate_listgequpaixingbang" class="lists animate__animated" :style='{"padding":"100px 10%","margin":"0 0 ","background":"#fff","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","position":"relative","backgroundRepeat":"no-repeat","order":"7"}'>
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","textAlign":"center","background":"none"}'>
	  <span :style='{"border":"1px solid #BFF2FF","margin":"0 auto","color":"#000","borderWidth":"0 0 2px","display":"inline-block","width":"calc(100% - 140px)","fontSize":"30px","lineHeight":"54px","fontWeight":"bold"}'>歌曲排行榜展示</span>
	</div>
	<!-- 样式九 -->
	<div class="list list9 index-pv1" :style='{"border":"5px solid #BFF2FF","padding":"140px 70px 50px","margin":"-100px 0 0","borderRadius":"20px","background":"#fff","width":"100%","height":"auto"}'>
		<div class="list-4-body" :style='{"width":"100%","margin":"0 0 30px","display":"flex","height":"auto"}'>
			<div v-if="gequpaixingbangList.length>0" @click="toDetail('gequpaixingbangDetail', gequpaixingbangList[0])" class="list-4-item animation-box item-1" :style='{"width":"calc(50% - 20px)","margin":"0 40px 0 0","position":"relative","display":"inline-block","height":"340px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(gequpaixingbangList[0].fengmian)" :src="gequpaixingbangList[0].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (gequpaixingbangList[0].fengmian?gequpaixingbangList[0].fengmian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"border":"5px solid #BFF2FF","padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[0].gedanmingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[0].gequleixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","display":"none","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[0].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"2"}'>
					  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[0].thumbsupnum}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[0].storeupnum}}</span>
					</div>
                </div>
			</div>
			<div v-if="gequpaixingbangList.length>1" @click="toDetail('gequpaixingbangDetail', gequpaixingbangList[1])" class="list-4-item animation-box item-2" :style='{"width":"calc(50% - 20px)","margin":"0 0","position":"relative","display":"inline-block","height":"340px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(gequpaixingbangList[1].fengmian)" :src="gequpaixingbangList[1].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (gequpaixingbangList[1].fengmian?gequpaixingbangList[1].fengmian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"border":"5px solid #BFF2FF","padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[1].gedanmingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[1].gequleixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","display":"none","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[1].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"2"}'>
					  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[1].thumbsupnum}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[1].storeupnum}}</span>
					</div>
                </div>
			</div>
		</div>
		<div class="list-4-body" :style='{"width":"100%","justifyContent":"space-between","display":"flex","height":"auto"}'>
			<div v-if="gequpaixingbangList.length>2" @click="toDetail('gequpaixingbangDetail', gequpaixingbangList[2])" class="list-4-item animation-box item-3" :style='{"width":"calc(100% / 3 - 30px)","margin":"0 45px 0 0","position":"relative","height":"360px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(gequpaixingbangList[2].fengmian)" :src="gequpaixingbangList[2].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (gequpaixingbangList[2].fengmian?gequpaixingbangList[2].fengmian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"border":"5px solid #BFF2FF","padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[2].gedanmingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[2].gequleixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","display":"none","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[2].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"2"}'>
					  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[2].thumbsupnum}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[2].storeupnum}}</span>
					</div>
                </div>
			</div>
			<div v-if="gequpaixingbangList.length>3" @click="toDetail('gequpaixingbangDetail', gequpaixingbangList[3])" class="list-4-item animation-box item-4" :style='{"width":"calc(100% / 3 - 30px)","margin":"0 45px 0 0","position":"relative","height":"360px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(gequpaixingbangList[3].fengmian)" :src="gequpaixingbangList[3].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (gequpaixingbangList[3].fengmian?gequpaixingbangList[3].fengmian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"border":"5px solid #BFF2FF","padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[3].gedanmingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[3].gequleixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","display":"none","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[3].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"2"}'>
					  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[3].thumbsupnum}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[3].storeupnum}}</span>
					</div>
                </div>
			</div>
			<div v-if="gequpaixingbangList.length>4" @click="toDetail('gequpaixingbangDetail', gequpaixingbangList[4])" class="list-4-item animation-box item-5" :style='{"width":"calc(100% / 3 - 30px)","margin":"0 0","position":"relative","height":"360px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(gequpaixingbangList[4].fengmian)" :src="gequpaixingbangList[4].fengmian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (gequpaixingbangList[4].fengmian?gequpaixingbangList[4].fengmian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"border":"5px solid #BFF2FF","padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[4].gedanmingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{gequpaixingbangList[4].gequleixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","display":"none","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[4].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"2"}'>
					  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[4].thumbsupnum}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{gequpaixingbangList[4].storeupnum}}</span>
					</div>
                </div>
			</div>
		</div>
	</div>
	<div @click="moreBtn('gequpaixingbang')" :style='{"border":"1px solid #80BBCA","margin":"10px auto","top":"110px","textAlign":"center","background":"none","display":"block","width":"80px","lineHeight":"32px","position":"absolute","right":"calc(10% + 70px)"}'>
		<span :style='{"color":"#80BBCA","fontSize":"12px"}'>更多</span>
		<i :style='{"color":"#80BBCA","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	

</div>
<!-- 特价商品 -->
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        newsList: [],
        gequxinxiRecommend: [],

        gequpaixingbangList: [],


		recommendIndex14gequxinxi: 0,


      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getList();
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},
		recommendClick14(index, name) {
			this['recommendIndex14' + name] = index
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__backInUp'},
				{id:'about',css:'animate__bounceInUp'},
				{id:'system',css:'animate__slideInDown'},
				{id:'animate_recommendgequxinxi',css:'animate__rotateInUpRight'},
				{id:'animate_listgequpaixingbang',css:'animate__fadeInTopRight'},
				{id:'msgs',css:'animate__backInLeft'},
				{id:'friendly',css:'animate__fadeInBottomLeft'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "gequxinxi/autoSort";
          if(localStorage.getItem('frontToken')) {
              autoSortUrl = "gequxinxi/autoSort2";
          }
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.gequxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			data = {
				page: 1,
				limit: 6,
			}
			data['sort'] = 'bofangliang'
			data['order']= 'desc'
			this.$http.get('gequpaixingbang/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.gequpaixingbangList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0;
			border-radius: 40px;
			padding: 0 30px 0 20px;
			box-shadow: none;
			outline: none;
			color: #000;
			width: 240px;
			font-size: 18px;
			height: 60px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 0;
			border-radius: 40px;
			padding: 0 20px;
			box-shadow: 0 0 6px rgba(64, 158, 255, .3);
			outline: none;
			color: #000;
			width: 600px;
			font-size: 18px;
			height: 60px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	



	.home-preview .news .list17 .newsSwiper17 .swiper-pagination /deep/ span.swiper-pagination-bullet {
				border-radius: 100%;
				margin: 0 4px;
				background: #fff;
				display: inline-block;
				width: 10px;
				opacity: .2;
				height: 10px;
			}
	
	.home-preview .news .list17 .newsSwiper17 .swiper-pagination /deep/ span.swiper-pagination-bullet:hover {
				background: #50D9FF;
				opacity: 1;
			}
	
	.home-preview .news .list17 .newsSwiper17 .swiper-pagination /deep/ span.swiper-pagination-bullet.swiper-pagination-bullet-active {
				background: #50D9FF;
				opacity: 1;
			}
	
	.home-preview .news .list17 .right .list .title {
				padding: 0 10px 0 0;
				overflow: hidden;
				color: #000;
				white-space: nowrap;
				flex: 1;
				font-weight: bold;
				font-size: 16px;
				line-height: 46px;
				text-overflow: ellipsis;
				transition: 0.3s;
			}
	
	.home-preview .news .list17 .right .list .title:hover {
				transform: translate3d(10px, 0px, 0px);
			}







</style>
