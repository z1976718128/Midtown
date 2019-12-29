<template>
    <view>
        <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                    <picker @change="bindPickerChange"  selected="index" :range="array" range-key="name">
                        <view class="uni-input">
							<!-- 行业阶段 -->
							{{array[index].name}}
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
	import {getField} from "../uilt/api.js"
    export default {
        data() {
            return {
                title: 'picker',
                array: [{
					id:1012,
					name:"选择>"
				}],
                index:0,
				gb:""
            }
        },
		mounted() {
			getField().then((res)=>{
				res.data.data.map(item=>{
					this.array.push(item)
				})
			})
		},
        methods: {
            bindPickerChange: function(e) {
				this.$emit("fieldVal",e.target.value)
                this.index = e.target.value
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
	color: #DEB156;
	
}	
.uni-input{
	font-size:28upx;
	color: #DEB156;
	text-align: center;
}
.xl{
	width:24upx;
	height:14upx;
	margin-left: 18upx;
}
</style>