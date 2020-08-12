<script>

import {Bar} from 'vue-chartjs';

export default {
  props:[
    'chartData',
  ],

  extends:Bar,

  mounted () {
    this.renderChart(this.chartData.chartdata, this.chartData.options)
  }
}

</script>
