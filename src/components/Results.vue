<template>
  <div class="posts">
    <h1 class="content-subhead">Results</h1>
    <table class="pure-table">
      <tbody>
        <tr>
          <td>Total Flour</td>
          <td>{{ totalFlour }}g</td>
          <td>{{ bakersPercentage(totalFlour) }}%</td>
        </tr>
        <tr>
          <td>Total Water</td>
          <td>{{ totalWater }}g</td>
          <td>{{ bakersPercentage(totalWater) }}%</td>
        </tr>

        <tr>
          <td>Pre-Fermented Flour</td>
          <td>{{ levainFlourGrams }}g</td>
          <td>{{ bakersPercentage(levainFlourGrams) }}%</td>
        </tr>
        <tr>
          <td>Salt</td>
          <td>{{ doughSalt }}g</td>
          <td>{{ bakersPercentage(doughSalt) }}%</td>
        </tr>
        <tr>
          <td>Levain</td>
          <td>{{ doughLevain }}g</td>
          <td>{{ bakersPercentage(doughLevain) }}%</td>
        </tr>
        <tr>
          <td>Water From Levain</td>
          <td>{{ levainWaterGrams }}g</td>
          <td>{{ bakersPercentage(levainWaterGrams) }}%</td>
        </tr>
        <tr>
          <td>Flour From Levain</td>
          <td>{{ levainFlourGrams }}g</td>
          <td>{{ bakersPercentage(levainFlourGrams) }}%</td>
        </tr>

        <tr class="pure-table-odd">
          <td>Total Hydration</td>
          <td></td>
          <td>{{ totalHydration }}%</td>
        </tr>
        <tr class="pure-table-odd">
          <td>Total Dough Weight</td>
          <td>{{ totalDoughWeight }}g</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { calcPercentage, calcHydration } from "@/utils/breadMath";

import { mapGetters } from "vuex";

export default {
  name: "Results",
  components: {},
  computed: {
    ...mapGetters([
      "levainFlourGrams",
      "levainWaterGrams",
      "totalFlour",
      "totalWater",
      "doughSalt",
      "doughLevain",
    ]),
    totalHydration() {
      return calcHydration({
        flour: this.totalFlour,
        water: this.totalWater,
      });
    },
    totalDoughWeight() {
      return this.totalFlour + this.totalWater + this.doughSalt;
    },
  },
  methods: {
    bakersPercentage(target) {
      return calcPercentage({
        total: this.totalFlour,
        target,
      });
    },
  },
};
</script>

<style scoped lang="scss">
table {
  max-width: 28rem;
  width: 100%;
}
</style>
