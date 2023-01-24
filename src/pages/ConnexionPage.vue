<template>
  <q-page padding>
    <h1>Connexion</h1>
    <table class="exemple">
      <thead>
      <tr><th>Nom</th><th>Adresse e-mail</th><th>Mot de passe</th></tr>
      </thead>
      <tbody>
      <tr><td> Test</td><td>test@tempapi.divtec.me</td><td>Admlocal1</td></tr>
      <tr><td> Admin</td><td>admin@tempapi.divtec.me</td><td>Admlocal1</td></tr>
      </tbody>
    </table>

    <q-card class="connexion">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="connexion" label="Se connecter" />
        <q-tab name="enregistrement" label="Créer un compte" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="connexion">
          <cnx-form/>
        </q-tab-panel>

        <q-tab-panel name="enregistrement">
          <eng-form/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>

</template>

<script>
export default {
  name: 'ConnexionPage',
  data () {
    return {
      tab: 'connexion'
    }
  },
  components: {
    'cnx-form': require('components/connexion/ConnexionForm.vue').default,
    'eng-form': require('components/connexion/EnregistrementForm.vue').default
  }
}
</script>

<style scoped>
h1 {
  margin: 5% 5% 2% 5%;
  alignment: center;
}

.connexion {
  max-width: 500px;
  width: auto;
  margin: 0 auto;
}

.exemple {
  margin: 2% 5% 8% 8%;
}
.exemple th, td {
  padding: 0 5px 5px 5px;
}
</style>
