<template>
  <div class="posts">
    <h3 class="content-subhead">Levain</h3>
    <p>Amount fed to levain. In grams</p>
    <form class="pure-form pure-form-stacked">
      <fieldset>
        <label for="flour">Flour</label>
        <input
          v-model.number="flour"
          id="flour"
          type="number"
          placeholder="Amount of flour fed to levain"
          :disabled="showAdvanced"
        />
        <button
          type="button"
          class="button-small pure-button"
          @click="toggleAdvanced()"
        >
          Advanced {{ showAdvanced ? "-" : "+" }}
        </button>
        <div v-if="showAdvanced" class="advanced-section">
          <composite-input @input="flour = $event" :initial-value="flour" />
        </div>
        <label for="water">Water</label>
        <input
          v-model.number="water"
          id="water"
          type="number"
          placeholder="Amount of water fed to levain"
        />
      </fieldset>
    </form>
    <h3 class="content-subhead">Levain Composition</h3>
    <table class="pure-table">
      <tbody>
        <tr class="pure-table-even">
          <td>Total Flour</td>
          <td>{{ flour }}g</td>
          <td>{{ bakersPercentage(flour) }}%</td>
        </tr>
        <tr
          v-for="(row, index) in levainComposite"
          class="pure-table-even"
          :key="index"
        >
          <td>{{ row.type }}</td>
          <td>{{ row.amount }}g</td>
          <td>{{ bakersPercentage(row.amount) }}%</td>
        </tr>
        <tr class="pure-table-even">
          <td>Water</td>
          <td>{{ water }}g</td>
          <td></td>
        </tr>
        <tr class="pure-table-odd">
          <td>Levain Hydration</td>
          <td>{{ levainHydration }}%</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CompositeInput from "@/components/CompositeInput";
import { calcPercentage } from "@/utils/breadMath";

export default {
  name: "PreFerment",
  data() {
    return {
      showAdvanced: false,
      model: 100,
    };
  },
  components: {
    CompositeInput,
  },
  computed: {
    water: {
      get() {
        return this.$store.getters.levainWater;
      },
      set(value) {
        this.$store.commit("levainWater", value);
      },
    },
    flour: {
      get() {
        return this.$store.getters.levainFlour;
      },
      set(value) {
        this.$store.commit("levainFlour", value);
      },
    },
    levainHydration() {
      return this.$store.getters.levainHydration;
    },
    levainComposite() {
      return this.$store.getters.levainComposite;
    },
  },
  methods: {
    toggleAdvanced() {
      this.showAdvanced = !this.showAdvanced;
      this.resetComposite();
    },
    resetComposite() {
      this.$store.commit("levainComposite", []);
    },
    bakersPercentage(target) {
      return calcPercentage({
        total: this.flour,
        target,
      });
    },
  },
};
</script>
<style scoped lang="scss">
.advanced-section {
  margin-top: 12px;
}
</style>
