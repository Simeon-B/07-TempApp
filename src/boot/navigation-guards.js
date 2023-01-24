import { LocalStorage } from 'quasar'
import { afficherMessageErreur } from 'src/functions/message-erreur'

// Récupère l'objet router représentant Vue router
export default ({ router }) => {
  // Avant de rediriger le visiteur
  router.beforeEach((to, from, next) => {
    // Récupère
    const user = LocalStorage.getItem('user')
    console.log(to.path)
    // Si PAS connecté et ne vas par vers /connexion on force la redirection
    if (!user && (to.path !== '/connexion' && to.path !== '/home')) {
      // Affiche un message d'erreur uniquement si utilisateur tente d'accéder
      // à une autre page après avoir été redirigé vers la connexion une 1re
      // fois.
      if (from.path === '/connexion') {
        afficherMessageErreur('Page protégée, connexion requise !')
      }
      next('/connexion') // Redirige vers /connexion
    } else {
      next() // Continue la navigation normalement
    }
  })
}
