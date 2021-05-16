<template>
  <div id="app">
    <div id="layout" class="pure-g">
      <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
          <h1 class="brand-title">A Sample Blog</h1>
          <h2 class="brand-tagline">Creating a blog layout using Pure</h2>

          <nav class="nav">
            <ul class="nav-list">
              <li class="nav-item">
                <a class="pure-button" href="http://purecss.io">Pure</a>
              </li>
              <li class="nav-item">
                <a class="pure-button" href="http://yuilibrary.com"
                  >YUI Library</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="content pure-u-1 pure-u-md-3-4">
        <div>
          <!-- A wrapper for all the blog posts -->
          <div class="posts">
            <h1 class="content-subhead">Pinned Post</h1>

            <!-- A single blog post -->
            <section class="post">
              <header class="post-header">
                <h2 class="post-title">Introducing Pure</h2>
              </header>

              <div class="post-description">
                <p>
                  Yesterday at CSSConf, we launched Pure – a new CSS library.
                  Phew! Here are the
                  <a href="https://speakerdeck.com/tilomitra/pure-bliss"
                    >slides from the presentation</a
                  >. Although it looks pretty minimalist, we’ve been working on
                  Pure for several months. After many iterations, we have
                  released Pure as a set of small, responsive, CSS modules that
                  you can use in every web project.
                </p>
              </div>
            </section>

            <router-view />
          </div>

          <div class="footer">
            <div class="pure-menu pure-menu-horizontal">
              <ul>
                <li class="pure-menu-item">
                  <a href="http://purecss.io/" class="pure-menu-link">About</a>
                </li>
                <li class="pure-menu-item">
                  <a
                    href="http://twitter.com/yuilibrary/"
                    class="pure-menu-link"
                    >Twitter</a
                  >
                </li>
                <li class="pure-menu-item">
                  <a
                    href="http://github.com/pure-css/pure/"
                    class="pure-menu-link"
                    >GitHub</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/*
 * -- PURE FORM STYLES --
 * Style the form inputs and labels
 */
.pure-form label {
  margin: 1em 0 0;
  font-weight: bold;
  font-size: 100%;
}

.pure-form input[type] {
  border: 2px solid #ddd;
  box-shadow: none;
  font-size: 100%;
  width: 100%;
  margin-bottom: 1em;
}

/*
 * -- PURE BUTTON STYLES --
 * I want my pure-button elements to look a little different
 */
.pure-button {
  background-color: #1f8dd6;
  color: white;
  padding: 0.5em 2em;
  border-radius: 5px;
}

a.pure-button-primary {
  background: white;
  color: #1f8dd6;
  border-radius: 5px;
  font-size: 120%;
}

/* BLOG
**/
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
  margin: 3em auto;
}

.sidebar {
  background: rgb(61, 79, 93);
  color: #fff;
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

.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-item {
  display: inline-block;
  *display: inline;
  zoom: 1;
}
.nav-item a {
  background: transparent;
  border: 2px solid rgb(176, 202, 219);
  color: #fff;
  margin-top: 1em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 85%;
}
.nav-item a:hover,
.nav-item a:focus {
  border: 2px solid rgb(61, 146, 201);
  text-decoration: none;
}

.content-subhead {
  text-transform: uppercase;
  color: #aaa;
  border-bottom: 1px solid #eee;
  padding: 0.4em 0;
  font-size: 80%;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.content {
  padding: 2em 1em 0;
}

.post {
  padding-bottom: 2em;
}
.post-title {
  font-size: 2em;
  color: #222;
  margin-bottom: 0.2em;
}
.post-description {
  font-family: Georgia, "Cambria", serif;
  color: #444;
  line-height: 1.8em;
}

.post-images {
  margin: 1em 0;
}

.footer {
  padding: 1em 0;
}
.footer a {
  color: #ccc;
  font-size: 80%;
}
.footer .pure-menu a:hover,
.footer .pure-menu a:focus {
  background: none;
}

@media (min-width: 48em) {
  .content {
    padding: 2em 3em 0;
    margin-left: 25%;
  }

  .header {
    margin: 80% 2em 0;
    text-align: right;
  }

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
  }

  .footer {
    text-align: center;
  }
}

/* Custom Bread Calc CSS */
.l-box {
  padding: 1em 1em 1em 0;
}
</style>
