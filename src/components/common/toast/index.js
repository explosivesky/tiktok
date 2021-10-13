import Toast from './Toast.vue'
import Vue from 'vue'

//1.创建组件构造
let constructor = Vue.extend(Toast);
let timer = null;
let instance;
let install = (options) => {
 if (!instance) {
  //2.创建组件实例
  instance = new constructor();
  //3.将组件的根元素 $el 挂载到 页面中
  document.body.appendChild(instance.$mount().$el)

 }
 //默认时间
 instance.duration = 2000;
 if (typeof options == 'string') {
  instance.message = options
 } else if (options === null) {
  return
 } else if (typeof options == 'object') {
  instance.duration = options.duration || 2000;
  instance.message = options.message;
  instance.type = options.type;
  instance.show = options.show;
 } else return
 //定时器可以定义再组件实例上，也可以定义在 组件中
 timer = setTimeout(() => {
  instance.show = false;
  clearTimeout(timer)
  timer = null
 }, instance.duration);
}
export default install