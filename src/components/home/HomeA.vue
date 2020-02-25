<template>
  <div class="componentsA">
    <P class="title">组件A</P>
    <P class="titleName">名称：{{newName}}</P>
    <div>
      <!-- 点击修改 为 A  -->
      <button class="btn" @click="modifyAName('AAA')">修改为AAAA</button>
      {{newName}}
    </div>

    <div class="marTop">
      <button class="btn" @click="modifyANameBase('AAA')">修改为AAAA</button>
      {{newNameBase}}
    </div>

    <div class="marTop">
      <button class="btn" @click="trunToB">跳转到B页面</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "HomeA",
  data() {
    return {};
  },
  //
  mounted() {
    this.modifyAName();
  },
  methods: {
    ...mapActions(
      // 语法糖
      ["modifyAName"] // 相当于this.$store.dispatch('modifyName'),提交这个方法
    ),
    ...mapActions(["modifyANameBase"]),
    trunToB() {
      this.$router.push({ path: "/home/HomeB" }); // 路由跳转到B
    }
  },
  computed: {
    ...mapGetters(
      {
        newName: "newName",
        newNameBase: "newNameBase"
      }
      // ...mapState('aa', {
      //   id: state => state.id,
      // })
    ) // 动态计算属性，相当于this.$store.getters.resturantName
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title,
.titleName {
  color: blue;
  font-size: 20px;
}
.btn {
  width: 160px;
  height: 40px;
  background-color: blue;
  border: none;
  outline: none;
  color: #ffffff;
  border-radius: 4px;
}
.marTop {
  margin-top: 20px;
}
</style>