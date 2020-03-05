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
          <template v-slot:item.name="{ item }">
            <v-icon
              small
              color="blue darken-2"
              @click="editItem(item)"
              style="margin-right: 20px; cursor: pointer;"
              >edit</v-icon
            >
            <v-icon
              small
              color="red darken-2"
              @click="deleteConfirmationMessage(item)"
              style="margin-right: 20px; cursor: pointer;"
              >delete</v-icon
            >
          </template>
        </v-data-table>

        <v-btn
          class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark blue darken-1"
          style="width: 65px; height:65px; font-size: 30px"
          :to="{ name: 'ClienteInserir' }"
          >+</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";
import { api } from "../services/api.js";

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
    items: [],
    editedIndex: -1,
    selectedItem: {}
  }),
  computed: {},
  created() {
    this.initialize();
  },
  methods: {
    async list(params) {
      try {
        const result = await api.get("/clientes", params);
        if (Array.isArray(result)) {
          this.items = result.map(it => ({
            id: it.id,
            nome: it.nome,
            cpf: Vue.applyCNPJ_or_CPFMask(it.cpf),
            endereco: {
              logradouro: it.endereco.logradouro,
              numero: "",
              complemento: "",
              bairro: "",
              cidade: "",
              estado: "",
              cep: "",
              uf: ""
            }
          }));
        }
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
        name: "ClienteAlterar",
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
      const index = this.items.indexOf(this.selectedItem);
      try {
        /*const result = */ await api.delete("/clientes", this.selectedItem.id);
        //if (result && result.status === "200") {
        this.items.splice(index, 1);
        //}
        alert("Excluído com sucesso!");
      } catch (error) {
        alert(error.toString(), "error");
      }
    }
  }
};
</script>

<style></style>
