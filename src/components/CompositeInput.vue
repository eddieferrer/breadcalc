<!-- CompositeInput.vue -->
<template>
  <div>
    <div
      class="input-wrapper"
      v-for="(inputRow, index) in inputRows"
      :key="index"
    >
      <input
        class="flour--type"
        id="flour"
        type="text"
        placeholder="Flour Type"
        v-model="inputRow.type"
      />
      <input
        class="flour--amount"
        id="flour-amount"
        type="number"
        placeholder="Amount"
        v-model.number="inputRow.amount"
      />
      <button
        type="button"
        class="button-small pure-button"
        @click="deleteRow(index)"
        :disabled="inputRows.length == 1"
      >
        Delete
      </button>
    </div>
    <button
      type="button"
      class="button-small pure-button"
      @click="addRow()"
      :disabled="inputRows.length >= 20"
    >
      Add Row
    </button>
  </div>
</template>

<script>
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  name: "CompositeInput",
  props: {
    initialValue: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      error: "",
      inputRows: [
        {
          id: 1,
          type: "White",
          amount: this.initialValue,
        },
      ],
    };
  },
  watch: {
    inputRows: {
      deep: true,
      handler() {
        this.$emit("input", this.totalAmount);
        this.$store.commit("levainComposite", this.inputRows);
      },
    },
  },
  methods: {
    deleteRow(index) {
      this.inputRows.splice(index, 1);
    },
    addRow() {
      let randomId = getRandomInt(20);
      let allInputRowIds = this.inputRows.map((row) => row.id);

      while (allInputRowIds.includes(randomId)) {
        randomId = getRandomInt(20);
      }

      this.inputRows.push({
        id: randomId,
        type: "White",
        amount: 50,
      });
    },
  },
  computed: {
    totalAmount() {
      let totalArray = this.inputRows.map((row) => row.amount);
      return totalArray.reduce((a, b) => a + b, 0);
    },
  },
};
</script>

<style scoped lang="scss">
.input-wrapper {
  @media only screen and (min-width: 768px) and (max-width: 1040px) {
    flex-wrap: wrap;
  }
  margin-left: 1rem;
  display: flex;
  gap: 0.5rem;
  input[type].flour--type {
    flex-grow: 1;
    min-width: 5rem;
  }
  input[type].flour--amount {
    width: 5rem;
  }
  button {
    width: 5rem;
    padding: 0rem 0.25rem;
  }
}
</style>
