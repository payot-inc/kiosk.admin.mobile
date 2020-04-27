<template>
  <div class="contents">
    <SubHeader />

    <div class="shop-sales">
      
      <div class="date-control">
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
            type="month"
          />
        </v-dialog>
      </div>

      <div class="total-sales">
        <div class="row">
          <dl>
            <dt>최대매출</dt>
            <dd>
              <span class="price">140,000 원</span>
              <span class="date">2019-11-24</span>
            </dd>
          </dl>
          <dl>
            <dt>최소매출</dt>
            <dd>
              <span class="price">34,000 원</span>
              <span class="date">2019-11-24</span>
            </dd>
          </dl>
        </div>
        <dl class="total">
          <dt>월 매출합계</dt>
          <dd>1,518,000 원</dd>
        </dl>
      </div>

      

      <div class="calendar-m">
        <div class="weekName">
          <span v-for="item in weekName" :key="item">
            {{item}}
          </span>
        </div>
        <div class="week" v-for="(week, weekIndex) in printCalenderCell" :key="weekIndex">
            <dl v-for="day in week" :key="day">
            <dt class="date">{{day.printDay}}</dt>
            <dd class="cont">
              <span>
                <label>3건</label>
                <strong>158,000</strong>
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { chunk } from 'lodash';
import SubHeader from '@/components/subHeader.vue';

export default {
  components:{
    SubHeader
  },
  data(){
    return{
      weekName:[
        '일','월','화','수','목','금','토'    
      ],
      date: new Date().toISOString().substr(0, 7),
      menu: false,
    }
  },
  computed:{
    daysInMonth(){
      return moment(this.date).daysInMonth();   // 달의 총 일 수
    },
    startWeekDay(){
      return moment(this.date).startOf('month').weekday();
    },
    totalWeekCount(){
      return Math.ceil((this.startWeekDay + this.daysInMonth) / 7);
    },
     printCalenderCell() {
      return chunk(new Array(this.totalWeekCount * 7).fill(null).map((_, index) => {
        const printDays = moment(this.date).startOf('month').add('day', -this.startWeekDay).add('day', index)
        return {
          printDay:printDays.clone().date(),
          format:printDays.clone().format('YYYY-MM-DD'),
          isToday: moment().format('YYYY-MM-DD') === printDays.clone().format('YYYY-MM-DD'),
        }
      }), 7);
    }

  }
}
</script>

<style lang="scss" scoped>
.shop-sales{
  
  margin-top:10px;

  .date-control{
    text-align:center;
    margin-bottom:10px;
    .v-btn{
      width:100%;
      border-radius:0px;
    }
  }

  .total-sales{
    background:#fff;
    
    border-bottom:1px solid #e2e2e2;
    border-top:1px solid #e2e2e2;
    margin-bottom:10px;
    .row{
      display:flex;
      
      dl{
        flex:1;
        text-align:center;
        padding:10px;
        border-right:1px solid #e2e2e2;

        dt{margin-bottom:5px;}
        dd{
          span{display:block;}
          span.price{font-size:14px;font-weight:500;}
          span.date{font-size:11px;margin-top:5px;color:#888}
        }
      }

      dl:last-child{border-right:0px;}
    }

    dl.total{
      background:#fff;
      border-top:1px solid #e2e2e2;
      display:flex;
      justify-content: space-between;
      align-items: center;
      height:40px;
      padding:0 10px;
      dt{color:#888}
      dd{
        font-size:14px;font-weight:500;color:#DB0F90
      }
    }
   
  }

  .calendar-m{
    border-top:1px solid #292929;
    border-bottom:1px solid #e2e2e2;
    background:#fff;
    
    .weekName{
      display:flex;
      justify-content: space-around;
      align-items: center;
      height:50px;
      border-bottom:1px solid #e2e2e2;
      
      span{
        display:flex;
        justify-content: center;
        align-items: center;
        flex:1;
        height:100%;
        border-right:1px solid #e2e2e2;
      }

      span:first-child{
        color:#DB0F90
      }
      span:last-child{
        color:#0F83DB
      }
    }

    .week{
      display:flex;

      dl{
        flex:1;
        border-right:1px solid #e2e2e2;

        dt{
          background:#f2f2f2;
          text-align:center;
          font-size:11px;
          padding:2px;
        }
        dd{
          padding:5px 2px;

          span{
            label{
              display:block;
              font-size:10px;
              color:#888;
            }
            strong{
              display:block;
              margin-top:2px;
              font-weight:normal;
              font-size:8px;
            }
          }
        }
      }

      dl:last-child{
        border-right:0px;
        dt{background:#D9E8F3}
      }
      dl:first-child{
        dt{background:#FBDAE6}
      }

    }

  }
}

</style>