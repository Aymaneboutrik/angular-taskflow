Angular TaskFlow

Application développée avec Angular dans le cadre de mon apprentissage du framework Angular.

L'objectif de ce projet est de pratiquer les concepts fondamentaux d'Angular à travers la création et la gestion d'une liste de tâches.

Technologies utilisées

Angular 21

TypeScript

HTML5

CSS3

Node.js

npm

Fonctionnalités réalisées

1. Components

Création et organisation des composants Angular.

Séparation de la logique TypeScript et de l'interface HTML.

2. Data Binding

Interpolation {{ }} pour afficher les données.

Event Binding (click) pour gérer les événements.

Property Binding [disabled] pour contrôler les propriétés HTML.

3. Control Flow

@for pour parcourir et afficher une liste de tâches.

@if pour vérifier la présence de données.

@else pour afficher un message alternatif lorsque la liste est vide.

4. Pipes

DatePipe pour formater les dates.

TitleCasePipe pour mettre les premières lettres des mots en majuscules.

5. Gestion des tâches

Chaque tâche possède les propriétés suivantes :

id : identifiant de la tâche.

title : titre de la tâche.

dueDate : date limite de la tâche.

### 5. Custom Pipes (Pipes personnalisés)

Création d'un Pipe personnalisé appelé `TitleColorPipe` pour appliquer une couleur dynamique aux titres des tâches selon leur longueur.

Règles appliquées :
- Si la longueur du titre est supérieure à 4 caractères : couleur rouge (`red`).
- Si la longueur du titre est inférieure ou égale à 4 caractères : couleur verte (`green`).

Concepts utilisés :
- `@Pipe` : déclaration du Pipe personnalisé.
- `PipeTransform` : interface permettant de définir la transformation.
- `transform()` : méthode contenant la logique de transformation.
- `title.length` : vérification de la longueur du titre.
- `[style.color]` : application dynamique de la couleur dans le template.

### 6. Résultat obtenu

L'application permet actuellement de :
- Afficher une liste de tâches contenant un identifiant, un titre et une date limite.
- Parcourir les tâches avec `@for`.
- Gérer une liste vide avec `@if` et `@else`.
- Vider la liste des tâches.
- Formater les dates avec `DatePipe`.
- Transformer les titres avec `TitleCasePipe`.
- Appliquer une couleur dynamique aux titres avec `TitleColorPipe`.