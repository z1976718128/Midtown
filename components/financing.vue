<template>
    <view>
        <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                    <picker @change="bindPickerChange"  selected="index" :range="array" range-key="name">
                        <view class="uni-input">
							<!-- 行业阶段 -->
							{{finan_name}}
							<!-- <image v-if="index==0" class="xl" src="../../../static/img/jt_2.png" mode=""></image>
							<image v-else class="xl" src="../../../static/img/jt_1.png" mode=""> -->
						</view>
                    </picker>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	import {getCapital} from "../uilt/api.js"
    export default {
        data() {
            return {
				finan_name:"选择>",
                title: 'picker',
                array: [],
                index:0,
				gb:""
            }
        },
		mounted() {
			uni.request({
				url: 'http://zc.demo.yudw.com/api/index/getCapital', //请求接口
				method:'GET',
				dataType:'json',
				success: (res) => {
					console.log(res)
					res.data.data.map(item=>{
						this.array.push(item)
					})
				},
				fail:(res) =>{//请求失败后返回
					console.log(res);
				}
			})
		},
        methods: {
            bindPickerChange: function(e) {
                this.$emit("findVal",e.target.value+1)
                this.index = e.target.value
				this.finan_name = this.array[this.index].name
            },
        }
    }
</script>

<style scoped>
.uni-list{
	/* width:331upx;
	height:63upx;
	line-height: 63upx;
	background:rgba(239,239,239,1);
	border-radius:15upx;
	text-align: center; */
	
}	
.uni-input{
	font-size:28upx;
	text-align: center;
	color: #DEB156;
}
.xl{
	width:24upx;
	height:14upx;
	margin-left: 18upx;
}
</style>