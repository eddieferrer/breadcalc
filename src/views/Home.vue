<template>
  <section class="post">
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-2">
        <div class="l-box">
          <Dough />
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <div class="l-box">
          <PreFerment />
        </div>
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1">
        <div class="l-box">
          <Results />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PreFerment from "@/components/PreFerment";
import Dough from "@/components/Dough";
import Results from "@/components/Results";

export default {
  name: "Home",
  components: { PreFerment, Dough, Results },
};
</script>
