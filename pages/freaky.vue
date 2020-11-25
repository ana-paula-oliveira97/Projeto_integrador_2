<template>
  <div class="filme">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> >
        <NuxtLink class="navegacao" to="/poster">Proximos filmes</NuxtLink>
        >Freaky
      </p>
    </div>

    <img
      class="capa"
      src="~/assets/img/Freaky.jpg"
      alt="Capa do Filme Freaky: Depois de trocar de corpo com um assassino em série, a adolescente de colegial Millie descobre que tem menos de um dia para reverter a situação antes que seja tarde demais."
    />
    <h1>Título original: Freaky</h1>

    <p>
      <strong> Direção:</strong> Christopher Landon<br />
      <strong> Gênero:</strong> Terror, Suspense, Comédia<br />
      <strong> Lançamento:</strong> 2020<br />
      <strong>Duração:</strong> 101 min.
    </p>
    <p>
      <strong> Sinopse:</strong> Depois de trocar de corpo com um assassino em
      série, a adolescente de colegial Millie descobre que tem menos de um dia
      para reverter a situação antes que seja tarde demais
    </p>

    <div class="trailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7c5pgQTzAx4?start=3"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="atores">
      <p>Alguns atores e atrizes:</p>

      <div>
        <img class="fotos" src="~/assets/img/Vince Vaughn.jpg" alt="" />
        <p>Vince Vaughn - Blissfield Butcher</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/Celeste O’Connor.jpg" alt="" />
        <p>Celeste O’Connor - Nyla</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/Misha Osherovich.jpg" alt="" />
        <p>Misha Osherovich - Joshua</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Filme: freaky,sinopse e thriller oficial do filme, juntamente com alguns atores como Vince Vaughn,Celeste O’Connor e Misha Osherovich. ",
        },
      ],
    };
  },
};
</script>