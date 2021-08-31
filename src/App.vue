<template>
  <div id="app">
    <div id="layout" class="pure-g">
      <div class="sidebar pure-u-1 pure-u-md-1-3">
        <div class="header">
          <img class="logo" src="@/assets/breadcalc-logo.png" alt="" />
          <h1 class="brand-title">breadcalc</h1>
          <h2 class="brand-tagline">Another bread calculator</h2>
        </div>
      </div>

      <div class="content pure-u-1 pure-u-md-2-3">
        <router-view />

        <div class="footer">
          <p>
            This is another bread calculator. Based on this informative post:
            <a href="https://www.thefreshloaf.com/node/64600/levain-calculation"
              >Levain Calculation | The Fresh Loaf</a
            >
          </p>
          <p>
            Made by <a href="https://eferrer.info/">Eddie Ferrer</a>. The code
            is on
            <a href="https://github.com/eddieferrer/breadcalc/">GitHub</a>. It
            is graciously hosted by
            <a href="https://www.netlify.com/">Netlify</a>. This project is open
            source, please contribute.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$store.dispatch("initializeStore");
  },
};
</script>

<style lang="scss">
/* STYLES
**/
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background-color: #fbf6ee;
  color: #333;
}

a {
  text-decoration: none;
  color: rgb(61, 146, 201);
}
a:hover,
a:focus {
  text-decoration: underline;
}

h3 {
  font-weight: 100;
}

/* LAYOUT CSS */
#layout {
  padding: 0;
}

.header {
  text-align: center;
  top: auto;
  margin: 0em auto 3em;
}

.sidebar {
  background: rgb(61, 79, 93);
  color: #fff;
  .logo {
    width: 150px;
  }
}

.brand-title,
.brand-tagline {
  margin: 0;
}
.brand-title {
  text-transform: uppercase;
}
.brand-tagline {
  font-weight: 300;
  color: rgb(176, 202, 219);
}

.content-subhead {
  text-transform: uppercase;
  color: #666;
  border-bottom: 1px solid #eee;
  padding: 0.4em 0;
  font-size: 90%;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.content {
  padding: 2em 1em 0;
}

.post {
  padding-bottom: 2em;
}

.footer {
  padding: 0 0 1em;
  color: #666;
}

@media (min-width: 48em) {
  .content {
    padding: 2em 2.5em 0;
    margin-left: 33.33%;
  }

  .header {
    margin: 80% 2em 0;
    text-align: right;
  }

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    .logo {
      max-width: 70%;
    }
  }

  .footer {
    text-align: center;
  }
}

/*
 * -- PURE FORM STYLES --
 * Style the form inputs and labels
 */
.pure-form.pure-form-stacked label {
  margin: 1em 0 0;
  font-weight: bold;
  font-size: 100%;
}
.pure-form.pure-form-stacked label:first-child {
  margin-top: 0;
}
.pure-form.pure-form-stacked input[type] {
  border: 2px solid #ddd;
  box-shadow: none;
  font-size: 100%;
  width: 100%;
  padding: 0.65rem;
}

/* Custom Bread Calc CSS */
.l-box {
  padding: 1em 1em 1em 0;
}
table {
  background-color: white;
}
</style>
