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
        ['vue安装', '实例', '指令', '方法', '计算属性', '怎天气', '爱迪生', '奥德赛', '规范', '电风扇', '更好'],
        ['']
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
