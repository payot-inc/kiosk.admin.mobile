<template>
  <div class="contents">
    <SubHeader />
    <div class="stats">
      <div class="search">
        <dl class="dateSelector">
          <dt>날짜선택</dt>
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
                  v-model="dateRangeText"
                  label="Picker in menu"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="dates" scrollable range locale="ko">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </dd>
        </dl>
      </div>
			<div class="total">
				<!-- <dl class="first">
					<dt>전체매출</dt>
					<dd>2,390,000 원</dd>
				</dl> -->
				<dl class="first">
					<dt>일평균매출</dt>
					<dd>184,500원</dd>
				</dl>
				<dl>
					<dt>세탁기 일평균매출</dt>
					<dd>98,500원</dd>
				</dl>
				<dl>
					<dt>건조기 일평균매출</dt>
					<dd>86,000원</dd>
				</dl> 
				<dl>
					<dt>기타장비 일평균매출</dt>
					<dd>14,000원</dd>
				</dl>
			</div>

			<div class="total-2-cols">
				<v-row>
					<v-col cols="6">
						<dl>
							<dt>최소 매출일</dt>
							<dd>
								<label>2020-07-24</label>
								<span>24,000원</span>
							</dd>
						</dl>
					</v-col>
					<v-col cols="6">
						<dl>
							<dt>최대 매출일</dt>
							<dd>
								<label>2020-07-09</label>
								<span>134,000원</span>
							</dd>
						</dl>
					</v-col>
				</v-row>
			</div>

      <div class="chart">
        <div class="inner">
          <BarChart :chartData="chart" />
        </div>
      </div> <!-- chart -->

      <div class="dataList">
        <dl class="tableTotal">
          <dt>2020-07-01 ~ 2020-07-15 합계</dt>
          <dd>
            <span class="first">
              <label>전체(494건)</label>
              <strong>2,244,000</strong>
            </span>
            <span>
              <label>세탁기(214건)</label>
              <strong>1,104,000</strong>
            </span>
            <span>
              <label>건조기(205건)</label>
              <strong>985,000</strong>
            </span>
            <span>
              <label>기타장비(86건)</label>
              <strong>245,000</strong>
            </span>
          </dd>
        </dl>
        <dl v-for="item in 7" :key="item.index">
          <dt>2020-07-0{{item}}</dt>
          <dd>
            <span class="first">
              <label>종합(38건)</label>
              <strong>144,000</strong>
            </span>
            <span>
              <label>세탁기(18건)</label>
              <strong>84,000</strong>
            </span>
            <span>
              <label>건조기(17건)</label>
              <strong>65,500</strong>
            </span>
            <span>
              <label>기타장비(3건)</label>
              <strong>12,000</strong>
            </span>
          </dd>
        </dl>
        
      </div>

			<!-- <div class="dataTable">
				<table cellspacing="0" cellpadding="0">
					<tr>
						<th>날짜</th>
						<th>전체</th>
						<th>세탁기</th>
						<th>건조기</th>
						<th>기타장비</th>
					</tr>
					<tr v-for="item in 31" :key="item">
						<td>{{item}}일</td>
						<td>
							<span class="number">(12)</span>
							<span class="price">1,435,000</span>
						</td>
						<td>
							<span class="number">(12)</span>
							<span class="price">691,000</span>
						</td>
						<td>
							<span class="number">(12)</span>
							<span class="price">546,000</span>
						</td>
						<td>
							<span class="number">(12)</span>
							<span class="price">245,000</span>
						</td>
					</tr>
				</table>
			</div> -->
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/chart-bar.vue';
import SubHeader from '@/components/subHeader.vue';
export default {
  components: {
    SubHeader,
    BarChart,
  },
  data() {
    return {
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      dates: [this.date1, this.date2],
      modal: false,

      chart: {
        chartdata: {
          labels: [
            '1일',
            '2일',
            '3일',
            '5일',
            '6일',
            '7일',
            '8일',
            '9일',
            '10일',
          ],
          datasets: [
            {
              label: '세탁기',
              backgroundColor: 'rgba(0,150,255,1)',
              barPercentage: 0.3,
              data: [3, 8, 4, 16, 12, 15, 14, 12, 9],
            },
            {
              label: '건조기',
              backgroundColor: 'rgba(255,0,110,1)',
              barPercentage: 0.3,
              data: [2, 7, 4, 16, 12, 15, 11, 12, 8],
            },
            {
              label: '기타장비',
              backgroundColor: 'rgba(131,56,236,1)',
              barPercentage: 0.3,
              data: [0, 2, 2, 4, 0, 38, 8, 2, 1],
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend:{
            align:'start',
          },
          scales: {
            yAxes: [
              {
                stacked: true,
              },
            ],
            xAxes: [
              {
                stacked: true,
              },
            ],
          },
        },
      },
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ');
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
.total{
	margin:10px 0;
	background: #fff;
	padding-bottom:15px;

	dl{
		display:flex;
		justify-content: space-between;
		align-items: center;
		height:30px;
		padding:0 15px;
		dt{color:#888}
		dd{
			font-weight:500;
		}
	}
	dl.first{
		color:#ee2073;
		height:40px;
		background: #fff3f3;
		dt{color:#292929;}
	}
	dl:last-child{margin-bottom:0px;}
}

.total-2-cols{
	margin-bottom:10px;

	.row{padding:0;margin:0}
	.col{padding:0;margin:0}

	dl{
		background:#fff;
		padding:15px;
		border-right:1px solid #e2e2e2;
		dd{
			display:flex;
			flex-direction: column;
			margin-top:10px;

			label{color:#888;}
			span{font-weight:500;margin-top:3px;}
		}
	}
	.col:last-child dl{
		border-right:0px;
	}
}

.chart {
  overflow-y: scroll;
  background: #fff;
  padding: 20px;
  .inner {
    width: 200%;
  }
}

.dataList{
  margin-top:10px;

  dl{
    background:#fff;
    padding:15px;
    margin-bottom:10px;

    dt{
      font-size:12px;
    }
    dd{
      margin-top:10px;
      span.first{

        margin-left:0px;
        label{font-size:13px;color:#292929;}
        strong{font-size:13px;font-weight:500;}
        label::before{
          display:none;
        }
      }
      span{
        margin-left:5px;
        display:flex;
        align-items: center;
        justify-content:space-between;
        margin-bottom:5px;
        label{
          color:#888;
          font-size:11px;
        }
        label::before{
          content:'ㄴ';
          margin-right:5px;
          color:#c2c2c2;
        }
        strong{
          font-weight:400;
          font-size:11px;
        }
      }
    }
  }

  dl.tableTotal{
    background:#fff3f3;
    dt{color:#ee2073}
  }

}

.dataTable{
	margin-top:10px;
	background: #fff;
	table{
		border-top:1px solid #e2e2e2;
		width:100%;
		text-align:center;
		th{
			height:40px;
			border-bottom:1px solid #e2e2e2;
			font-size:11px;
			font-weight:500;
		}
		td{
			font-size:11px;
			padding:5px 0;
			border-right:1px solid #e2e2e2;
			border-bottom:1px solid #e2e2e2;
			span{display:block;}
		}
		td:nth-child(2){background:#fff3f3}
		td:last-child{border-right:0px;}
	}
}
</style>
