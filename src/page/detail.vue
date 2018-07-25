<template>
  <div class="container">
    <div>{{$route.params.id}}</div>
    <h1 v-text='detail.title'></h1>
    <div refs="list" v-html="detail.content">
    </div>
    <ul>
      <li class="authorline" v-for='(item,index) in detail.replies' :key="index">
        <div class="left-box">
          <img :src="item.author.avatar_url" alt="" class="authorimg"/>
          <div v-text='item.author.loginname' class="authorname"></div>
        </div>
        <p class="right-box" v-html='item.content'></p>
      </li>
    </ul>
    <div class="comment-box">
      <textarea class="says" name="" rows="" cols="" v-model="says" placeholder="你想说什么..."></textarea>
      {{says}}
      <button ref="reset" @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$api.get('topic/' + this.$route.params.id, null, r => {
      this.detail = r.data
    })

    var qs = require('qs')
    this.$api.post('topic/', qs.stringify({ 'id': this.$route.params.id }), r => {
      this.detail = r.data
    })
  },
  methods: {
    reset: function () {
      this.says = ''
    }
  },
  data () {
    return {
      says: '',
      detail: [1, 2]
    }
  }
}
</script>

<style>
.says{
  width: 100%;
  height: 100px;
}
::placeholder{
  color: goldenrod;
}
ul{
  margin: 0;
  padding: 0;
}
.authorline{
  list-style: none;
  height: 144px;
}
.left-box{
  float: left;
  padding: 10px;
}
.right-box{
  padding: 10px 10px 10px 130px;
  vertical-align: top;
}
p img{
  width: 300px;
  height: 300px;
}
li:after{
  clear:both;
}

.authorimg{
  width: 100px;
  height: 100px;
  display: block;
}
.authorname{
  text-align: center;

}
</style>
