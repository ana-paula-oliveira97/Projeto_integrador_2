<template>
  <div class="filme">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> >
        <NuxtLink class="navegacao" to="/poster">Proximos filmes</NuxtLink>
        >Tenet
      </p>
    </div>

    <img
      class="capa"
      src="~/assets/img/tenet.jpg"
      alt="Capa do Filme Tenet: Em um mundo crepuscular da espionagem internacional, um agente da CIA sem nome, conhecido como o protagonista, é recrutado por uma organização misteriosa chamada Tenet para participar de uma missão global que se desdobra além do tempo real."
    />
    <h1>Título original: Tenet</h1>

    <p>
      <strong> Direção:</strong> Christopher Nolan<br />
      <strong> Gênero:</strong> Ação, Suspense, Ficção Científica<br />
      <strong> Lançamento:</strong> 2020<br />
      <strong>Duração:</strong> 150 min.
    </p>
    <p>
      <strong> Sinopse:</strong> Em um mundo crepuscular da espionagem
      internacional, um agente da CIA sem nome, conhecido como o protagonista, é
      recrutado por uma organização misteriosa chamada Tenet para participar de
      uma missão global que se desdobra além do tempo real. A missão: Prevenir
      Andrei Sator, um oligarca russo renegado com habilidades precognição, de
      começar a Terceira Guerra Mundial. O Protagonista em breve dominar a arte
      de “inversão do tempo”, como forma de combater a ameaça que está por vir.
    </p>

    <div class="trailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3VmhednnuK0?start=107"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="atores">
      <p>Alguns atores e atrizes:</p>

      <div>
        <img
          class="fotos"
          src="~/assets/img/John David Washington.jpg"
          alt=""
        />
        <p>John David Washington - Protagonista</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/Robert Pattinson.jpg" alt="" />
        <p>Robert Pattinson - Neil</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/Elizabeth Debicki.jpg" alt="" />
        <p>Elizabeth Debicki - Kat</p>
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
            "Filme: tenet,sinopse e thriller oficial do filme, juntamente  com alguns atores como John David Washington, Robert Pattinson e Elizabeth Debicki ",
        },
      ],
    };
  },
};
</script>