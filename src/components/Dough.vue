<template>
  <div class="posts">
    <h1 class="content-subhead">Dough</h1>
    <p>Composition of dough. In grams</p>
    <form class="pure-form pure-form-stacked">
      <fieldset>
        <label for="flour">Flour</label>
        <input
          v-model.number="flour"
          id="flour"
          type="number"
          placeholder="Amount of flour in dough"
        />

        <label for="water">Water</label>
        <input
          v-model.number="water"
          id="water"
          type="number"
          placeholder="Amount of water in dough"
        />

        <label for="levain">Levain</label>
        <input
          v-model.number="levain"
          id="levain"
          type="number"
          placeholder="Amount of levain in dough"
        />

        <label for="salt">Salt</label>
        <input
          v-model.number="salt"
          id="salt"
          type="number"
          placeholder="Amount of salt in dough"
        />
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "Dough",
  components: {},
  computed: {
    water: {
      get() {
        return this.$store.getters.doughWater;
      },
      set(value) {
        this.$store.commit("doughWater", value);
      },
    },
    flour: {
      get() {
        return this.$store.getters.doughFlour;
      },
      set(value) {
        this.$store.commit("doughFlour", value);
      },
    },
    salt: {
      get() {
        return this.$store.getters.doughSalt;
      },
      set(value) {
        this.$store.commit("doughSalt", value);
      },
    },
    levain: {
      get() {
        return this.$store.getters.doughLevain;
      },
      set(value) {
        this.$store.commit("doughLevain", value);
      },
    },
  },
};
</script>
