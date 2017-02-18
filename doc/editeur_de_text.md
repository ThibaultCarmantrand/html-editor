## Sélectionné
- gras                                                          M
- italique                                                      M
- souligné                                                      T
- barré                                                         T
- Alignements:                                                  T
  - Gauche
  - Centré
  - Droit
  - Justifié
- Ancre                                                         T
- Lien                                                          T
- Couleur de texte                                              M
- Couleur de fond                                               M
- Taille                                                        T
- Police                                                        T
- Format:                                                       M
  - h1 ... h6
  - p
  - code
  - pre
  - blockquote
- Effacer le style (désactivé si aucun texte sélectionné)       T

## Pas séléctionné
- HR                                                            M
- Puces:                                                        T
  - OL
  - UL
- Image                                                         M
- Vidéo                                                         M
- Tableau                                                       T
- Afficher le code Source                                       M


- Enregistrer -> Générer du code HTML

On se voit mercredi 22 février chez Margaux.

Trouver un pack d'icônes



### Mise en place de l'environnement de développement

- Installer Node.js
- se placer dans le dossier html-editor
- lancer ma commande : npm install      // Cela installera tous les plugins nécessaires
- lancer la commande : gulp watch       // Les modifications sur tous les fichiers sont surveillées. Le browser est rafraîchi à chaque modification, les fichiers .scss sont compilés en css , autopréfixés puis minifiés. Les fichiers js sont minifiés. Enfin, tous les nouveua fichiers créés par Gulp sont placés dans le dossier dist.

  - Dossier src : dossier de travail / on y travail en Scss (qui sera compilé en CSS par la suite)
  - Dossier dist : dossier où sont créés les fichiers produits par Gulp.
