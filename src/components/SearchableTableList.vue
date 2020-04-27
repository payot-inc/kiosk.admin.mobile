<template>
  <div class="contents">
    <SubHeader @onSearchButtonPress="$refs.search.open(true)" hasFinder/>
    <SearchModal ref="search" @onUpdateQuery="query = $event" />
    <slot name="header" />
    <div class="shop-order-list">
      <div class="search-text">
        <h4>검색 적용조건</h4>
        <dl>
          <dt>날짜</dt>
          <dd>{{ query.start }} ~ {{ query.end }}</dd>
        </dl>
        <dl>
          <dt>키워드</dt>
          <dd>{{ query.query }}</dd>
        </dl>
      </div>

      <div class="list-info">
        <div class="list-number">
          <span>목록</span>
          <strong>321</strong>
        </div>
        <div class="total-sales">
          <span>이번달 합계</span>
          <strong>234,000원</strong>
        </div>
      </div>

      <v-list :class="listClass">
        <v-list-item :class="listItemClass" v-for="item in datas" :key="item" link>
          <slot name="item" :item="item" />
          <!-- <div class="list-head">2020-04-20 12:34:31</div>
          <div class="list-body">
            <div class="text">
              <strong>1번 세탁기</strong>
              <span>19Kg</span>
            </div>
            <div class="price">
              5,500 원
            </div>
          </div> -->
        </v-list-item>
      </v-list>
      <div class="list-bottom" v-if="datas >= 10">
        <v-btn outlined class="more" @click="$emit('onMoreLoad')">
          <span>더 보기</span> 
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </div>
    </div>

    <slot name="footer" />
  </div>
</template>

<script>
import SubHeader from '@/components/subHeader.vue';
import SearchModal from '@/components/modal/search.vue';

export default {
  props: {
    listClass: Array,
    listItemClass: Array,
    datas: Array,
  },
  components: { SubHeader, SearchModal },
  data() {
    return {
      query: {
        query: '',
        start: new Date().toISOString().substr(0, 10),
        end: new Date().toISOString().substr(0, 10),
      },
    }
  },
  methods: {
    queryUpdate(query) {
      this.query = query;
      this.$emit('onQueryUpdate', query);
    }
  }
}
</script>

<style lang="scss" scoped>

.shop-order-list{

  .search-text{
    margin-top:10px;
    padding:10px;
    background:#fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-top:1px solid #e2e2e2;
    border-bottom:1px solid #e2e2e2;
    border-left:3px solid #DB0F90;
    margin-left:10px;

    h4{font-weight:500;font-size:14px;margin-bottom:10px;color:#DB0F90}

    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:8px;

      dt{color:#888}
    }
    dl:last-child{margin-bottom:0px;}
  
  }

  .list-info{
    display:flex;
    justify-content: space-between;
    align-items:center;
    background:#fff;
    margin-top:10px;
    padding:0 10px;
    min-height:40px;
    border-top:1px solid #494949;
    border-bottom:1px solid #e2e2e2;

    span{color:#888;margin-right:5px;}
    strong{font-weight:500;color:#494949}
  }

  .v-list{
    background:#f2f2f2;
    padding-top:5px;

      .v-list-item{
        background:#fff;
        border:1px solid #e2e2e2;
        border-left:0px;
        border-right:0px;
        display:flex;
        flex-direction: column;
        justify-items: center;
        align-items: flex-start;
        min-height:auto;
        padding:0 10px;
        margin-bottom:5px;
      }

      .v-list-item:last-child{
        margin-bottom:0px;
      }
    }

  .list-bottom{
    text-align:center;
    height:50px;

    .v-btn.more{
      width:100%;
      height:40px;
      border-radius:0px;
      border:0px;
      background:#fff;
      border-top:1px solid #e2e2e2;
      border-bottom:1px solid #e2e2e2;
    }

    .v-icon{
      color:#c2c2c2;
    }
  }
}
</style>