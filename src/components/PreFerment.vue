<template>
  <div class="posts">
    <h1 class="content-subhead">Levain</h1>
    <p>Amount fed to levain. In grams</p>
    <form class="pure-form pure-form-stacked">
      <fieldset>
        <label for="flour">Flour</label>
        <input
          v-model.number="flour"
          id="flour"
          type="number"
          placeholder="Amount of flour fed to levain"
        />

        <label for="water">Water</label>
        <input
          v-model.number="water"
          id="water"
          type="number"
          placeholder="Amount of water fed to levain"
        />
      </fieldset>
    </form>
    <table class="pure-table">
      <tbody>
        <tr class="pure-table-odd">
          <td>Levain Hydration</td>
          <td>{{ levainHydration }}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PreFerment",
  components: {},
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
  },
};
</script>
