<template>
  <SearchTable :datas="datas" :listClass="['']" >
    <template slot="item" slot-scope="{ item }">
      <div class="member-list" @click="$refs.userModal.open(true)">
        <div class="list-head">
          <span class="user">{{item.user}}</span>
          <span class="btn">상세보기</span>
        </div>
        <div class="list-body">
          <dl>
            <dt>가입일</dt>
            <dd>{{item.joinDate}}</dd>
          </dl>
          <dl>
            <dt>최근 이용일</dt>
            <dd>{{item.lastUseDate}}</dd>
          </dl>
          <dl>
            <dt>남은 포인트</dt>
            <dd>{{item.userPoint}}</dd>
          </dl>
        </div>
      </div>
    </template>

    <template slot="footer">
      <user-info-modal ref="userModal"/>
    </template>
  </SearchTable>
</template>

<script>
import SearchTable from '@/components/SearchableTableList.vue';
import UserInfoModal from '@/components/modal/user-info.vue';

export default {
  components: { SearchTable, UserInfoModal },
  data(){
    return {
      datas: [
        { 
          user:'010-8525-4561',
          joinDate: '2020-01-21',
          lastUseDate:'2020-04-20', 
          userPoint: 2500,
        },
        { 
          user:'010-8525-4561',
          joinDate: '2020-01-21',
          lastUseDate:'2020-04-20', 
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