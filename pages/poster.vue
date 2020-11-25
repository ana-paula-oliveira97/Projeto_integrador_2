<template>
  <div class="conterner-p">
    <div class="card">
      <div class="navegacao">
        <p>
          <NuxtLink class="navegacao" to="/">Início</NuxtLink> > Filmes em
          cartaz
        </p>
      </div>
      <div class="card">
        <b-card-group deck
          ><div class="filme1-p">
            <b-card
              class="1"
              title="Convenção das Bruxas"
              img-src="~/assets/img/bruxas.jpg"
              img-alt="Capa do Filme Convenção das Bruxas ,Um menino acaba descobrindo uma conferência de bruxas enquanto fica com a avó em um hotel e é transformado em rato pela Grande Bruxa."
              img-top
            >
              <b-card-text>
                Um menino acaba descobrindo uma conferência de bruxas enquanto
                fica com a avó em um hotel e é transformado em rato pela Grande
                Bruxa.<br />
                remaster do classico filme de 1990.
                <p>&#32;</p>
              </b-card-text>
              <template v-slot:footer>
                <b-button class="botao" variant="Primary"
                  ><NuxtLink to="/the_witches">Ver mais </NuxtLink></b-button
                >
              </template>
            </b-card>
          </div>
          <div class="filme2-p">
            <b-card
              class="2"
              title="Freaky"
              img-src="~/assets/img/Freaky.jpg"
              alt="Capa do Filme Freaky: Depois de trocar de corpo com um assassino em série, a adolescente de colegial Millie descobre que tem menos de um dia para reverter a situação antes que seja tarde demais."
              img-top
            >
              <b-card-text>
                Depois de trocar de corpo com um assassino em série, a
                adolescente de colegial Millie descobre que tem menos de um dia
                para reverter a situação antes que seja tarde demais.
                <p>&#32;</p>
              </b-card-text>
              <template v-slot:footer>
                <b-button class="botao" variant="Primary"
                  ><NuxtLink to="/freaky">Ver mais </NuxtLink></b-button
                >
              </template>
            </b-card>
          </div>

          <div class="filme3-p">
            <b-card
              class="3"
              title="Tenet"
              img-src="~/assets/img/tenet.jpg"
              img-alt="Capa do Filme Tenet: Em um mundo crepuscular da espionagem internacional, um agente da CIA sem nome, conhecido como o protagonista, é recrutado por uma organização misteriosa chamada Tenet para participar de uma missão global que se desdobra além do tempo real. "
              img-top
            >
              <b-card-text>
                Armado com apenas uma palavra 'Tenet' e lutando pela
                sobrevivência do mundo inteiro, o Protagonista viaja através de
                um mundo crepuscular de espionagem internacional em uma missão
                que irá desenrolar em algo para além do tempo real.
              </b-card-text>
              <template v-slot:footer>
                <b-button class="botao" variant="Primary"
                  ><NuxtLink to="/tenet">Ver mais </NuxtLink>
                </b-button>
              </template>
            </b-card>
          </div>
          <div class="filme4-p">
            <b-card
              class="4"
              title="Os novos mutantes"
              img-src="~/assets/img/os novos mutantes.jpg"
              img-alt="Capa do Filme Os novos mutantes,Cinco jovens mutantes descobrem o alcance de seus poderes e lidam com traumas do passado enquanto são mantidos presos contra a vontade num sinistro hospital."
              img-top
            >
              <b-card-text>
                Cinco jovens mutantes descobrem o alcance de seus poderes e
                lidam com traumas do passado enquanto são mantidos presos contra
                a vontade num sinistro hospital.
                <p>&#32;</p>
              </b-card-text>
              <template v-slot:footer>
                <b-button class="botao" variant="Primary"
                  ><NuxtLink to="/the_new_mutants"
                    >Ver mais
                  </NuxtLink></b-button
                >
              </template>
            </b-card>
          </div>
        </b-card-group>
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
            "os proximos filmes em cartaz no cinemac, não perca os lançamentos, vem pro cinemac",
        },
      ],
    };
  },
};
</script>