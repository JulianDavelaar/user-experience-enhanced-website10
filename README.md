# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Een uitleentool voor Cool kunst en cultuur om hierin bij te houden welke instrumenten en aan wie ze worden uitgeleend. 
https://the-web-is-for-everyone-interactive-w3o0.onrender.com/
<img width="1295" height="369" alt="image" src="https://github.com/user-attachments/assets/f4c90d23-f4d1-4a8b-a970-ba87a6395b52" />

<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->

## Gebruik
Als gebruiker van de uitleensoftware van preludenfonds wil ik instrumenten op een overzichtelijke manier kunnen innemen en uitlenen om zo het overzicht te bewaren van alle instrumenten die er zijn.
De uitleentool werkt als een lijst om snel te kunnen zien waar instrumenten zich bevinden, de status en eigenschappen van instrumenten kan aangepast worden en verbonden worden met een naam/contract om snel te kunnen zien bij wie het instrument zich bevind. 
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

## Ontwerpkeuzes & ideeën


Bij het maken van deze website heb ik gewerkt volgens het principe van Progressive Enhancement. Dit betekent dat ik ben begonnen met een simpele basis die altijd werkt, en deze daarna stap voor stap heb uitgebreid.
Ik ben gestart met alleen HTML, waarbij alle belangrijke functionaliteiten al werken zonder CSS of JavaScript. Denk aan het bekijken van instrumenten en het versturen van een aanvraag via een formulier. Door gebruik te maken van semantische elementen blijft de website duidelijk en bruikbaar in alle situaties.

Daarna heb ik CSS toegevoegd om de website overzichtelijker en gebruiksvriendelijker te maken. De layout is verbeterd en er is visuele hiërarchie aangebracht, zodat het meteen duidelijk is wat belangrijk is. Ook zorgen states zoals hover en focus voor betere feedback bij interactie.
Als laatste heb ik JavaScript gebruikt voor extra interactie en feedback. Deze laag is niet noodzakelijk voor de core functionaliteit, maar maakt de ervaring wel sneller en prettiger.

Een bewuste keuze is dat formulieren via de server werken (POST requests), zodat alles altijd blijft functioneren zonder afhankelijk te zijn van JavaScript.
Daarnaast heb ik rekening gehouden met verschillende UI states, zodat het voor de gebruiker altijd duidelijk is wat er gebeurt. Ook is de website mobile-first opgebouwd, waardoor ik vanuit een simpele basis ben gaan uitbreiden.

Door deze aanpak blijft de website altijd werkend, toegankelijk en stap voor stap verbeterd.

## Kenmerken
Technieken: liquid, CSS, NodeJS, JS
De Liquid structuur is zo simpel en overzichtelijk mogelijk gehouden hierin wordt gebruik gemaakt van tags om dynamische data te tonen, de css is uitgebreid en sluit goed aan op de liquid met de juiste class names. Met JS worden routes voor request en responses gemaakt om de database te kunnen updaten. 
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

## Installatie
Mijn repo is te forken en kan door iedereen lokaal bewerkt worden. 
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
