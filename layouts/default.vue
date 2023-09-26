<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
    app
    >
      <!--  -->

      <template v-slot:prepend>
        <v-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
          
        </v-avatar>
        <p>John</p>
      </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item >

            <nuxt-link to="/">
              
              <v-list-item-action>
                <v-icon>mdi-home</v-icon> 
              </v-list-item-action>
            </nuxt-link>   
           Inicio
           </v-list-item>


          <v-list-item >
            
            <nuxt-link to="/listatarefa">
              <v-list-item-action>
                <v-icon>mdi-clipboard-list</v-icon>
              </v-list-item-action>
            
            </nuxt-link>
            Lista de tarefa
          </v-list-item>

          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"><v-icon>mdi-account-group-outline</v-icon>  Usuario</v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar> -->


    <v-app-bar
      app
      color=""
        src=""
      >
      

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
    <v-main>
      <!--  -->
      <v-container>
          <Nuxt />
        </v-container>
    </v-main>

    <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Sherif Panda</strong>
    </div>
  </v-footer>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    name: 'DefaultLayout',
    data: () => ({ drawer: null,
      
    }),
  }
</script>