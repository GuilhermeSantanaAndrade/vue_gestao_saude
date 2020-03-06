<template>
  <div class="bg">
    <v-card-text>
      <v-layout>
        <v-flex xs12>
          <v-form ref="form" lazy-validation>
            <v-container>
              <v-subheader style="padding-left: 0px; font-weight: bold;">Dados</v-subheader>
              <v-text-field
                label="Nome"
                required
                :maxlength="50"
                v-model="customer.nome"
                :rules="requiredField"
              ></v-text-field>
              <v-layout>
                <v-flex xs12 md6>
                  <v-text-field
                    label="CPF"
                    required
                    v-model="customer.cpf"
                    v-mask="'###.###.###-##'"
                    :rules="requiredField"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md6>
                  <v-text-field
                    label="RG"
                    :maxlength="20"
                    v-model="customer.rg"
                    :rules="requiredField"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md6>
                  <v-text-field
                    label="Telefone Principal"
                    v-mask="'(##) #########'"
                    required
                    v-model="customer.telefone"
                    :rules="requiredField"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    label="E-mail Principal"
                    :maxlength="50"
                    required
                    v-model="customer.email"
                    :rules="emailRules"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-subheader style="padding-left: 0px; font-weight: bold;">Endereço</v-subheader>
              <v-layout>
                <v-flex xs2 md2 sm2>
                  <v-text-field
                    label="CEP"
                    v-mask="'#####-###'"
                    required
                    v-model="customer.endereco.cep"
                    :rules="requiredField"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md10>
                  <v-text-field
                    label="Logradouro"
                    :maxlength="50"
                    required
                    :rules="requiredField"
                    v-model="customer.endereco.logradouro"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md2>
                  <v-text-field
                    label="Número"
                    :maxlength="10"
                    required
                    :rules="requiredField"
                    v-model="customer.endereco.numero"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Complemento"
                    :maxlength="50"
                    v-model="customer.endereco.complemento"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md8>
                  <v-text-field
                    label="Bairro"
                    :maxlength="50"
                    required
                    v-model="customer.endereco.bairro"
                    :rules="requiredField"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md8>
                  <v-text-field
                    label="Cidade"
                    :maxlength="50"
                    required
                    v-model="customer.endereco.cidade"
                    :rules="requiredField"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Estado"
                    :maxlength="2"
                    required
                    v-model="customer.endereco.uf"
                    :rules="requiredField"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="{ name: 'ClientesConsultar' }">Voltar</v-btn>
                <v-btn @click="submit()" color="primary">Efetivar</v-btn>
              </v-card-actions>
            </v-container>
          </v-form>
        </v-flex>
      </v-layout>
    </v-card-text>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { api } from "../services/api";

export default {
  directives: {
    mask
  },
  data() {
    return {
      isAlteracao: false,
      customer: {
        nome: "",
        cpf: "",
        rg: "",
        telefone: "",
        email: "",
        endereco: {
          cep: "",
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          uf: ""
        }
      },
      requiredField: [v => !!v || "Campo obrigatório"],
      emailRules: [
        v => !!v || "Campo obrigatório",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail inválido"
      ]
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        try {
          if (this.isAlteracao) {
            await api.put(`/clientes/${this.customer.id}`, this.customer);
            alert("Cliente alterado com sucesso!");
          } else {
            await api.post("/clientes", this.customer);
            alert("Cliente cadastrado com sucesso!");
          }
        } catch (error) {
          alert(error);
          throw error;
        }
        this.$router.push({ name: "ClientesConsultar" });
      }
    },
    async initialize() {
      if (this.$route.params.id) {
        this.isAlteracao = true;
        const result = await api.get(`/clientes/${this.$route.params.id}`);
        this.customer = result.data[0];
      } else {
        this.customer = {
          nome: "",
          cpf: "",
          rg: "",
          telefone: "",
          email: "",
          endereco: {
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: ""
          }
        };
      }
    }
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
}
</style>
