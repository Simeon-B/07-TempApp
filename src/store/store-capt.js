import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/functions/message-erreur'

// State : données du magasin
const state = {
  capteurs: [
    {
      id: 1,
      nom: 'capteur-5574',
      logo: 'null',
      code: 'nd_6430',
      salle: {
        id: 1,
        nom: 'C595-119'
      },
      mesures: [
        {
          id: 177,
          date: '2021-02-23',
          sequence: 7606,
          temperature: 29.66,
          humidite: 95.67,
          capteur_id: 1
        },
        {
          id: 137,
          date: '2017-12-16',
          sequence: 5094,
          temperature: 8.17,
          humidite: 3.62,
          capteur_id: 1
        }
      ]
    },
    {
      id: 2,
      nom: 'capteur-6774',
      logo: 'null',
      code: 'qe_6128',
      salle: {
        id: 2,
        nom: 'D866-139'
      },
      mesures: [
        {
          id: 90,
          date: '2022-08-20',
          sequence: 8761,
          temperature: 29.66,
          humidite: 95.67,
          capteur_id: 1
        },
        {
          id: 34,
          date: '2019-10-07',
          sequence: 4232,
          temperature: 8.17,
          humidite: 3.62,
          capteur_id: 1
        }
      ]
    }
  ],
  capteursCharges: false
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_CAPTEURS (state, capteurs) {
    state.capteurs = capteurs
  },
  SET_CAPTEURS_CHARGES (state, valeur) {
    state.capterusChargees = valeur
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  getCapteursApi ({ commit, rootState }) {
    commit('SET_CAPTEURS_CHARGES', false)
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    api.get('/capteurs', config)
      .then(function (response) {
        commit('SET_CAPTEURS', response.data)
        commit('SET_CAPTEURS_CHARGES', true)
      })
      .catch(function (error) {
        afficherMessageErreur(
          'Erreur lors de la récupération des capteurs !'
        )
        throw error
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  // Prend le state comme 1er paramètre
  capteurs: (state) => {
    return state.capteurs
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
