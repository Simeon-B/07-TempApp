<template>
  <div class="q-pa-md">
    <q-card class="capteur-card">
      <q-card-section>
        <div class="text-h6">{{ capteur.nom }}</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Infos" name="infos" />
        <q-tab label="Mesures" name="mesures" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="infos">
          <p>code: {{ capteur.code }}</p>
          <p>Salle : {{ capteur.salle.nom }}</p>
        </q-tab-panel>

        <q-tab-panel name="mesures">
          <q-table
            title="mesures"
            :rows="capteur.mesures"
          />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>

export default {
  name: 'CeCapteur',
  data () {
    return {
      tab: 'infos'
    }
  },
  props: {
    capteur: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.capteur-card {
  width: 350px;
}
</style>
