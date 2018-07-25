<template>
    <div>
      <banner :slides="slides"></banner>
      <div class="down-content">
        <home-list></home-list>
        <div class="home-right">
          <ul class="tab">
            <li>
              <router-link to="/home/tab1">显示1</router-link>
            </li>
            <li>
              <router-link to="/home/tab2">显示2</router-link>
            </li>
            <li>
              <router-link to="/home/tab3">显示3</router-link>
            </li>
          </ul>
          <div class="tab-content">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import banner from './../components/banner'
import homeList from './../components/homeList'

export default {
  name: 'home',
  components: {banner, homeList},
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../../static/img/1.jpg'),
          title: '第1张图'
        }, {
          src: require('../../static/img/2.jpg'),
          title: '第2张图'
        }, {
          src: require('../../static/img/3.jpg'),
          title: '第3张图'
        }, {
          src: require('../../static/img/4.jpg'),
          title: '第4张图'
        }, {
          src: require('../../static/img/5.jpg'),
          title: '第5张图'
        }, {
          src: require('../../static/img/6.jpg'),
          title: '第6张图'
        }, {
          src: require('../../static/img/7.jpg'),
          title: '第7张图'
        }, {
          src: require('../../static/img/8.jpg'),
          title: '第8张图'
        }, {
          src: require('../../static/img/9.jpg'),
          title: '第9张图'
        }, {
          src: require('../../static/img/10.jpg'),
          title: '第10张图'
        }
      ],
      isCurrent: 0,
      tabView: 'tab1',
      tabs: ['头条', '文章', '排行']
    }
  }
}
</script>

<style scoped>
  .down-content{
    margin: 20px 0;
    overflow: hidden;
  }
  .home-right{
    float: left;
    width: 356px;
    margin-left: 20px;
    border: 1px solid #ddd;
    background: #fff;
  }
  .tab:after{
    clear:both;
    content:'';
    display:block;
  }
  .tab li{
    float: left;
    width: 118px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-right: 1px solid #ddd;
  }
  .tab li:last-child{
    border-right: none;
  }
  .tab li a{
    display: inline-block;
    background: #ececec;
    border-bottom: 1px solid #ddd;
    width: 100%;

  }
  .tab li a.router-link-active{
    background:#fff;
    border-bottom:none;
  }
  .tab-content{
    padding:20px;
  }
</style>
