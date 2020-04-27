<template>
  <SearchTable :datas="datas" :listClass="['']">
    <template slot="header">
      <div class="tabHead">
        <v-row>
          <v-col cols="6" :class="tabSelect === 'tab1' ? 'active':''" >
            <input type="radio" v-model="tabSelect" value="tab1" checked>
            <label>포인트 이용내역</label>
          </v-col>
          <v-col cols="6" :class="tabSelect === 'tab2' ? 'active':''">
            <input type="radio" v-model="tabSelect" value="tab2">
            <label>포인트 충전내역</label>
          </v-col>
        </v-row>
      </div>
    </template>
    <template slot="item" slot-scope="{ item }">
      <div class="list-head">2020-04-20 12:34:31</div>
      <div class="list-body">
        <h4>{{item.user}}</h4>
        <dl>
          <dt>사용장비명</dt>
          <dd>{{item.eqName}}</dd>
        </dl>
        <dl>
          <dt>투입금액</dt>
          <dd>{{item.inputPrice}}</dd>
        </dl>
        <dl>
          <dt>결제금액</dt>
          <dd>{{item.orderPrice}}</dd>
        </dl>
        <dl>
          <dt>추가적립포인트</dt>
          <dd>{{item.bonusPoint}}</dd>
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
          user: '010-8225-4561',
          eqName:'1번세탁기', 
          inputPrice: 5500, 
          orderPrice: 2500,
          bonusPoint: 500 
        },
        { 
          user: '010-4424-4885',
          eqName:'2번세탁기', 
          inputPrice: 7500, 
          orderPrice: 1000,
          bonusPoint: 250 
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

  h4{margin-bottom:10px;font-size:14px;}

  dl{
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:6px;

    dt{color:#888}
  }
  dl:last-child{margin-bottom:0px;}
}

</style>