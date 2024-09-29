<template>
  <view class="home">
<!--    <NavBar></NavBar> -->
    <view class="uni-margin-wrap">
      <swiper class="swiper" :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000"
        :duration="500">
        <swiper-item v-for="(image, index) in images" :key="index" style="display: flex; justify-content: center;">
          <image class="banner" :src="image" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="button-section">
      <button @click="goToSearch">Mineral Query</button>
    </view>
	 <view class="text-container">
	    <view class="section">
	     <!-- <text class="section-title">矿物检索功能说明：</text> -->
		   <h3>矿物检索功能说明：</h3>
	    </view>
		<view class="section">
		    <h3 class="geomaterials-title">Geomaterials</h3>
		  </view>
	    <view class="section">
	      <text class="section-title">geomaterials_contain_all_elements(contains):</text>
	      <text class="section-content">检索出包含全部输入元素的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_not_contain_elements(notContains):</text>
	      <text class="section-content">检索出不包含全部输入元素的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_contain_all_but_not_elements(containAllButNot):</text>
	      <text class="section-content">检索出包含第一个所有输入元素而不含第二个所有输入元素的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_contain_only_elements(containOnlyElems):</text>
	      <text class="section-content">检索出只含有输入元素的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_hardness_greater_than(hardnessGT):</text>
	      <text class="section-content">检索硬度高于给定值的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_hardness_less_than(hardnessLT):</text>
	      <text class="section-content">检索硬度低于给定值的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_hardness_range(hardnessRange)：</text>
	      <text class="section-content">检索查询硬度在指定范围内的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_density_greater_than(densGT):</text>
	      <text class="section-content">查询密度高于给定值的地质材料列表。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_density_less_than(denLT):</text>
	      <text class="section-content">查询密度低于给定值的地质材料列表。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_density_range(densRange):</text>
	      <text class="section-content">检索查询密度在指定范围内的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_optical2v_greater_than(optical2vGT):</text>
	      <text class="section-content">检索地质材料具有比给定值更高的光学2v值。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_optical2v_less_than(optical2vLT):</text>
	      <text class="section-content">检索地质材料具有比给定值更低的光学2v值。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_optical2v_range(optical2vRange):</text>
	      <text class="section-content">检索具有给定光学2v范围的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_crystal_system(csystem):</text>
	      <text class="section-content">检索具有给定晶体的地质材料。</text>
	    </view>
	
	    <view class="section">
	      <text class="section-title">geomaterials_fracturetype(fracturetype):</text>
	      <text class="section-content">检索具有给定断裂类型的地质材料。</text>
	    </view>
		<view class="section">
		<text class="section-title">geomaterials_colour(colour):</text>
		<text class="section-content">查询与给定颜色匹配的地质材料列表。</text>
		</view>
	    <view class="section">
	      <text class="section-title">geomaterials_streak(streak):</text>
	      <text class="section-content">检索与给定条纹匹配的地质材料。</text>
	    </view>
		<view class="section">
		  <text class="section-title">geomaterials_diapheny(diapheny):</text>
		  <text class="section-content">检索具有给定方位角的地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterials_lustretype(lustretype):</text>
		  <text class="section-content">检索与给定光泽类型匹配的地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterials_opticalsign(opticalsign):</text>
		  <text class="section-content">检索与给定光学标志相匹配的地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterials_polytypeof(polytypeof):</text>
		  <text class="section-content">根据给定的多型别 id 检索地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterials_cleavagetype(cleavagetype):</text>
		  <text class="section-content">与给定解理类型匹配的地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterials_name(name):</text>
		  <text class="section-content">检索名称中与给定字符串匹配的地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterials_search_name(q):</text>
		  <text class="section-content">通过给定名称检索包含该名称的地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">mindat_geomaterial(id):</text>
		  <text class="section-content">通过id检索地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterials_varietyof(varietyof):</text>
		  <text class="section-content">检索属于给定地质材料id的种类的地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterials_entrytype(entrytype):</text>
		  <text class="section-content">检索具有给定条目类型的地质材料。</text>
		</view>
		<view class="section">
		  <text class="section-title">geomaterial_retrieved_by_combined_conditions(retrievedbycombined):</text>
		  <text class="section-content">检索满足多种联合条件的地质材料。</text>
		</view>
		<view class="section">
		    <h3 class="geomaterials-title">Localities</h3>
		  </view>
		<view class="section">
		  <text class="section-title">localities_country(countrylist):</text>
		  <text class="section-content">查询给定国家/地区内的地区列表。</text>
		</view>
		<view class="section">
		  <text class="section-title">localities_retrieve_id(localitiesid):</text>
		  <text class="section-content">根据给定的id查询所在地。</text>
		</view>
		<view class="section">
		  <text class="section-title">Localities_description(description):</text>
		  <text class="section-content">查询包含给定描述的地区列表。</text>
		</view>
		<view class="section">
		  <text class="section-title">Localities_elements_inc(localitiesElementsInc):</text>
		  <text class="section-content">查询包含给定元素的地区列表。</text>
		</view>
		<view class="section">
		  <text class="section-title">Localities_elements_exc(localitiesElementsExc):</text>
		  <text class="section-content">不包含给定元素的地区列表。</text>
		</view>
		<view class="section">
		  <text class="section-title">Localities_elements_inc_exc(localitiesElementsIncExc):</text>
		  <text class="section-content">包含给定元素但不包含其他给定元素的地区列表。</text>
		</view>
		<view class="section">
		  <text class="section-title">Localities_age(localitiesAge):</text>
		  <text class="section-content">根据id检索地区年龄。</text>
		</view>
		<view class="section">
		    <h3 class="geomaterials-title">IMA minerals</h3>
		</view>
		<view class="section">
		  <text class="section-title">minerals_ima_list(mineralsImaList):</text>
		  <text class="section-content">检索所有ima矿物列表。</text>
		</view>
		<view class="section">
		  <text class="section-title">minerals_ima_retrieve(mineralsImaRetrieve):</text>
		  <text class="section-content">通过id检索ima矿物。</text>
		</view>
	  </view>
  </view>
