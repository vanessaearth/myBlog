<template>
  <div>
    <div class="nav">
      <div class="container">
        <router-link  class="logo" to="/home">logo</router-link>
        <ul class="menu">
          <li>
            <router-link to="/home" >home</router-link>
          </li>
          <li>
            <router-link :to="{name:'articleList',params:{id:0}}">vue</router-link>
          </li>

        </ul>
      </div>
    </div>
    <div class="content-box">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
  *{
    margin: 0;
    padding: 0;
  }
  body,html{
    font:15px/1.5 "Microsoft Yahei", "Hiragino Sans GB", Helvetica, "Helvetica Neue", Tahoma, Arial, sans-serif;
    color: #444;
    background: #f6f6f6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a{
    color: #444;
    text-decoration: none;
  }
  .section{
    background: #fff;
    padding: 0 20px;

  }
  .container{
    width: 1120px;
    margin: 0 auto;
    overflow: hidden;
  }
  .nav{
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .04);
    z-index: 9999;
  }
  .logo,.menu{
    float: left;
  }
  .logo{
    font-size: 22px;
    margin-right: 50px;
  }
  .menu li{
    float: left;
    margin-right: 10px;
    width: 100px;
    text-align: center;
  }
  .menu a{
    display: inline-block;
    width: 100px;
    font-size: 20px;
    text-align: center;
    color: #000;
  }
  .menu>li>a.router-link-active,
  .menu>li>a.on{
    background: lightsalmon;
    color: #fff;
  }
  .content-box{
    margin: 80px auto 20px auto;
    width: 1120px;

  }
</style>
