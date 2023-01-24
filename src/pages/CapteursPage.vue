<template>
  <q-page padding>
    <h1>Températures</h1>

    <!-- Spinner (attendre le chargement)
    <div v-if="!capteursCharges" class="q-pa-lg text-center">
      <q-spinner-radio color="primary" size="4em" />
    </div> -->

    <!-- Liste des capteurs -->
    <q-pull-to-refresh @refresh="refresh">
      <div class="row q-gutter-lg temp-pres">
        <capteur v-for="capteur in capteurs"
               :key="capteur.id"
               :capteur="capteur">
        </capteur>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ComptePage',
  computed: {
    // Mappage des getters ('nomNamespace', ['nomGetter'])
    ...mapGetters('capt', ['capteurs']),
    ...mapState('capt', ['capteursCharges']),
    ...mapState('auth', ['user'])
  },
  components: {
    capteur: require('components/capteurs/Capteur.vue').default
  }
}
</script>

<style scoped>
h1 {
  margin: 5% 5% 2% 5%;
  alignment: center;
}
.temp-pres {
  margin: 2%;
}
</style>
