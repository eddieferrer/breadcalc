<template>
  <section class="post">
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-2">
        <div class="l-box">
          <form class="pure-form pure-form-stacked">
            <fieldset>
              <label for="name">Your Name</label>
              <input id="name" type="text" placeholder="Your Name" />

              <label for="email">Your Email</label>
              <input id="email" type="email" placeholder="Your Email" />

              <label for="password">Your Password</label>
              <input
                id="password"
                type="password"
                placeholder="Your Password"
              />
            </fieldset>
          </form>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <div class="l-box">
          <PreFerment />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PreFerment from "@/components/PreFerment";
export default {
  name: "Home",
  components: { PreFerment },
};
</script>
