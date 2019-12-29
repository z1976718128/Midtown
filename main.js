import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue'
Vue.component('chunLei-modal',chunLeiModal);
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
