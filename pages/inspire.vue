<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <v-card flat class="logo py-4 d-flex justify-center">
        <NagumoLogo />
      </v-card>

      <v-card flat>
        <div>
          <strong><h3>Adiciona tarefa</h3></strong>
          
          <!-- Autocompletar para pesquisar frutas -->
          <v-autocomplete
            v-model="selectedFruit"
            :items="fruits"
            label="Pesquisar Fruta"
            item-text="nome"
            item-value="coditem"
            @input="addFruitTask"
          ></v-autocomplete> 

          <v-list>
            <v-list-item
              v-for="(task, index) in tasks"
              :key="index"
              :class="{ completed: task.completed }"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ task.nome }} ({{ task.coditem }})
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn color="lime" @click="toggleTask(index)">
                  <v-icon>{{ task.completed ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}</v-icon>
                </v-btn>
                <v-btn color="red" @click="deleteTask(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </div>
      </v-card>

      <!-- botao home -->
      <v-card flat>
        <v-spacer />
        <v-btn
          color="primary"
          nuxt
          to="/"
        >
          Volta
        </v-btn>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      selectedFruit: null,
      fruits: [], // Agora, inicialize como um array vazio
    };
  },
  methods: {
    async fetchFruitsFromApi() {
      try {
        const response = await fetch('http://15.228.47.247:3333/api/v1/produtos-hortifruti/'); // Substitua pela URL real
        const data = await response.json();
        this.fruits = data;
      } catch (error) {
        console.error('Erro ao buscar frutas da API:', error);
      }
    },

    async addFruitTask() {
      await this.fetchFruitsFromApi();

      if (this.selectedFruit) {
        const selectedFruit = this.fruits.find(fruit => fruit.coditem === this.selectedFruit);

        if (selectedFruit) {
          this.tasks.push({
            nome: selectedFruit.nome,
            coditem: selectedFruit.coditem,
            completed: false,
          });

          this.selectedFruit = null;
        }
      }
    },

    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
  created() {
    this.fetchFruitsFromApi();
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
