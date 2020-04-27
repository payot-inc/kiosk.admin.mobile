<template>
  <SearchTable :datas="datas" :listClass="['']">
    <template slot="header">
      <div class="tabHead">
        <v-row>
          <v-col cols="6" :class="tabSelect === 'tab1' ? 'active':''" >
            <input type="radio" v-model="tabSelect" value="tab1" checked>
            <label>포인트 지급내역</label>
          </v-col>
          <v-col cols="6" :class="tabSelect === 'tab2' ? 'active':''">
            <input type="radio" v-model="tabSelect" value="tab2">
            <label>포인트 차감내역</label>
          </v-col>
        </v-row>
      </div>
    </template>
    <template slot="item" slot-scope="{ item }">
      <div class="member-list">
        <div class="list-head">
          <label>포인트지급</label>
          <span class="user">{{item.user}}</span>
        </div>
        <div class="list-body">
          <dl>
            <dt>날짜</dt>
            <dd>{{item.date}}</dd>
          </dl>
          <dl>
            <dt>금액</dt>
            <dd>{{item.price}}</dd>
          </dl>
          <dl>
            <dt>사유</dt>
            <dd>{{item.text}}</dd>
          </dl>
        </div>
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
          user:'010-8525-4561',
          date: '2020-04-19',
          price: 5000,
          text:'오작동으로 인한 지급 오작동으로 인한 지급으로 합니다 이상 아무말도 하지마세요'
        },
      ]
    }
  },
  mounted() {
    console.log(this.$refs.userModal);
    // this.$refs.userInfoModal.open(true);
  },
  methods: {
    pressButton() {
      console.log(this.$refs.userModal);
    }
  }
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


.member-list{
  width:100%;

  .list-head{
    width:100%;
    height:40px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#888;
    font-size:11px;
    border-bottom:1px dashed #e2e2e2;

    span.user{font-size:14px;color:#494949;font-weight:500;}
    span.btn{color:#DB0F90}
  }

  .list-body{
    width:100%;
    padding:15px 0;

    h4{margin-bottom:10px;font-size:14px;}

    dl{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom:6px;

      dt{color:#888;width:60px;}
      dd{
        flex:1;
        word-break: keep-all;
        text-align:right;
      }
    }
    dl:last-child{margin-bottom:0px;}
  }
}

</style>