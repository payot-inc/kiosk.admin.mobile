<template>
  <v-dialog
    v-model="visible"
    width="100%"
  >
    <div class="user-info-modal">
      <div class="modalHead">
        <v-btn outlined @click="open(false)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h4><span>010-8525-4561</span>님 정보</h4>
      </div>
      <div class="modalCont">        
        <dl class="user-total">
          <dt>종합정보</dt>
          <dd>
            <span>
              <label>총 결제금액</label>
              <strong>180,000원</strong>
            </span>
            <span>
              <label>총 보너스포인트</label>
              <strong>18,000P</strong>
            </span>
            <span>
              <label>총 사용포인트</label>
              <strong>67,000P</strong>
            </span>
          </dd>
        </dl>

        <dl class="history">
          <dt>이용내역</dt>
          <dd>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <th>이용일시</th>
                <th>충전</th>
                <th>차감</th>
                <th>적립</th>
              </tr>
              <tr v-for="item in 10" :key="item">
                <td>2020-04-20</td>
                <td>5,000</td>
                <td>0</td>
                <td>500</td>
              </tr>
            </table>
          </dd>
        </dl>
        
      </div>
    </div>
  </v-dialog>
</template>

<script>
import ModalMixin from '@/mixin/modal.js';

export default {
  mixins: [ModalMixin],
}
</script>

<style lang="scss" scoped>

.user-info-modal{
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  background:#fff;
  min-height:100%;


  .modalHead{
    display:flex;
    align-items: center;
    padding:15px;
    border-bottom:1px solid #e2e2e2;
    
  
    h4{
      font-weight:500;
      font-size:16px;
      span{color:#DB0F90;font-weight:600}
    }

    .v-btn{
      min-width:40px;
      width:40px;
      height:36px;
      margin-right:10px;
      border-color:#c2c2c2;

      .v-icon{font-size:18px;}
    }
    

  }

  .modalCont{
   padding:15px;

    dl{
      margin-bottom:20px;
      dt{margin-bottom:10px;}
    }

    dl.user-total{
      dd{
        display:flex;
        border:1px solid #e2e2e2;
        padding:10px 0;

        span{
          flex:1;
          text-align:center;
          display:block;
          border-right:1px solid #e2e2e2;
          label{font-size:11px;color:#888;display:block}
          strong{display:block;margin-top:5px;}
        }
        span:last-child{border-right:0px;}
      }
    }

    dl.history{
      table{width:100%;text-align:center;}
      th{
        padding:10px;
        border-bottom:1px solid #e2e2e2;
        font-weight:500;
        background:#f8f8f8;
      }
      td{
        padding:10px;
        border-bottom:1px solid #e2e2e2;
        font-size:11px;
      }
    }

  }

  
}
</style>