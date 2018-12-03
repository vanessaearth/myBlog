<template>
  <div class="section articleDetail">
    <div class="title">{{articles[$route.params.id].title}}</div>
    <div class="content">
      {{articles[$route.params.id].content}}
    </div>
  </div>

</template>

<script>
export default {
  name: 'articleDetail',
  data () {
    return {
      articles: [
        {
          title: 'vue2环境搭建',
          content: 'lalalalal',
          create_time: '2018-07-13'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .articleDetail {

  }
  .title{
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0;
  }
  .content{
    font-size: 16px;
    text-indent: 20px;
    padding-bottom: 20px;
  }
</style>
