# Donnees webcams

Liste statique des webcams affichees par l'application.
Remplace l'ancien appel a l'API Windy v2, qui a ete retiree par Windy.

## Format d'une entree

```json
{
  "id": "identifiant-unique-en-kebab-case",
  "title": "Titre lisible affiche sous l'iframe ou l'image",
  "category": "mountain | beach | city",
  "image": "URL d'une image statique de secours (toujours requise)",
  "embedUrl": "URL d'iframe d'une webcam live (optionnelle, peut etre null)"
}
```

## Comportement de rendu

- Si `embedUrl` est defini : l'application affiche un `<iframe>` (webcam live).
- Sinon : l'application affiche un `<img>` avec le champ `image` (mode statique).

## Comment ajouter une vraie webcam live

Remplace `embedUrl: null` par une URL d'iframe valide. Quelques sources qui exposent
un iframe public :

- **YouTube Live (24/7)** : `https://www.youtube.com/embed/<videoId>`
  ou par chaine : `https://www.youtube.com/embed/live_stream?channel=<channelId>`
- **SkylineWebcams** : ouvrir la page d'une cam, cliquer "Embed", copier l'URL `src`
  de l'iframe fourni.
- **EarthCam, Explore.org** : meme principe, recuperer l'iframe depuis le bouton de
  partage / embed du site.

Pense a verifier de temps en temps que les `embedUrl` repondent toujours :
si une chaine/cam disparait, l'iframe affiche une page d'erreur.
