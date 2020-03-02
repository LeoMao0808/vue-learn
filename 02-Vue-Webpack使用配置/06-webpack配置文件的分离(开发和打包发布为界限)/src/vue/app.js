/*需优化点:模板和js代码混合 优化看App.vue*/
export default {
  template:
      `<div>
        <h2>{{msg}}</h2>
        <button @click="btnC">按钮</button>
    </div>`,
  data() {
    return {msg:'testVue'}
  },
  methods:{
    btnC(){
      console.log('点击按钮');
    }
  }
}