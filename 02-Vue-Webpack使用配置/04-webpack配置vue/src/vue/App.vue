<!--1.使用.vue文件需要安装  vue-loader  vue-template-compiler
cnpm install --save-dev vue-loader vue-template-compiler
安装完后记得配置loader
-->
<template>
  <div>
    <h2 class="title">{{msg}}</h2>
    <button @click="btnC">按钮</button>
    <cpn/>
  </div>
</template>

<script>
  // 导入子组件
  import Cpn from './Cpn.vue'
  export default {
    name:'App',
    data() {
      return {msg:'testVue'}
    },
    methods:{
      btnC(){
        console.log('点击按钮');
      }
    },
    components:{
      Cpn
    }
  }
</script>

<style scoped>
 .title {
   color: green;
 }
</style>