<template>
  <div class="section articleDetail">
    <div class="title">{{article.title}}</div>
    <div class="content">
      {{article.content}}
    </div>
  </div>

</template>

<script>
export default {
  name: 'articleDetail',
  data () {
    return {
      article: {
        title: 'vue时刻',
        content: '央视网消息：住房城乡建设部12日表示，各地要按照新的三年棚改攻坚计划的要求，指导督促各地扎实推进棚改工作，因地制宜推进棚改货币化安置。\n' +
        '\n' +
        '\n' +
        '\n' +
        '　　住建部表示，1至6月，全国棚户区改造已开工363万套，占目标任务的62.5%。\n' +
        '\n' +
        '　　对于接下来的棚改任务，住建部指出，各地应当及早开工新建项目，加快建设续建项目，加大棚改配套基础设施建设力度。\n' +
        '\n' +
        '\n' +
        '\n' +
        '　　同时，各地要依法依规控制棚改成本。严格依法依规办事，严禁大手大脚花钱，严禁违规支出，确保按合同约定及时偿还棚改贷款，努力实现市域范围内棚改资金总体平衡。\n' +
        '\n' +
        '\n' +
        '\n' +
        '　　此外，各地要进一步合理界定和把握棚改的范围和标准。坚持既尽力而为、又量力而行的原则，切实评估论证财政承受能力，不搞一刀切、不层层下指标、不盲目举债铺摊子，进一步合理界定和把握棚改的标准和范围，重点攻坚改造老城区内脏乱差的棚户区和国有工矿、林区、垦区棚户区。\n' +
        '\n' +
        '　　此外，住建部还表示，各地要因地制宜推进棚改货币化安置。商品住房库存不足、房价上涨压力较大的地方，应有针对性地及时调整棚改安置政策，更多采取新建棚改安置房的方式，商品住房库存量较大的地方，可以继续推进棚改货币化安置。',
        create_time: '2018-07-13'
      }
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
