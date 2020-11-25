<template>
  <div class="filme">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> >
        <NuxtLink class="navegacao" to="/poster">Proximos filmes</NuxtLink> >
        Convenção das Bruxas
      </p>
    </div>

    <img
      class="capa"
      src="~/assets/img/bruxas.jpg"
      alt="Capa do Filme Convenção das Bruxas ,Um menino acaba descobrindo uma conferência de bruxas enquanto fica com a avó em um hotel e é transformado em rato pela Grande Bruxa."
    />
    <h1>Título original: The Witches</h1>

    <p>
      <strong> Direção:</strong> Robert Zemeckis<br />
      <strong> Gênero:</strong> Fantasia, Família, Aventura, Comédia, Terror<br />
      <strong> Lançamento:</strong> 2020<br />
      <strong>Duração:</strong> 106 min.
    </p>
    <p>
      <strong> Sinopse:</strong> Um menino acaba descobrindo uma conferência de
      bruxas enquanto fica com a avó em um hotel e é transformado em rato pela
      Grande Bruxa.
    </p>

    <div class="trailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yXTePS1vd-k?start=15"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="atores">
      <p>Alguns atores e atrizes:</p>

      <div>
        <img class="fotos" src="~/assets/img/Anne Hathaway.jpg" alt="" />
        <p>Anne Hathaway - Grande Bruxa</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/Jahzir Bruno.jpg" alt="" />
        <p>Jahzir Bruno - Hero boy</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/Octavia Spencer.jpg" alt="" />
        <p>Octavia Spencer - Avó</p>
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
            "Filme: a convenção das bruxas,sinopse e thriller do filme, juntamente  com alguns atores como Anne Hathaway, Octavia Spencer e Jahzir Bruno",
        },
      ],
    };
  },
};
</script>