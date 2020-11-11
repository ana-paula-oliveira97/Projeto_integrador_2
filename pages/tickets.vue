<template>
  <div class="navegacao">
    <p><NuxtLink to="/">Início</NuxtLink> > Reserve seu lugar</p>

    <div class="form">
      <h2>Formulário de reserva de lugares.</h2>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Digite seu E-mail:*"
          label-for="input-1"
          description="Nunca compartilhe seu e-mail com ninguem!"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Digite seu nome:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Qual Filme gostaria de ver:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="filmes"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <!-- <b-form-checkbox value="me">Confirmar reserva</b-form-checkbox>-->
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="success">Enviar</b-button>
        <b-button type="reset" variant="danger">Cancelar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        filmes: null,
        checked: [],
      },
      filmes: [
        { text: "Selecione um filme.", value: null },
        "Escolhida",
        "Morte Súbita 2",
        "A Gangue: Uma noite de sangue",
        "Sangue de Pelicano",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert("Reserva feito com sucesso");
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>