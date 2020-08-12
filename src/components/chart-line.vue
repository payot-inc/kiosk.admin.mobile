<script>

import {Line} from 'vue-chartjs';

export default {
  props:[
    'chartData',
  ],

  extends:Line,

  mounted () {
    this.renderChart(this.chartData.chartdata, this.chartData.options)
  }
}

</script>
