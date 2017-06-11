**Movie Application**

**L'application a été créée en utilisant "create-react-app"**

**Tutoriel suivi** : https://openclassrooms.com/courses/build-web-apps-with-reactjs

**Temps** approximatif investi en comptant le tutoriel : **20h**  
**Compétence** de départ en ReactJS : **Aucune**

Organisation du dossier src :  
* CSS : contient les différentes feuilles de style.  
* JS : contient les différents composants React.

Description des composants :

**App** est le composant principal il s'occupe de générer:  
* le header avec les deux liens "Films" et "Séries"  
* le contenu de l'application suivant l'url (utilisation du Router)  
    * Le composant appelé peut-être soit : MoviesList ou MovieDetail.  
        
**MoviesList** est un composant permettant de générer une liste de films ou de séries.   
* il est possible de naviguer entre les différentes pages résultantes de l'API.
* un film ou une série est représenté par le composant : **MovieCard**.  
    
**MovieDetail** est un composant qui affiche un film/série en détail (plus d'informations)
* Pour une question de clarté, il appelle le composant **MovieDescriptif** qui s'occupe de l'affichage.

**Améliorations possibles :** 
* CSS : 
    * Améliorer le rendu des différents composants notamment pour les détails d'un film/série
    * Rendre l'application Responsive
* JS :
    * Créer un composant "PagesNavigation" pour simplifier le composant "MoviesList"
    * Ajouter des features (ex : Barre de recherche, filtres...)