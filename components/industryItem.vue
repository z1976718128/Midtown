<template>
    <view>
        <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                    <picker @change="bindPickerChange" :value="index" :range="objectArray">
                        <view class="uni-input">
							{{objectArray[index].name}}
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
    export default {
        data() {
            return {
                title: 'picker',
                // array: ['中国', '美国', '巴西', '日本'],
                objectArray: [
					{
                        id: 11,
                        name: '中国'
                    },
                    {
                        id: 12,
                        name: '美国'
                    },
                    {
                        id: 13,
                        name: '德国'
                    },
                    {
                        id: 14,
                        name: '法国'
                    }
                ],
                index:0,
            }
        },
        computed: {
        },
        methods: {
            bindPickerChange: function(e) {
                console.log(e.target.value)
                this.index = e.target.value
            },
        }
    }
</script>

<style scoped>
.uni-list{
	width:331upx;
	height:63upx;
	line-height: 63upx;
	background:rgba(239,239,239,1);
	border-radius:15upx;
	text-align: center;
	
}	
.uni-input{
	font-size:28upx;
	color:rgba(68,68,68,1);
	text-align: center;
}
.xl{
	width:24upx;
	height:14upx;
	margin-left: 18upx;
}
</style>