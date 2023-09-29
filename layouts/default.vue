<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
    
    app
    color="cyan"
    >
      <!--  -->

      <template v-slot:prepend>
        <!-- <v-avatar>
          <v-img
            src="/avatar.jpg"
            alt="John"
          ></v-img>
        </v-avatar> -->
        <v-icon size="50px">mdi-account-circle</v-icon> 

        <strong><p>cherif@gmail.com</p></strong>
      </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item >

            <nuxt-link to="/">
              
              <v-list-item-action>
                <v-icon size="30px">mdi-home</v-icon> 
              </v-list-item-action>
            </nuxt-link>   
           Inicio
           </v-list-item>


          <v-list-item >
            
            <nuxt-link to="/listatarefa">
              <v-list-item-action>
                <v-icon size="30px">mdi-clipboard-list</v-icon>
              </v-list-item-action>
            
            </nuxt-link>
            Lista de tarefa
          </v-list-item>

          <v-list-item >
              <v-icon size="30px">mdi-account-group-outline

              </v-icon>  
              Usuario
            </v-list-item>

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

        <v-app-bar-title>Nagumo</v-app-bar-title>

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
   
   
    <!-- FOOTER -->

    <template>
  <v-footer color="cyan" class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      Hortifruti - Supermercado Nagumo!

      <v-spacer></v-spacer>
      <v-icon>mdi-instagram</v-icon>
      <v-icon>mdi-facebook</v-icon>
      
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
        <strong>Copyright: by cherifbekopanda@gmail.com © {{ new Date().getFullYear() }}</strong>
    </div>
  </v-footer>
</template>

    <!-- <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
     Hortifruti Supermercado Nagumo!

      <v-spacer></v-spacer>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Email: cherifbekopanda@gmail.com © 2023 <br>Copyright: by Sherif Panda</strong>
    </div>
  </v-footer> -->

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