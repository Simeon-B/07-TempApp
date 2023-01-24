<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn
          v-if="!user"
          to="/connexion"
          flat
          icon-right="account_circle"
          label="Se connecter"
          class="absolute-right"
        />

        <q-btn
          v-else
          @click="deconnecterUtilisateur"
          flat
          icon-right="account_circle"
          label="Se déconnecter"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>

    <!-- les liens de navigations -->
    <q-drawer class="drawer"
              breakpoint="800"
              v-model="leftDrawerOpen"
              show-if-above
              bordered
              width="250"
    >
      <q-list>
        <q-item-label header>
          Menu de navigation
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          v-show="(user && link.title !== 'Connexion') || (!user && link.needConnect === false)"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          :to="link.link"
          :icon="link.icon"
          :label="link.title"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { mapState, mapActions } from 'vuex'

const linksList = [
  {
    title: 'Home',
    caption: '',
    icon: 'home',
    link: 'home',
    needConnect: false
  },
  {
    title: 'Connexion',
    caption: '',
    icon: 'assignment',
    link: 'connexion',
    needConnect: false
  },
  {
    title: 'Compte',
    caption: '',
    icon: 'account_circle',
    link: 'compte',
    needConnect: true
  },
  {
    title: 'Capteurs',
    caption: '',
    icon: 'thermostat',
    link: 'capteurs',
    needConnect: true
  }
]

export default defineComponent({
  name: 'MainLayout',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['deconnecterUtilisateur'])
  },

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen
    }
  }
})
</script>

<style>
/* Applique les règles de ce bloc uniquement aux écrans >= 768px */
@media screen and (min-width: 600px) {
  /* Cache les éléments avec la classe CSS q-footer */
  .q-footer {
    display: none;
  }
}
.drawer {
  background-color: lightblue;
}
</style>

<style lang="sass">
/* Applique les règles de ce bloc uniquement aux écrans >= 768px */
@media screen and (min-width: 768px)
  /* Cache les éléments avec la classe CSS q-footer */
  .q-footer
    display: none

/* Lien actif du menu latéral */
.q-drawer
  .q-router-link--exact-active
    color: #000000 !important
    background-color: #61cbe1 !important
</style>
