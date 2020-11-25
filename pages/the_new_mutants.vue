<template>
  <div class="filme">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> >
        <NuxtLink class="navegacao" to="/poster">Proximos filmes</NuxtLink> > os
        novos mutantes
      </p>
    </div>

    <img
      class="capa"
      src="~/assets/img/os novos mutantes.jpg"
      alt="Capa do Filme Os novos mutantes,Cinco jovens mutantes descobrem o alcance de seus poderes e lidam com traumas do passado enquanto são mantidos presos contra a vontade num sinistro hospital."
    />
    <h1>Título original: The New Mutants</h1>

    <p>
      <strong> Direção:</strong> Josh Boone<br />
      <strong> Gênero:</strong> Ação, Ficção Científica, Terror, Aventura<br />
      <strong> Lançamento:</strong> 2020<br />
      <strong>Duração:</strong> 94 min.
    </p>
    <p>
      <strong> Sinopse:</strong> Cinco jovens mutantes descobrem o alcance de
      seus poderes e lidam com traumas do passado enquanto são mantidos presos
      contra a vontade num sinistro hospital.
    </p>

    <div class="trailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9RQcxM9cBIo?start=53"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="atores">
      <p>Alguns atores e atrizes:</p>

      <div>
        <img class="fotos" src="~/assets/img/Maisie Williams.jpg" alt="" />
        <p>Maisie Williams - Rahne Sinclair</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/Anya Taylor-Joy.jpg" alt="" />
        <p>Anya Taylor-Joy - Illyana Rasputin</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/Charlie Heaton.jpg" alt="" />
        <p>Charlie Heaton - Samuel Guthrie</p>
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
            "Filme: os novos mutantes,sinopse e thriller oficial do filme, juntamente com alguns atores como Maisie Williams, Anya Taylor-Joy e Charlie Heaton. ",
        },
      ],
    };
  },
};
</script>