<template>
  <div class="home" id="container">
    <dl class="today-sales">
      <dt>
        <v-dialog
            v-model="menu"
            :nudge-right="0"
            transition="scale-transition"
            background-color="#fff"
            offset-y
          >
          <template v-slot:activator="{ on }">
            <v-btn
              v-model="date"
              v-on="on"
              text
            >
              {{date}}
            </v-btn>
          </template>
          <v-date-picker
            v-model="date"
            @input="menu = false" 
            locale="ko-kr" 
          />
        </v-dialog>
      </dt>
      <dd>
        <div class="category-total">
          <v-btn outlined v-for="item in total" :key="item">
            <div class="cate-item">
              <span class="name">{{item.name}}</span>
              <span class="number">{{item.number + '건'}}</span>
              <span class="price">{{item.price}}</span>
            </div>
          </v-btn>
        </div>
        <div class="total">
          <span class="today">
            <label>금일 매출합계</label>
            <strong>348,500원</strong>
          </span>
          <span class="month">
            <label>이번달 매출합계</label>
            <strong>1,258,000원</strong>
          </span>
        </div> <!-- sales-total -->
      </dd> 
    </dl> <!--today-sales -->

    <dl class="quick-nav">
      <dt>
        <h4>빠른메뉴 이동</h4>
      </dt>
      <dd>
        <v-row>
          <v-col cols="6" v-for="item in quickBtns" :key="item">
            <v-btn outlined>
              <v-icon>{{item.icon}}</v-icon>
              <span>{{item.name}}</span>
            </v-btn>
          </v-col>
        </v-row>
      </dd>
    </dl>

    <dl class="week-sales">
      <dt>
        <h4>최근매출(7일)</h4>
      </dt>
      <dd>
        <div class="sales-item" v-for="item in 7" :key="item">
          <span>
            <label>2019-04.2{{item}} (수요일)</label>
            <strong>840,000원</strong>
          </span>
          <span>
            <label>장비현금</label>
            <strong>840,000원</strong>
          </span>
          <span>
            <label>키오스크(현금)</label>
            <strong>840,000원</strong>
          </span>
          <span>
            <label>키오스크(카드)</label>
            <strong>840,000원</strong>
          </span>
          <span>
            <label>포인플러스</label>
            <strong>840,000원</strong>
          </span>
          <span>
            <label>데일리세탁</label>
            <strong>840,000원</strong>
          </span>
        </div>
      </dd>
    </dl>

  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  data(){
    return{
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      total:[
        {
          name:'장비현금',
          number:10,
          price:135500
        },
        {
          name:'키오스크',
          number:5,
          price:245500
        },
        {
          name:'포인플러스',
          number:4,
          price:15000
        },
        {
          name:'데일리세탁',
          number:9,
          price:98500
        },
      ],
      quickBtns:[
        {
          icon:'mdi-wifi',
          name:'장비 원격투입',
        },
        {
          icon:'mdi-cog',
          name:'키오스크 제어',
        },
        {
          icon:'mdi-account-settings',
          name:'회원포인트 지급/차감',
        },
        {
          icon:'mdi-account-details',
          name:'회원 이용내역',
        },
      ]
    }
  },

};
</script>

<style lang="scss" scoped>
.home{
  background:#f2f2f2;

  dl{
    margin-bottom:15px;
    border-top:1px solid #e2e2e2;
    background:#fff;

    dt{
      display:flex;
      align-items: center;
      height:40px;
      padding:0 10px;
      border-bottom:1px solid #e2e2e2;

      h4{font-weight:400;font-size:14px;}
    }
  }

  .today-sales{
    border-top:0px;
    border-bottom:1px solid #e2e2e2;
    background:#fff;

    dt{
      padding:0px;

      .v-btn{
        width:100%;
        margin:0px;
        padding:0px;
        border-radius:0px;
        height:40px;
        font-size:15px;
        font-weight:500;
        background:#DB0F90;
        color:#fff;
      }
    }

    dd{
      .category-total{
        display:flex;

        .v-btn{
          border:0px;
          flex:1;
          height:auto;
          padding:10px 0;
          border-radius:0px;
          border-right:1px solid #e2e2e2;
        }

        .v-btn:last-child{border-right:0px;}

        .cate-item{
          text-align:center;
          font-weight:400;

          span{display:block;}
          span.name{font-size:11px;color:#888}
          span.number{
            font-size:16px;
            font-weight:600;
            font-family:'SCDream';
            margin:5px 0;
            color:#DB0F90
          }
          span.price{
            font-size:12px;
          }
        }
      }
      .total{
        border-top:1px solid #e2e2e2;
        span{
          display:flex;
          justify-content: space-between;
          align-items: center;
          padding:0 10px;
          height:40px;

          label{color:#888}
          strong{font-size:14px;font-weight:500}
        }
        span.month{
          border-top:1px dashed #e2e2e2;
          color:#DB0F90;
          label{color:#888;}
        }
      }
    }
  } // today-sales

  .quick-nav{
    dd{
      .row{padding:0px;margin:0px;background:#f2f2f2;}
      .col{padding:0px;margin:0px;border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2;}

      .v-btn{
        width:100%;
        border:0px;
        border-right:1px solid #e2e2e2;
        border-radius:0px;
        background:#fff;
        height:45px;

        .v-icon{
          margin-right:10px;
          font-size:18px;
          color:#aaa;
        }
        span{
          font-size:12px;
          font-weight:400;
        }
      }

      .v-btn:last-child{border-right:0px;}
    }
  } // quick-nav

  .week-sales{
    .sales-item{
      border-bottom:1px solid #e2e2e2;
      padding:10px;

      span{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:8px;
        font-size:11px;
        
        label{color:#888;}
        strong{font-weight:normal}
      }
      
      span:first-child{
        padding-bottom:8px;
        border-bottom:1px dashed #e2e2e2;
        font-size:12px;

        label{color:#494949;}
        strong{color:#DB0F90}
      }
    }
  }

}
  

</style>