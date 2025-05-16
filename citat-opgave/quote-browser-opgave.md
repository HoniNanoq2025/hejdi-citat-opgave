
# ReactJS Opgave: Quote Browser

## ✨ Opgavebeskrivelse

Du skal bygge en simpel ReactJS-applikation kaldet **Quote Browser**, hvor brugeren kan:

- Se en liste med citater (hentet via API)
- Søge og filtrere i citaterne
- Sortere efter forfatter eller længde
- Se detaljer for hvert citat via en dynamisk route
- Gemme favoritter i localStorage

Projektet skal bruge:

- `fetch` med `async/await` og `try/catch`
- Moderne `useEffect`
- `react-router-dom` med `Routes` og `Route`
- `localStorage`
- Modulbaseret CSS (`module.css`)
- God komponentstruktur

### 🔗 API

- Endpoint: `https://dummyjson.com/quotes`
- Eksempel på ét quote-objekt:

```json
{
  "id": 1,
  "quote": "Time is a great teacher, but unfortunately it kills all its pupils.",
  "author": "Louis Hector Berlioz"
}
```

---

## 🧠 Funktioner du skal implementere

### ✅ Fetch med `async/await` og `try/catch`
Hent citaterne fra API'et og håndter fejl.

### ✅ Dynamisk søgning og filtrering
Brug inputfelt og state til at søge i både citat-tekst og forfatter.

### ✅ Sortering
Giv mulighed for at sortere efter forfatter (A-Z) eller længden på citatet.

### ✅ Routing
Brug `react-router-dom` til at oprette:
- Hjemmesiden `/` med oversigt
- Detaljeside `/quote/:id`
- Favoritside `/favorites`

### ✅ localStorage
Gem brugerens favoritcitater lokalt og lad brugeren se eller fjerne dem igen.

### ✅ Modul CSS
Styling skal være opdelt i moduler med `.module.css` og følge komponenterne.

---

## 🗂 Projektstruktur (forslag)

```
/src
  /components
    FilterSort.jsx
    QuoteCard.jsx
    QuoteList.jsx
  /pages
    Home.jsx
    QuoteDetail.jsx
    Favorites.jsx
  /styles
    FilterSort.module.css
    QuoteCard.module.css
  App.jsx
  main.jsx
```

---

## 📌 Ekstra ideer (valgfrit)

- Dark mode med `useState`
- Kopiér citat til clipboard
- Tilføj pagination (vis fx kun 5 ad gangen)
- Tilføj en knap "Random Quote"

---

## 🧪 Test API'et hurtigt
Gå til [https://dummyjson.com/quotes](https://dummyjson.com/quotes) i din browser for at se den fulde struktur af JSON.

---

## 🧑‍💻 Krav til aflevering

- Bruger `fetch`, `async/await`, `try/catch`
- Benytter moderne `useEffect`
- Bruger komponentstruktur og `module.css`
- Indeholder filtrering og sortering
- Bruger `react-router-dom` med `Routes` og `Route`
- Bruger `localStorage` til favoritfunktionalitet

---

📁 Projektet afleveres som et GitHub link ved aflevering. Deadline d. 16. maj 2025 kl. 14.00!
