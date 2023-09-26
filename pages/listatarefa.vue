<template>
  <div>
    <h2>Criar sua lista de tarefa</h2>
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
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      selectedFruit: null,
      fruits: require("@/assets/fruits.json"),
    };
  },
  methods: {
    addFruitTask() {
      if (this.selectedFruit) {
        const selectedFruit = this.fruits.find(fruit => fruit.coditem === this.selectedFruit);

        if (selectedFruit) {
          this.tasks.push({
            nome: selectedFruit.nome,
            coditem: selectedFruit.coditem,
            completed: false,
          });

          this.selectedFruit = null; // Limpa a seleção após adicionar à lista de tarefas
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
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
