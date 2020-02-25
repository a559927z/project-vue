<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！'
    }
  }
}
</script>