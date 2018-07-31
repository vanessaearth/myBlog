<template>
  <div class="article-box">
    <ul class="section article-list">
      <li v-for="(art,index) in articles[$route.params.id]" :key="index">
        <router-link :to="{name:'articleDetail',params:{id:index}}">
        {{index+1}}. {{art}}
        </router-link>
      </li>
    </ul>
    <article-tab></article-tab>

  </div>
</template>

<script>
import articleTab from './articleTab'

export default {
  name: 'articleList',
  components: {articleTab},
  data () {
    return {
      articles: [
        [
          'vue2环境搭建',
          'vue2-实例',
          'vue2-模板语法',
          'vue2-计算属性computed',
          'vue2-样式Class 与 Style 绑定',
          'vue2-条件渲染v-if和列表循环v-for',
          'vue2-事件绑定v-on/@',
          'vue2-组件component',
          'vue2-组件注册，prop，插槽',
          'vue2-动态组件和异步组件',
          'vue2-过渡和动画'
        ],

      ]
    }
  }
}
</script>

<style scoped>
  .article-box:after{
    content: '';
    display: block;
    clear: both;
  }
  .article-list{
    float: left;
    width: 760px;
  }
  .article-list li{
    font-size: 16px;
    padding: 10px 0;
    margin: 10px 0;
    border-bottom: 1px dashed #ddd;
  }
  .article-tab{
    float: left;
    width: 296px;
    margin-left: 20px;
    border: 1px solid #ddd;
    background: #fff;
  }
  .article-tab a{
    float: left;
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
</style>
