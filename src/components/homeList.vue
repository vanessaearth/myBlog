<template>
      <ul class="home-list">
        <li v-for="(item,index) in lists" :key="index" @click="showItemList">
          <router-link :to="{name:'articleList',params:{id:index}}">
          <img class="leftpic" :src="item.src" alt="">
          <dl>
            <dt>{{item.title}}</dt>
            <dd>
              <span>{{item.content}}</span>
              <p class="kind">2018-07-13</p>
              <a href="#">查看更多</a>
            </dd>
          </dl>
          </router-link>
        </li>
      </ul>
</template>

<script>
export default {
  name: 'homeList',
  data () {
    return {
      lists: [
        { id: 1,
          src: require('../../static/img/1.jpg'),
          title: 'vue2环境搭建',
          content: 'vue的3种搭建方式'
        }, {
          id: 2,
          src: require('../../static/img/2.jpg'),
          title: '文章标题',
          content: '文字内容'
        }, {
          id: 3,
          src: require('../../static/img/3.jpg'),
          title: '文章标题',
          content: '文字内容'
        }, {
          id: 4,
          src: require('../../static/img/4.jpg'),
          title: '文章标题',
          content: '文字内容'
        }
      ]
    }
  },
  methods: {
    showItemList () {

    }
  }
}
</script>

<style scoped>
  .home-list{
    float: left;
    width: 660px;
    padding: 0 20px;
    border: 1px solid #ddd;
    background: #fff;
  }
  .home-list > li {
    display: block;
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px dashed #ddd;
  }
  .home-list > li:last-child{
    border: none;
  }
  .leftpic{
    width: 200px;
    height: 150px;
    float: left;
  }
  dl{
    float: left;
    width: 440px;
    height: 150px;
    margin-left: 20px;
  }
  dt{
    font-size: 18px;
    font-weight: 600;
  }
  dd>span{
    display: inline-block;
    height: 65px;
    margin: 15px 0;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  dd>p{
    float: left;

  }
  dd>a{
    float: right;
  }
</style>
