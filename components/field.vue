<template>
    <view>
        <view class="uni-title uni-common-pl">地区选择器</view>
        <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                    <picker @change="bindPickerChange" :value="index" :range="array">
                        <view class="uni-input">{{array[index]}}</view>
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
                array: ['中国', '美国', '巴西', '日本'],
                objectArray: [{
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
                index: 0,
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