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

        <q-tab-panel name="mesures" style="padding: 0">
          <!-- <q-table
            title="mesures"
            :rows="capteur.mesures"
          /> -->
          <table class="mesure">
            <caption>Mesures</caption>
            <thead>
            <tr>
              <th>ID</th><th>DATE</th><th>SEQUENCE</th><th>TEMPERATURE</th><th>HUMIDITÉ</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="mesure in capteur.mesures"
                :key="mesure.id"
                :mesure="mesure">
              <td>{{ mesure.id }}</td>
              <td >{{ mesure.date }}</td>
              <td>{{ mesure.sequence }}</td>
              <td>{{ mesure.temperature }}</td>
              <td>{{ mesure.humidite }}</td>
            </tr>
            </tbody>
          </table>
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

<style scoped lang="sass">
.capteur-card
  width: 500px
  min-height: 400px
.mesure
  overflow: scroll
  td, th
    white-space: nowrap
    alignment: center !important
    margin: 3px 10px 3px 10px
    padding: 3px 10px 3px 10px
  caption
    margin: 5px 5px 10px 5px
    font-size: 2em
    alignment: left
</style>
