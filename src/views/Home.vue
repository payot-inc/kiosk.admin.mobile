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

    <dl class="orderTabs">
      <dt>
        <h4>실시간 매출정보</h4>
      </dt>
      <dd>

        <v-tabs
          v-model="tab"
          background-color="#fff"
          height="40px"
          show-arrows
        >
          <v-tab v-for="item in tabItems" :key="item.tab" class="tab-head">
            {{item.tabName}}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="tab-contents">
          <v-tab-item
            v-for="item in tabItems"
            :key="item.tab"
          >
            <div class="order-item">
             <div class="item-head">2020-04-20 12:34:31</div>
              <div class="item-body">
                <div class="text">
                  <strong>1번세탁기</strong>
                  <span>(80kg)</span>
                </div>
                <div class="price">
                  5,000 원
                </div>
              </div>
            </div>

            <div class="order-item">
             <div class="item-head">2020-04-20 12:34:31</div>
              <div class="item-body">
                <div class="text">
                  <strong>1번세탁기</strong>
                  <span>(80kg)</span>
                </div>
                <div class="price">
                  5,000 원
                </div>
              </div>
            </div>

            <div class="order-item">
             <div class="item-head">2020-04-20 12:34:31</div>
              <div class="item-body">
                <div class="text">
                  <strong>1번세탁기</strong>
                  <span>(80kg)</span>
                </div>
                <div class="price">
                  5,000 원
                </div>
              </div>
            </div>

            <div class="order-item">
             <div class="item-head">2020-04-20 12:34:31</div>
              <div class="item-body">
                <div class="text">
                  <strong>1번세탁기</strong>
                  <span>(80kg)</span>
                </div>
                <div class="price">
                  5,000 원
                </div>
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>

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
      showArrow:false,
      tab:null,
      tabItems:[
        {tab:0, tabName:'장비현금',},
        {tab:1, tabName:'키오스크',},
        {tab:2, tabName:'포인플러스',},
        {tab:3, tabName:'데일리세탁',},
      ],
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

  dl:last-child{
    margin-bottom:0px;
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

  .orderTabs{
    dd{ 
      background:#f2f2f2;

      .v-item-group .v-slide-group__prev{
        display:none;
      }

      .tab-contents{background:#f2f2f2;padding-top:5px;}
      .order-item:last-child{margin-bottom:0px;}
      .order-item{
        padding:0 10px;
        border-bottom:1px solid #e2e2e2;
        border-top:1px solid #e2e2e2;
        margin-bottom:5px;
        background:#fff;
                
        .item-head{
          width:100%;
          height:32px;
          display:flex;
          justify-content: space-between;
          align-items: center;
          color:#888;
          font-size:11px;
          border-bottom:1px dashed #e2e2e2;
        }

        .item-body{
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

      }
    }
  }
}




</style>