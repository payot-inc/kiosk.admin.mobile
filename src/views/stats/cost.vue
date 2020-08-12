<template>
  <div class="contents">
    <SubHeader />
    <div class="search">
      <dl class="dateSelector">
        <dt>기간선택</dt>
        <dd>
          <v-dialog
            ref="menu"
            v-model="modal"
            :close-on-content-click="false"
            :return-value.sync="dates"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <input
                type="text"
                v-model="date"
                label="Picker in menu"
                prepend-icon="event"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="date" no-title scrollable locale="ko" type="month">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </dd>
      </dl>
    </div>
    <div class="calc">
      <dl>
        <dt>항목이름</dt>
        <dd>
          <input tpye="text" placeholder="항목의 이름을 입력해주세요" v-model="newLabel"/>
        </dd>
      </dl>
      <dl class="price">
        <dt>금액입력</dt>
        <dd><input type="number" placeholder="금액을 입력해주세요" v-model="newPrice"/><span>원</span></dd>
      </dl>
      <v-btn text @click="costItemAdd">
        항목 추가하기
      </v-btn>
    </div>
    <div class="calcView">
      <h4>순이익 계산기</h4>

      <ul>
        <li class="first">
          <lable>선택기간매출</lable>
          <span>2,453,000 원</span>
        </li>
        <li v-for="item in costItems" :key="item.id">
          <label>{{ item.label }}</label>
          <span>{{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} 원</span>
          <v-btn text @click="costItems.splice(index, 1)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </li>
        <li class="noData" v-if="costItems.length === 0">
          등록된 항목이 없습니다
        </li>
      </ul>
      <div class="last">
        <label>합계(순이익)</label>
        <span>{{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} 원</span>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/subHeader.vue';

export default {
  components:{
    SubHeader
  },
  data() {
    return {
      costItems: [
        // {
        //   id:1,
        //   label: '수도세',
        //   price: 45000,
        //   state: false,
        // },
      ],
      newPrice:'',
      newLabel:'',
      nextId:0,

    };
  },
  watch: {
    
  },

  computed:{
    total: function() {
      // let total = 0;
      // for(let value of this.costItems) {
      //   total = total + Number(value.price);
      // }
      return this.costItems.reduce((acc, value) => acc + Number(value.price), 0);
    }    
  },

  methods: {
    costItemAdd(){
      this.costItems.push({
        id:this.nextId++,
        label:this.newLabel,
        price:this.newPrice,
      })
      this.newLabel = ''
      this.newPrice = ''     
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  dl.dateSelector {
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    dt {
      padding: 0 10px;
    }
    dd {
      flex: 1;
      input {
        width: 100%;
        height: 40px;
        text-align: right;
        padding: 0 10px;
      }
    }
  }
}
.calc {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  dl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    dt {
      width: 80px;
    }
    dd {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      input {
        border: 1px solid #e2e2e2;
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border-radius: 4px;
      }
      span {
        position: absolute;
        right: 25px;
      }
    }
  }
  dl.price {
    dd {
      input {
        padding-right: 25px;
      }
    }
  }
  .v-btn {
    width: 100%;
    background: #292929;
    color: #fff;
  }
}
.calcView {
  background: #fff;

  h4 {
    font-size: 14px;
    padding: 15px;
    padding-bottom: 0px;
  }

  ul {
    margin: 0px;
    padding: 15px;

    li.noData {
      align-items: center;
      justify-content: center;
    }
    li.first {
      justify-content: space-between;
      padding: 0 10px;
      background: #f8f8f8;
      span {
        font-weight: 500;
      }
    }

    li {
      display: flex;
      align-items: center;
      height: 50px;
      border: 1px solid #e2e2e2;
      padding: 0 10px;
      border-radius: 5px;
      margin-bottom: 10px;

      label {
        flex: 1;
      }
      .v-btn {
        min-width: 30px;
        width: 30px;
        height: 30px;
        background: #f2f2f2;
        margin-left: 15px;
        .v-icon {
          font-size: 18px;
        }
      }
    }
  }

  .last {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 15px;
    background: #fff3f3;

    label {
      border: 0px;
    }
    span {
      font-size: 16px;
      color: #ee2073;
    }
  }
}
</style>