</template>

<script>
import NavBar from '@/components/navbar/navbar.vue';

export default {
  data() {
    return {
      images: [
        '/static/image1/M1.jpg',
        '/static/image1/M2.jpg',
        '/static/image1/M3.jpg',
        '/static/image1/M4.jpg'
      ]
    };
  },
  methods: {
    goToSearch() {
      // 使用 switchTab 方法切换到底部标签栏页
      uni.switchTab({
        url: '/pages/tabBar/search/search',
        success() {
          // 切换成功后可以在这里执行一些操作
        },
        fail(err) {
          console.error('Switch tab failed:', err);
        }
      });
    }
  },
  mounted() {
 //  	uni.request({
 //  		url: "https://api.mindat.org/",
 //  		// 注意
	// 	method: 'GET',
	// 	header: {
	// 	  'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	// 	},
 //  		success: (res) => {
 //  			console.log(res.data)
 //  		}
 //  	})
	// uni.request({
	// 	url: "https://api.mindat.org/geomaterials/",
	// 	// 注意
	// 	method: 'GET',
	// 	header: {
	// 	  'Authorization': 'Token 99ef26e16c7d6eca9941af072bf5532f'
	// 	},
	// 	success: (res) => {
	// 		console.log(res.data)
	// 	}
	// })
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.uni-margin-wrap {
  display: flex;
  width: 100%;
  padding: 10rpx;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 260rpx;

    .banner {
      width: 700rpx;
      height: 260rpx;
    }
  }
}

.button-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    padding: 12px 24px; /* 调整按钮内边距 */
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* 添加过渡效果 */

    &:hover {
      background-color: #0056b3; /* 鼠标悬停时的背景色 */
    }
  }
}
.geomaterials-title {
  color: #4CAF50; /* 设置不同的字体颜色，例如绿色 */
}




.text-container {
  padding: 16px;
  background-color: #f9f9f9;
}

.section {
  margin-bottom: 16px;
}

.section-title {
  display: block;
  font-size: calc(14px - 0.05vw);
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

.section-content {
  display: block;
  font-size: 14px;
  margin-top: 10px;
}
</style>
