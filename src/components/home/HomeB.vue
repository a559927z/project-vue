<template>
  <div class="componentsB">
    <P class="title">组件B</P>
    <P class="titleName">名称：{{newName}}</P>
    <div>
      <!-- 点击修改 为 B  -->
      <button class="btn" @click="modifyBName('BBB')">修改为BBBB</button>
    </div>

  <div class="marTop">
      <button class="btn" @click="modifyBNameBase('BBB')">修改为BBBB</button>
      {{newNameBase}}
    </div>


    <div class="marTop">
      <button class="btn" @click="trunToA">跳转到A页面</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomeB",
  data() {
    return {};
  },
  methods: {
    ...mapActions(
      // 语法糖
      ["modifyBName","modifyBNameBase"] // 相当于this.$store.dispatch('modifyName'),提交这个方法
    ),
    trunToA() {
      this.$router.push({ path: "/home/HomeA" }); // 路由跳转到A
    }
  },
  computed: {
    ...mapGetters(["newName", "newNameBase"]) // 动态计算属性，相当于this.$store.getters.resturantName
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title,
.titleName {
  color: red;
  font-size: 20px;
}
.btn {
  width: 160px;
  height: 40px;
  background-color: red;
  border: none;
  outline: none;
  color: #ffffff;
  border-radius: 4px;
}
.marTop {
  margin-top: 20px;
}
</style>