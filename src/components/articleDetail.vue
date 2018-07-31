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
          content: Author:vanessa\nDate:2018/01/21 \n\n## 方式一：直接<script\\>引入，cdn的方式\n' +
            '\n' +
            '1.可以将vue,js下载到本地引入\n' +
            '\n' +
            '&ltscript src="本地路径/vue.js"&gt&lt/script&gt\n'+
        '2.也可以直接写cdn的地址\n'+
        '\n'+
        '
            &ltscript src="https://cdn.jsdelivr.net/npm/vue/vue.js"&gt&lt/script&gt\n'+
        '## 方式二：npm安装\n'+
        '\n'+
        '前提条件：安装nodejs，在命令行用npm安装vue\n'+
        '\n'+
        'npm install vue\n'+
        '## 方式三：命令行工具CLI\n'+
        '\n'+
        '前提条件：安装nodejs\n'+
        'vue的脚手架-vue-cli，可以快速搭建大型单页面应用，命令行安装\n'+
        '\n'+
        'npm install --global vue-cli\n'+
        'vue init webpack projectName\n'+
        'cd projectName\n'+
        'npm install\n'+
        'npm run dev\n'+
        ',
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
