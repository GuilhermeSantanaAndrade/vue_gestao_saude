<template>
  <div class="bg">
    <v-card-text>
      <v-layout>
        <v-flex xs12>
          <v-form ref="form" lazy-validation>
            <v-container>
              <v-subheader style="padding-left: 0px; font-weight: bold;"
                >Dados</v-subheader
              >
              <v-text-field
                label="Nome"
                required
                :maxlength="50"
                v-model="customer.nome"
              ></v-text-field>
              <v-layout>
                <v-flex xs12 md6>
                  <v-text-field
                    label="CPF"
                    required
                    v-model="customer.cpf"
                    mask="'###.###.###-##'"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md6>
                  <v-text-field
                    label="RG"
                    :maxlength="20"
                    v-model="customer.rg"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md6>
                  <v-text-field
                    label="Telefone Principal"
                    mask="(##) #########"
                    required
                    v-model="customer.telefone"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    label="E-mail Principal"
                    :maxlength="50"
                    required
                    v-model="customer.email"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-subheader style="padding-left: 0px; font-weight: bold;"
                >Endereço</v-subheader
              >
              <v-layout>
                <v-flex xs2 md2 sm2>
                  <v-text-field
                    label="CEP"
                    mask="#####-###"
                    required
                    v-model="customer.endereco.cep"
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
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Estado"
                    :maxlength="2"
                    required
                    v-model="customer.endereco.uf"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-flex>
      </v-layout>
    </v-card-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        nome: "",
        cpf: "",
        rg: "",
        telefone: "",
        email: "",
        endereco: {
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          estado: ""
        }
      }
    };
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
}
</style>
