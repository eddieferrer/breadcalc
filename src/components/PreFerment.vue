<template>
  <form class="pure-form pure-form-stacked">
    Levain
    <fieldset>
      <label for="flour">Flour</label>
      <input
        v-model="flour"
        id="flour"
        type="text"
        placeholder="Amount of flour fed to levain"
      />

      <label for="water">Water</label>
      <input
        v-model="water"
        id="water"
        type="text"
        placeholder="Amount of flour fed to levain"
      />
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "PreFerment",
  components: {},
  computed: {
    water: {
      get() {
        return this.$store.getters.levainFlour;
      },
      set(value) {
        this.$store.commit("levainFlour", value);
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
  },
};
</script>
