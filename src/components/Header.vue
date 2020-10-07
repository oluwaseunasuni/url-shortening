<template>
  <div>
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div>
            <img
              src="../assets/images/logo.svg"
              alt="shortly logo"
              srcset=""
              class="navbar-item">
          </div>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Features
            </a>
            <a class="navbar-item">
              Pricing
            </a>
            <a class="navbar-item">
              Resources
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-light">
                  Log in
                </a>
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

li {
  text-decoration: none;
  list-style: none;
}

</style>
