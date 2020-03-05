<template>
  <v-container>
    <v-layout fill-height row justify-center>
      <v-flex md12>
        <v-toolbar flat color="white">
          <v-toolbar-title v-if="!this.$vuetify.breakpoint.xsOnly"
            >Clientes</v-toolbar-title
          >
          <v-divider
            class="mx-2"
            inset
            vertical
            v-if="!this.$vuetify.breakpoint.xsOnly"
          >
          </v-divider>
          <v-text-field
            clearable
            v-model="search"
            append-icon="search"
            label="Busca"
            hide-details
          >
          </v-text-field>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:item.name="{}">
            <v-icon
              small
              color="blue darken-2"
              @click="editItem(props.item)"
              style="margin-right: 20px; cursor: pointer;"
              >edit</v-icon
            >
            <v-icon
              small
              color="red darken-2"
              @click="deleteConfirmationMessage(props.item)"
              style="margin-right: 20px; cursor: pointer;"
              >delete</v-icon
            >
          </template>
        </v-data-table>

        <v-btn
          class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark blue darken-1"
          style="width: 65px; height:65px; font-size: 30px"
          :to="{ name: 'Cliente' }"
          >+</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//import Vue from "vue";

export default {
  data: () => ({
    nome: "",
    search: "",
    headers: [
      {
        text: "Ações",
        align: "center",
        value: "name",
        sortable: false
      },
      { text: "Nome", align: "left", value: "nome" },
      { text: "CPF/CNPJ", value: "cpf" },
      { text: "Endereço", value: "endereco.logradouro" }
    ],
    items: [
      {
        nome: "Guilherme Santana de Andrade",
        cpf: "111.222.333-44",
        rg: "47384512-9",
        telefone: "(11) 97546543",
        email: "guilherme_s_andrade@hotmail.com",
        endereco: {
          logradouro: "Rua teste",
          numero: "55",
          complemento: "casa 1",
          bairro: "bairro teste",
          cidade: "sao paulo",
          estado: "",
          cep: "03370-020",
          uf: "SP"
        },
        id: 1
      },
      {
        nome: "Guilherme Santana de Andrade",
        cpf: "111.222.333-44",
        rg: "47384512-9",
        telefone: "(11) 97546543",
        email: "guilherme_s_andrade@hotmail.com",
        endereco: {
          logradouro: "Rua teste",
          numero: "55",
          complemento: "casa 1",
          bairro: "bairro teste",
          cidade: "sao paulo",
          estado: "",
          cep: "03370-020",
          uf: "SP"
        },
        id: 2
      }
    ],
    editedIndex: -1,
    selectedItem: {
      nome: "",
      cpf: "",
      logradouro: "",
      ativo: true
    }
  }),
  computed: {},
  created() {
    this.initialize();
  },
  methods: {
    async list(/*params*/) {
      try {
        //debugger;
        //const result = await api.get("/clientes", params);
        //if (Array.isArray(result)) {
        //  this.items = result.map(it => ({
        //    guid: it.guid,
        //    nome: it.nome,
        //    cpf: funcoes.applyCNPJ_or_CPFMask(it.cpf_cnpj),
        //    logradouro: it.endereco.logradouro,
        //    ativo: it.ativo
        //  }));
        //}
      } catch (error) {
        alert(error.toString(), "error");
      }
    },
    initialize() {
      this.list({});
    },
    editItem(item) {
      this.selectedItem = item;
      this.$router.push({
        name: "Cliente",
        params: { id: item.id }
      });
    },
    deleteConfirmationMessage(item) {
      this.selectedItem = item;
      if (confirm("Deseja mesmo excluir?")) {
        this.deleteItem();
      }
    },
    async deleteItem() {
      this.deleteDialog = false;
      //const index = this.items.indexOf(this.selectedItem);
      try {
        //const result = await guincheiro.deletar(this.selectedItem.guid);
        //if (typeof result === "boolean" && result) {
        //  this.items.splice(index, 1);
        //  Vue.showMessage("Excluído com sucesso", "success");
        //} else {
        //  Vue.showMessage(result.toString(), "error");
        //}
      } catch (error) {
        alert(error.toString(), "error");
      }
    }
  }
};
</script>

<style></style>
