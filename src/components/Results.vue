<template>
  <table class="pure-table">
    <tbody>
      <tr class="pure-table-odd">
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
        <td>Total Hydration</td>
        <td></td>
        <td>{{ totalHydration }}%</td>
      </tr>
      <tr>
        <td>Total Dough Weight</td>
        <td></td>
        <td>{{ totalDoughWeight }}g</td>
      </tr>
      <tr>
        <td>Percentage of Pre-Fermented Flour</td>
        <td></td>
        <td>{{ bakersPercentage(levainFlourGrams) }}%</td>
      </tr>
      <tr>
        <td>Levain</td>
        <td>{{ doughLevain }}g</td>
        <td>{{ bakersPercentage(doughLevain) }}%</td>
      </tr>
      <tr class="pure-table-odd">
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
        <td>Salt</td>
        <td>{{ doughSalt }}g</td>
        <td>{{ bakersPercentage(doughSalt) }}%</td>
      </tr>
    </tbody>
  </table>
  <!-- Total Flour = 1000g (100%)
Total Water = 700g (70%)
Salt = 20g (2%)
PPF (Pre-Ferment) = 12% Levain Hydration = 100% - 
With this method the hydration of the Levain is always specified. In this example there is 120g water and 120g flour in the levain.
Total Dough Weight = 1720g
Hydration = (Total Water 700g) + (Total Flour 1000g) 700/1000= 70% Hydration
NOTE - the dough minus the Levain contains 580g Water and 880g Flour. -->
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

<style scoped lang="scss"></style>
