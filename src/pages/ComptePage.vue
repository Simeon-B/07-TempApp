<template>
  <q-page padding>
    <h1 v-if="user" >Compte {{ user.nom }}</h1><h1 v-else>Compte</h1>

    <div v-if="user" class="compte">
      <img src="../img/placeholder.jpg" class="cmp-img absolute-right"/>
      <ul class="cmp-liste">
        <li>Nom : {{ user.nom }}</li>
        <li>Prénom : {{ user.prenom }}</li>
        <li>E-Mail : {{ user.email }}</li>
      </ul>
      <q-btn class="cmp-btn" flat label="Changer le mot de passe" />
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ComptePage',
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>

<style scoped>
h1 {
  margin: 5% 5% 2% 5%;
  alignment: center;
}
ul {
  list-style: none;
  font-size: 2em;
}
.compte {
  margin: 5% 5% 2% 5%;
  padding: 0;
  display: inline-block;
}
.cmp-img {
  margin: 20% 10% 2% 5%;
  width: 20%;
}
.cmp-liste {
  width: 60%;
  margin: 2% 5% 2% 5%;
  padding: 0;
}
q-page {
  padding: 1px;
  margin: 1px;
}
.cmp-btn {
  margin: 2% 5% 2% 5%;
}
</style>
