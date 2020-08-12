<template>
  <div class="contents">
    <SubHeader />
    <div class="stats">
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
              <v-date-picker v-model="date" scrollable locale="ko" type="month">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </dd>
        </dl>
      </div>
      <div class="total">
        <dl class="first">
          <dt>선택기간매출</dt>
          <dd>2,390,000 원</dd>
        </dl>
        <dl>
          <dt>세탁기 시간별 평균이용횟수</dt>
          <dd>5.1회</dd>
        </dl>
        <dl>
          <dt>건조기 시간별 평균이용횟수</dt>
          <dd>4.1회</dd>
        </dl>
        <dl>
          <dt>기타장비 시간별 평균이용횟수</dt>
          <dd>1.5회</dd>
        </dl>
      </div>

      <div class="total-2-cols">
        <v-row>
          <v-col cols="6">
            <dl>
              <dt>이용이 가장 적은 시간</dt>
              <dd>
                <label>04:00</label>
                <span>24,000원</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="6">
            <dl>
              <dt>이용이 가장 많은 시간</dt>
              <dd>
                <label>19:00</label>
                <span>134,000원</span>
              </dd>
            </dl>
          </v-col>
        </v-row>
      </div>

      <div class="chart">
        <div class="inner">
          <LineChart :chartData="chart" />
        </div>
      </div>
      <!-- chart -->

      <div class="dataTable">
        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>날짜</th>
            <th>전체</th>
            <th>세탁기</th>
            <th>건조기</th>
            <th>기타장비</th>
          </tr>
          <tr v-for="item in 24" :key="item">
            <td>{{ item }}:00</td>
            <td>
              <span class="number">(5)</span>
              <span class="price">34,500</span>
            </td>
            <td>
              <span class="number">(3)</span>
              <span class="price">12,000</span>
            </td>
            <td>
              <span class="number">(12)</span>
              <span class="price">12,000</span>
            </td>
            <td>
              <span class="number">(12)</span>
              <span class="price">3,500</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/chart-line.vue';
import SubHeader from '@/components/subHeader.vue';
export default {
  components: {
    SubHeader,
    LineChart,
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      modal: false,

      chart: {
        chartdata: {
          labels: [
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00',
          ],
          datasets: [
            {
              label: '전체',
              borderWidth: 1,
              borderColor: 'rgba(110,30,232,1)',
              backgroundColor: 'rgba(110,30,232,0)',
              data: [
                21,
                45,
                150,
                120,
                80,
                150,
                160,
                70,
                90,
                240,
                150,
                130,
                50,
                77,
                90,
                94,
                45,
                115,
                184,
                64,
                34,
                57,
              ],
              data2: [
                12000,
                13000,
                7500,
                3400,
                6000,
                0,
                0,
                1400,
                3500,
                23000,
                13000,
                7500,
                3500,
                0,
                12000,
                4500,
                18000,
                21000,
                5500,
                4500,
                12000,
                0,
              ],
            },
            {
              label: '세탁기',
              borderWidth: 1,
              borderColor: 'rgba(1,161,221,1)',
              backgroundColor: 'rgba(1,161,221,0)',
              data: [
                2,
                15,
                50,
                54,
                44,
                30,
                18,
                9,
                28,
                30,
                15,
                21,
                30,
                10,
                20,
                40,
                30,
                28,
                40,
                19,
                30,
                8,
              ],
              data2: [
                12000,
                13000,
                7500,
                3400,
                6000,
                0,
                0,
                1400,
                3500,
                23000,
                13000,
                7500,
                3500,
                0,
                12000,
                4500,
                18000,
                21000,
                5500,
                4500,
                12000,
                0,
              ],
            },
            {
              label: '건조기',
              borderWidth: 1,
              borderColor: 'rgba(210,10,10,1)',
              backgroundColor: 'rgba(210,10,10,0)',
              data: [
                3,
                12,
                54,
                64,
                54,
                32,
                12,
                8,
                32,
                24,
                11,
                16,
                27,
                5,
                10,
                15,
                32,
                24,
                32,
                18,
                24,
                6,
              ],
              data2: [
                7000,
                9000,
                1300,
                7500,
                3000,
                3500,
                5500,
                21000,
                7500,
                13000,
                18000,
                5500,
                3500,
                5500,
                7000,
                9500,
                12000,
                1000,
                0,
                0,
                0,
                0,
              ],
            },
            {
              label: '기타장비',
              borderWidth: 1,
              borderColor: 'rgba(255,119,0,1)',
              backgroundColor: 'rgba(255,119,0,0)',
              data: [8, 12, 5, 6, 10, 15, 1, 5, 3, 7, 12, 5, 6, 7, 12, 15, 11, 10, 9, 5, 1, 5],
              data2: [
                1000,
                0,
                0,
                5500,
                9000,
                5000,
                15000,
                12000,
                7500,
                8000,
                23000,
                9000,
                5500,
                3500,
                8000,
                9000,
                13000,
                34000,
                7500,
                0,
                4500,
                3500,
              ],
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                stacked: false,
              },
            ],
          },
        },
      },
    };
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
.total {
  margin: 10px 0;
  background: #fff;
  padding-bottom: 15px;

  dl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 0 15px;
    dt {
      color: #888;
    }
    dd {
      font-weight: 500;
    }
  }
  dl.first {
    color: #ee2073;
    height: 40px;
    background: #fff3f3;
    dt {
      color: #292929;
    }
  }
  dl:last-child {
    margin-bottom: 0px;
  }
}

.total-2-cols {
  margin-bottom: 10px;

  .row {
    padding: 0;
    margin: 0;
  }
  .col {
    padding: 0;
    margin: 0;
  }

  dl {
    background: #fff;
    padding: 15px;
    border-right: 1px solid #e2e2e2;
    dd {
      display: flex;
      flex-direction: column;
      margin-top: 10px;

      label {
        color: #888;
      }
      span {
        font-weight: 500;
        margin-top: 3px;
      }
    }
  }
  .col:last-child dl {
    border-right: 0px;
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

.dataTable {
  margin-top: 10px;
  background: #fff;
  table {
    border-top: 1px solid #e2e2e2;
    width: 100%;
    text-align: center;
    th {
      height: 40px;
      border-bottom: 1px solid #e2e2e2;
      font-size: 11px;
      font-weight: 500;
    }
    td {
      font-size: 11px;
      padding: 5px 0;
      border-right: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
      span {
        display: block;
      }
    }
    td:nth-child(2) {
      background: #fff3f3;
    }
    td:last-child {
      border-right: 0px;
    }
  }
}
</style>
