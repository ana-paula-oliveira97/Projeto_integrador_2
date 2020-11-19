<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <NuxtLink class="logo-inicio" to="/"
            >Cinemac
          </NuxtLink></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="fonte-menu">
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/">Início</NuxtLink>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/about">Sobre</NuxtLink>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/poster"
                >Filmes em Cartaz
              </NuxtLink></b-nav-item
            >
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/blog">Blog</NuxtLink>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/tickets"
                >Reserve seu lugar</NuxtLink
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
