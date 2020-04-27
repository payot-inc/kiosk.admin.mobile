<template>
  <SearchTable :datas="datas" :listClass="['']">
    <template slot="item" slot-scope="{ item }">
      <div class="list-head">2020-04-20 12:34:31</div>
      <div class="list-body">
        <div class="text">
          <strong>{{ item.name }}</strong>
          <span>{{ item.size }}</span>
        </div>
        <div class="price">
          {{ item.price }} 원
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
      datas: [
        { name: '1번 세탁기', size: '19Kg', price: 5500 },
        { name: '1번 세탁기', size: '19Kg', price: 5500 },
        { name: '1번 세탁기', size: '19Kg', price: 5500 },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

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
  display:flex;
  justify-content: space-between;
  align-items: flex-end;
  width:100%;
  padding:10px 0;

  .text{
    strong{display:block; font-size:14px;}
    span{display:block;font-size:12px;color:#888}
  }
  .price{
    font-size:14px;
    font-weight:500;
    color:#DB0F90;
  }
}

</style>