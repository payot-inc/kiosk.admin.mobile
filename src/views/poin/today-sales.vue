<template>
  <SearchTable :datas="datas" :listClass="['']">
    <template slot="item" slot-scope="{ item }">
      <div class="list-head">
        <span>2020-04-20 12:34:31</span>
      </div>
      <div class="list-body">
        <dl>
          <dt>사용장비</dt>
          <dd>{{item.eqName}}</dd>
        </dl>
        <dl>
          <dt>투입금액</dt>
          <dd>{{item.price}}</dd>
        </dl>
      </div>
    </template>
  </SearchTable>
</template>

<script>
import SearchTable from '@/components/SearchableTableList.vue';

export default {
  components: { SearchTable },
  data(){
    return {
      tabSelect:'tab1',
      datas: [
        { 
          price:1345000,
          eqName:'1번 세탁기',
        },
        { 
          price:1345000,
          eqName:'2번 세탁기',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

.tabHead{
  display:flex;
  align-items: center;
  background:#fff;
  border-bottom:1px solid #e2e2e2;
  
  .row{padding:0;margin:0}
  .col{
    padding:0;
    margin:0;
    background:#fff;
    height:40px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;

    input[type=radio]{width:100%;height:40px;opacity: 0;position: absolute;left:0px;top:0px;;}
    label{font-size:14px;}
  }

  .col.active{
    color:#fff;
    background:#DB0F90;
  }

}

.list-head{
  width:100%;
  height:32px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color:#888;
  font-size:11px;
  border-bottom:1px dashed #e2e2e2;
}

.list-body{
  width:100%;
  padding:15px 0;

  dl{
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:6px;

    dt{
      color:#888;
      width:80px;
    }
    dd{flex:1;text-align:right;}
  }
  dl:last-child{margin-bottom:0px;}
}

</style>