<template>
  <div>
    <div class="navegacao">
      <p><NuxtLink to="/">Início</NuxtLink> > Sobre</p>
    </div>
    <p class="txt-sobre">
      Com Capacidade de 160 Lugares o Cinemec é um ótimo lugar para passar um
      tempo com a familia ou com os amigos. <br />
      Meia entrada: crianças de 03 à 12 anos. Acima de 12, somente com a
      carteirinha escolar na validade.
    </p>

    <p class="txt-sobre">
      Confira o video com os Filmes em cartaz e como chegar ao Cinema.
    </p>
    <div class="sobre">
      <div class="trailer">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/B0VL51LFe3k?start=13"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14858.39169020325!2d-48.5052161!3d-21.4057308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc662afc91651067!2sCinemec%20Taquaritinga!5e0!3m2!1spt-BR!2sbr!4v1602610559177!5m2!1spt-BR!2sbr"
          width="400"
          height="300"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
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
            "Pagina sobre o Cinemac, aqui encontramos algumas informações sobre o Cinema de Taquaritinga,incluindo o map",
        },
      ],
    };
  },
};
</script>