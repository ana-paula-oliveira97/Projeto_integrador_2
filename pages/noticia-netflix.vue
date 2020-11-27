<template>
  <div class="noticia">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> >
        <NuxtLink class="navegacao" to="/blog">Blog </NuxtLink> > Assassin's
        Creed ganha novo série dessa vez na Netflix
      </p>
    </div>
    <h1>
      Confirmado pela Netflix Brasil, teremos uma serie de Assassin's Creed.
    </h1>

    <p>
      No dia 27 de outubro de 2020 a Netflix brasil surpreendeu os fãs com um
      pequeno vídeo de 10 segundos, mostrando o logo da então franquia
      Assassin's Creed da produtora e desenvolvedora de games Ubsoft.
    </p>
    <p>
      Ainda não temos notícias se a produtora de conteúdo fara a cronologia de
      todos os jogos da franquia ou apenas um em especifico, porem os jogos
      possuem 3 jogos que se mantem como o mesmo "personagem" principal sendo
      ele <strong> Ezio auditore</strong> da Firenze, estando presente nos jogos
      Assassin’s Creed II, Assassin’s Creed: Brotherhood e Assassin’s Creed:
      Revelations.
    </p>
    <p>
      O vídeo mostra o logo do game aparecendo aos poucos e no seu centro a
      letra N (de netflix), com sua coloração em vermelho a mesma cor da
      plataforma, confira no vídeo a baixo.
    </p>

    <div class="trailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XtupDJrCqqQ?start=10"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
          content: "Noticia sobre a saida de assassins creed na netflix.",
        },
      ],
    };
  },
};
</script>