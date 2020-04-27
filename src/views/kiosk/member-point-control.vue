<template>
  <SearchTable :datas="datas" :listClass="['']">
    <template slot="item" slot-scope="{ item }">
      <div class="member-list" @click="$refs.pointControlModal.open(true)">
        <div class="list-head">
          <span class="user">{{item.user}}</span>
          <span class="btn">포인트 지급/차감</span>
        </div>
        <div class="list-body">
          <dl>
            <dt>남은 포인트</dt>
            <dd>{{item.userPoint}}</dd>
          </dl>
        </div>
      </div>
    </template>

    <template slot="footer">
      <PointControl ref="pointControlModal"/>
    </template>
  </SearchTable>
</template>

<script>
import SearchTable from '@/components/SearchableTableList.vue';
import PointControl from '@/components/modal/point-control.vue';

export default {
  components: { SearchTable, PointControl },
  data(){
    return {
      datas: [
        { 
          user:'010-8525-4561',
          userPoint: 2500,
        },
        { 
          user:'010-8525-4561',
          userPoint: 2500,
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
      align-items: center;
      margin-bottom:6px;

      dt{color:#888}
    }
    dl:last-child{margin-bottom:0px;}
  }
}

</style>