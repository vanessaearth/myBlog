<template>
  <div class="article-tab">
    <ul class="tab">
      <li v-for="(item,index) in tabs" :class="{cur:isCurrent==index}" :key="index" @click="isCurrent=index,tabChange('tab'+(index+1))">
        {{item}}
      </li>
    </ul>
    <div class="tab-content">
      <keep-alive>
        <component :is="tabView"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>

import tab1 from './tab1'
import tab2 from './tab2'
import tab3 from './tab3'
export default {
  name: 'articleTab',
  data () {
    return {
      isCurrent: 0,
      tabView: 'tab1',
      tabs: ['头条', '文章', '排行']
    }
  },
  components: {
    tab1,
    tab2,
    tab3
  },
  methods: {
    tabChange: function (tab) {
      console.log(tab)
      this.tabView = tab
    }
  }
}
</script>

<style scoped>
  .article-tab{
    float: left;
    width: 296px;
    margin-left: 20px;
    border: 1px solid #ddd;
    background: #fff;
  }
  .tab li{
    float: left;
    display: inline-block;
    width: 98px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #ececec;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .tab:after{
    clear:both;
    content:'';
    display:block;
  }

  .tab li:last-child{
    border-right: none;
  }
  .tab li.cur{
    background:#fff;
    border-bottom:none;
  }
  .tab-content{
    padding:20px;
  }
</style>
