<template>
  <div class="conterner">
    <div class="card">
      <div class="navegacao">
        <p>
          <NuxtLink class="navegacao" to="/">Início</NuxtLink> > Filmes em
          cartaz
        </p>
      </div>
      <b-card-group deck
        ><div class="filme1">
          <b-card
            title="Convenção das Bruxas"
            img-src="~/assets/img/bruxas.jpg"
            img-alt="Capa do Filme Convenção das Bruxas ,Um menino acaba descobrindo uma conferência de bruxas enquanto fica com a avó em um hotel e é transformado em rato pela Grande Bruxa."
            img-top
          >
            <b-card-text>
              Um menino acaba descobrindo uma conferência de bruxas enquanto
              fica com a avó em um hotel e é transformado em rato pela Grande
              Bruxa.
            </b-card-text>
            <template v-slot:footer>
              <b-button class="botao" variant="Primary"
                ><NuxtLink to="/the_witches">Ver mais </NuxtLink></b-button
              >
            </template>
          </b-card>
        </div>
        <div class="filme2">
          <b-card
            title="Carlinhos e Carlão"
            img-src="~/assets/img/carlinho e carlao.jpg"
            img-alt="Capa do Filme Morte Súbita 2, Sinopse: Jesse Freeman é um ex-oficial das forças especiais e especialista em explosivos agora trabalhando regularmente como segurança em uma arena de basquete de última geração."
            img-top
          >
            <b-card-text>
              Carlão é um homem preconceituoso que trabalha em uma
              concessionária de carros com Cadinho, Zeca e Antunes. Quando
              Evaristo é alvo de tais agressões verbais, ele passa a persegui-lo
              e trancá-lo em um armário mágico. De lá sai Carlinhos , alter-ego
              homossexual que assume o corpo de Carlão quando chega a noite.
            </b-card-text>
            <template v-slot:footer>
              <b-button class="botao" variant="Primary"
                ><NuxtLink to="/carlinhos_e_carlao"
                  >Ver mais
                </NuxtLink></b-button
              >
            </template>
          </b-card>
        </div>

        <div class="filme3">
          <b-card
            title="Tenet"
            img-src="~/assets/img/tenet.jpg"
            img-alt="Capa do Filme Tenet: Em um mundo crepuscular da espionagem internacional, um agente da CIA sem nome, conhecido como o protagonista, é recrutado por uma organização misteriosa chamada Tenet para participar de uma missão global que se desdobra além do tempo real. "
            img-top
          >
            <b-card-text>
              Armado com apenas uma palavra – Tenet – e lutando pela
              sobrevivência do mundo inteiro, o Protagonista viaja através de um
              mundo crepuscular de espionagem internacional em uma missão que
              irá desenrolar em algo para além do tempo real.
            </b-card-text>
            <template v-slot:footer>
              <b-button class="botao" variant="Primary"
                ><NuxtLink to="/tenet">Ver mais </NuxtLink>
              </b-button>
            </template>
          </b-card>
        </div>
        <div class="filme4">
          <b-card
            title="Os novos mutantes"
            img-src="~/assets/img/os novos mutantes.jpg"
            img-alt="Capa do Filme Os novos mutantes,Cinco jovens mutantes descobrem o alcance de seus poderes e lidam com traumas do passado enquanto são mantidos presos contra a vontade num sinistro hospital."
            img-top
          >
            <b-card-text>
              Cinco jovens mutantes descobrem o alcance de seus poderes e lidam
              com traumas do passado enquanto são mantidos presos contra a
              vontade num sinistro hospital.
            </b-card-text>
            <template v-slot:footer>
              <b-button class="botao" variant="Primary"
                ><NuxtLink to="/the_new_mutants">Ver mais </NuxtLink></b-button
              >
            </template>
          </b-card>
        </div>
      </b-card-group>
    </div>
  </div>
</template>