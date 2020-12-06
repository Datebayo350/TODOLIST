##### Comportement Non souhaité = CNS

# Gestion des Erreurs pour le projet

### Erreur : Uncaught TypeError: Cannot read property 'removeChild' of null quand on veux supprimer l'enfant du container
    -   Ne pas utiliser la méthode removeChild, mais écraser la valeur actuelle 
    .innerHTML = ""; Dans ce cas il faudra prévoir une container qu'on pourra nettoyer sans risquer 
    de supprimer autre chose

### CNS : Les messages d'erreurs se cumulent 
    -   La méthode qui va nettoyer le container d'erreurs devra être appelé au début de la fonction 
    callBack de l'event
    -   La méthode qui countera et affichera les erreurs devra être appelé en fin de fonction

### Les éléments crées à partir de clone de templates ne prennent pas les events en compte
    -   Il est nécessair d'appeler à nouveau les events depuis la fonction qui ajoute le clone 
    au DOM, pour celà il faudra penser le code en amont de tel sorte à ce que les events 
    puissent être appliqué depuis n'importe quelle méthode
