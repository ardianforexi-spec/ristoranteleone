import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Clock, Mail, MapPin, Phone, Search, Star, Utensils, Wine } from 'lucide-react';
import './styles.css';

const contact = {
  phone: '+49 7542 9789558',
  phoneHref: '+4975429789558',
  email: 'info@ristorante-leone.eu',
  address: 'Hauptstraße 136, 88074 Meckenbeuren',
};

const languageCopy = {
  de: {
    nav: ['Über uns', 'Speisekarte', 'Kontakt'],
    heroLead:
      'Italienische Küche mit mediterraner Seele, ausgewählte regionale Spezialitäten und eine warme Atmosphäre nahe Friedrichshafen.',
    reserve: 'Tisch reservieren',
    call: 'Jetzt anrufen',
    panelFood: 'Italienisch, Pizza, mediterran und schwäbische Spezialitäten',
    openingHours: 'Mo-Sa 17:30-22:00, So 11:30-14:00 & 17:30-22:00',
    aboutLabel: 'Geschichte',
    aboutTitle: 'Italienische Gastlichkeit am Bodensee',
    aboutOne:
      'Das Ristorante Pizzeria Leone liegt an der Hauptstraße 136 in Meckenbeuren, in der Nähe des Hotel Löwen und nur wenige Minuten von Friedrichshafen entfernt.',
    aboutTwo:
      'Alle Gerichte, Kroketten, Maultaschen, Spätzle, Soßen und Dressings werden frisch und hausgemacht zubereitet. Jede Pizza und jedes Ofengericht wird mit Mozzarella verfeinert.',
    menuLabel: 'Speisekarte',
    menuTitle: 'Unsere komplette Speisekarte',
    menuText:
      'Wählen Sie eine Kategorie oder suchen Sie direkt nach Ihrem Lieblingsgericht. Extra Zutaten bei allen Gerichten: 1,50 EUR bis 2,00 EUR.',
    search: 'Gericht suchen',
    menuFeature: 'Leone Auswahl',
    menuFeatureTitle: (count) => `${count} Gerichte und Getränke auf einen Blick`,
    menuFeatureText:
      'Pizza mit Mozzarella, hausgemachte Spätzle und Maultaschen, frische Soßen, regionale Klassiker und italienische Lieblingsgerichte.',
    contactLabel: 'Kontakt',
    contactTitle: 'Reservieren oder direkt anfragen',
    contactText:
      'Für Reservierungen, Gruppenanfragen oder kurze Rückfragen erreichen Sie das Team direkt per Telefon oder E-Mail.',
    mapTitle: 'Anfahrt',
    mapFrameTitle: 'Karte mit dem Standort des Ristorante Pizzeria Leone',
    addressLabel: 'Adresse',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    emailCta: 'Reservierung per E-Mail',
    phoneCta: 'Telefonisch kontaktieren',
    googleMaps: 'Google Maps',
    noResults: 'Keine Gerichte gefunden.',
    items: (count) => `${count} Positionen`,
    badges: { Empfehlung: 'Empfehlung', Gästeliebling: 'Gästeliebling' },
    reservationSubject: 'Reservierungsanfrage - Ristorante Leone',
    reservationBody:
      'Guten Tag Ristorante Leone,\n\nich möchte gerne einen Tisch reservieren.\n\nName:\nDatum:\nUhrzeit:\nPersonen:\nTelefon:\n\nVielen Dank!',
  },
  en: {
    nav: ['About us', 'Menu', 'Contact'],
    heroLead:
      'Italian cuisine with a Mediterranean soul, regional specialties and a warm atmosphere near Friedrichshafen.',
    reserve: 'Book a table',
    call: 'Call us',
    panelFood: 'Italian, pizza, Mediterranean and Swabian specialties',
    openingHours: 'Mon-Sat 5:30-10:00 pm, Sun 11:30 am-2:00 pm & 5:30-10:00 pm',
    aboutLabel: 'Our story',
    aboutTitle: 'Italian hospitality on Lake Constance',
    aboutOne:
      'Ristorante Pizzeria Leone is at Hauptstraße 136 in Meckenbeuren, near Hotel Löwen and just a few minutes from Friedrichshafen.',
    aboutTwo:
      'Our dishes, croquettes, Maultaschen, Spätzle, sauces and dressings are freshly prepared in-house. Every pizza and oven-baked dish is finished with mozzarella.',
    menuLabel: 'Menu',
    menuTitle: 'Our full menu',
    menuText:
      'Choose a category or search for your favourite dish. Extra toppings for all dishes: EUR 1.50 to EUR 2.00.',
    search: 'Search dishes',
    menuFeature: 'Leone selection',
    menuFeatureTitle: (count) => `${count} dishes and drinks to explore`,
    menuFeatureText:
      'Mozzarella pizza, homemade Spätzle and Maultaschen, fresh sauces, regional classics and Italian favourites.',
    contactLabel: 'Contact',
    contactTitle: 'Book a table or get in touch',
    contactText: 'For reservations, group bookings or questions, contact our team by phone or email.',
    mapTitle: 'Find us',
    mapFrameTitle: 'Map showing the location of Ristorante Pizzeria Leone',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    emailCta: 'Reserve by email',
    phoneCta: 'Call the restaurant',
    googleMaps: 'Google Maps',
    noResults: 'No dishes found.',
    items: (count) => `${count} items`,
    badges: { Empfehlung: 'Recommended', Gästeliebling: 'Guest favourite' },
    reservationSubject: 'Table reservation - Ristorante Leone',
    reservationBody:
      'Hello Ristorante Leone,\n\nI would like to reserve a table.\n\nName:\nDate:\nTime:\nNumber of guests:\nPhone:\n\nThank you!',
  },
  it: {
    nav: ['Chi siamo', 'Menù', 'Contatti'],
    heroLead:
      'Cucina italiana dal cuore mediterraneo, specialità regionali e un’atmosfera accogliente vicino a Friedrichshafen.',
    reserve: 'Prenota un tavolo',
    call: 'Chiamaci',
    panelFood: 'Specialità italiane, pizza, cucina mediterranea e sveva',
    openingHours: 'Lun-Sab 17:30-22:00, Dom 11:30-14:00 e 17:30-22:00',
    aboutLabel: 'La nostra storia',
    aboutTitle: 'Ospitalità italiana sul Lago di Costanza',
    aboutOne:
      'Il Ristorante Pizzeria Leone si trova in Hauptstraße 136 a Meckenbeuren, vicino all’Hotel Löwen e a pochi minuti da Friedrichshafen.',
    aboutTwo:
      'I nostri piatti, le crocchette, i Maultaschen, gli Spätzle, le salse e i condimenti sono preparati freschi in casa. Ogni pizza e piatto al forno è arricchito con mozzarella.',
    menuLabel: 'Menù',
    menuTitle: 'Il nostro menù completo',
    menuText:
      'Scegli una categoria o cerca il tuo piatto preferito. Ingredienti extra per tutti i piatti: da 1,50 EUR a 2,00 EUR.',
    search: 'Cerca un piatto',
    menuFeature: 'La selezione Leone',
    menuFeatureTitle: (count) => `${count} piatti e bevande da scoprire`,
    menuFeatureText:
      'Pizza con mozzarella, Spätzle e Maultaschen fatti in casa, salse fresche, classici regionali e specialità italiane.',
    contactLabel: 'Contatti',
    contactTitle: 'Prenota o contattaci',
    contactText: 'Per prenotazioni, gruppi o informazioni, contatta il nostro team per telefono o e-mail.',
    mapTitle: 'Dove siamo',
    mapFrameTitle: 'Mappa con la posizione del Ristorante Pizzeria Leone',
    addressLabel: 'Indirizzo',
    phoneLabel: 'Telefono',
    emailLabel: 'E-mail',
    emailCta: 'Prenota via e-mail',
    phoneCta: 'Chiama il ristorante',
    googleMaps: 'Google Maps',
    noResults: 'Nessun piatto trovato.',
    items: (count) => `${count} proposte`,
    badges: { Empfehlung: 'Consigliato', Gästeliebling: 'Preferito dagli ospiti' },
    reservationSubject: 'Richiesta di prenotazione - Ristorante Leone',
    reservationBody:
      'Buongiorno Ristorante Leone,\n\ndesidero prenotare un tavolo.\n\nNome:\nData:\nOrario:\nNumero di persone:\nTelefono:\n\nGrazie!',
  },
};

const sectionTranslations = {
  en: {
    vorspeisen: ['Starters & salads', 'A selection of hot and cold Leone kitchen starters.'],
    suppen: ['Soups', 'Homemade soups to start your meal.'],
    salate: ['Salads', 'Fresh salad plates with homemade dressing.'],
    pasta: ['Pasta & oven-baked dishes', 'Pasta, lasagne, cannelloni and baked specialties.'],
    fisch: ['Fish dishes', 'Mediterranean fish and seafood.'],
    grill: ['From the grill, pan & pot', 'Pork, beef, veal and chicken.'],
    schwaebisch: ['Swabian classics & light meals', 'Fresh, homemade regional cuisine.'],
    pizza: ['Pizza', 'Every pizza is prepared with mozzarella.'],
    'kinder-dessert': ['Children’s dishes & desserts', 'For younger guests and a sweet finish.'],
    getraenke: ['Drinks, wine & beer', 'Hot and cold drinks, wine, aperitifs, spirits and beer.'],
  },
  it: {
    vorspeisen: ['Antipasti e insalate', 'Antipasti caldi e freddi della cucina Leone.'],
    suppen: ['Zuppe', 'Zuppe fatte in casa per iniziare il pasto.'],
    salate: ['Insalate', 'Insalate fresche con condimento fatto in casa.'],
    pasta: ['Pasta e piatti al forno', 'Pasta, lasagne, cannelloni e specialità gratinate.'],
    fisch: ['Piatti di pesce', 'Pesce e frutti di mare preparati alla mediterranea.'],
    grill: ['Alla griglia, in padella e in pentola', 'Maiale, manzo, vitello e pollo.'],
    schwaebisch: ['Classici svevi e piatti rustici', 'Cucina regionale fresca e fatta in casa.'],
    pizza: ['Pizza', 'Ogni pizza è preparata con mozzarella.'],
    'kinder-dessert': ['Piatti per bambini e dessert', 'Per i più piccoli e per concludere in dolcezza.'],
    getraenke: ['Bevande, vino e birra', 'Bevande calde e fredde, vini, aperitivi, liquori e birra.'],
  },
};

const menuSections = [
  {
    id: 'vorspeisen',
    title: 'Vorspeisen & Salate',
    note: 'Kalte und warme Vorspeisen aus der Leone Küche.',
    items: [
      ['101', 'Kleiner gemischter Salat', 'Saisonale Blattsalate, Kartoffelsalat, Gurken und Tomaten.', '6,90 EUR'],
      ['102', 'Großer gemischter Salat', 'Blattsalate, Kartoffelsalat, Gurken, Tomaten, Hirtenkäse und Zwiebeln.', '9,90 EUR'],
      ['103', 'Bruschetta Classica', 'Mit Tomatenwürfeln, Basilikum und Knoblauch.', '6,90 EUR'],
      ['104', 'Bruschetta Mozzarella', 'Mit Tomatenwürfeln, Mozzarella und Oliven.', '7,90 EUR', 'Empfehlung'],
      ['105', 'Antipasti-Teller', 'Verschiedene gegrillte und marinierte Gemüsesorten.', '8,90 EUR'],
      ['106', 'Insalata Caprese', 'Mozzarella di Bufala mit Tomaten.', '7,90 EUR'],
      ['107', 'Tomaten-Zwiebel-Salat', 'Frische Tomaten und frische Zwiebeln.', '6,90 EUR'],
      ['108', 'Carpaccio', 'Rinderfiletscheiben auf Rucola mit Olivenöl und Parmesanspänen.', '14,90 EUR'],
      ['201', 'Pizzabrot Knoblauch', 'Mit Knoblauch und Oregano.', '6,90 EUR'],
      ['202', 'Pizzabrot Sugo', 'Mit Tomatensugo, Knoblauch und Oregano.', '7,70 EUR', 'Gästeliebling'],
      ['203', 'Gebackener Ziegenkäse', 'Auf Blatt- und Rucolasalat mit Preiselbeeren.', '14,20 EUR'],
      ['204', 'Knoblauch-Chili-Garnelen', 'Drei scharf zubereitete Garnelen mit Pizzabrot.', '12,90 EUR'],
    ],
  },
  {
    id: 'suppen',
    title: 'Suppen',
    note: 'Hausgemachte Suppen für den warmen Start.',
    items: [
      ['301', 'Rindsbouillon', 'Mit hausgemachten Flädle, Gemüsestreifen und Rindfleischwürfeln.', '7,90 EUR', 'Empfehlung'],
      ['302', 'Tomatensuppe', 'Mit frischem Basilikum, Croûtons und einem Sahnehäubchen.', '6,90 EUR'],
      ['303', 'Zwiebelsuppe', 'Mit Fleischeinlage und Tomatenwürfeln.', '8,90 EUR'],
    ],
  },
  {
    id: 'salate',
    title: 'Salate',
    note: 'Frische Salatplatten mit hausgemachtem Dressing.',
    items: [
      ['401', 'Chefsalat', 'Saisonale Blatt- und Rohkostsalate mit Schinken, Ei und gerösteten Kernen.', '12,50 EUR'],
      ['402', 'Fruchtiger Fitness-Salat', 'Salate mit gebratener Hähnchenbrust, Dressing und frischen Früchten.', '14,20 EUR'],
      ['403', 'Salatplatte Nizza', 'Gurken- und Tomatensalat mit Oliven, Thunfisch, Peperoni, Zwiebeln und Mozzarella.', '13,90 EUR'],
      ['404', 'Salatplatte Bodensee', 'Saisonale Salate mit gegrilltem Zanderfilet und hausgemachtem Dressing.', '18,90 EUR', 'Empfehlung'],
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta & Aus dem Backofen',
    note: 'Pasta, Lasagne, Cannelloni und gratinierte Spezialitäten.',
    items: [
      ['501', 'Spaghetti Napoli', 'Mit fruchtiger Tomatensoße.', '10,90 EUR'],
      ['502', 'Spaghetti Aglio, Olio e Peperoncino', 'Mit Knoblauch, Olivenöl und frischem Chili.', '11,50 EUR'],
      ['503', 'Spaghetti Bolognese', 'Mit Rinderhackfleisch-Tomatensoße.', '13,50 EUR'],
      ['504', 'Spaghetti Carbonara', 'Mit Schinken, Zwiebeln in Sahnesoße und Ei.', '12,90 EUR'],
      ['505', 'Spaghetti Vegetale', 'Mit Grillgemüse und Tomaten-Sahnesoße.', '12,50 EUR'],
      ['506', 'Spaghetti Frutti di Mare', 'In pikanter Tomaten-Knoblauch-Soße mit Parmesanspänen.', '15,90 EUR'],
      ['507', 'Penne/Spaghetti Gamberetti oder Salmone', 'Mit Garnelen oder Lachs, Gemüsestreifen und Knoblauch in Weißweinsoße.', '15,60 EUR'],
      ['508', "Penne all'Arrabiata", 'Mit frischem Chili und Knoblauch in pikantem Tomatensugo.', '11,90 EUR'],
      ['509', 'Penne Gorgonzola', 'Mit Schinken, Champignons, Broccoli und Gorgonzolasoße.', '13,90 EUR'],
      ['510', 'Tagliatelle Di Pollo', 'Mit Hähnchenbrust, Champignons und Ananas in Curry-Rahmsoße.', '15,20 EUR'],
      ['511', 'Tagliatelle Steinpilz', 'Mit Steinpilzen, drei Garnelen und Tomaten in Weißweinsoße.', '15,90 EUR', 'Empfehlung'],
      ['512', 'Tortellini Grande mit Steinpilzfüllung', 'Mit gegrilltem Broccoli und Salbei-Buttersoße.', '14,90 EUR'],
      ['513', 'Ravioli mit Spinatfüllung', 'Mit Spinat und 4-Käse-Soße.', '14,50 EUR'],
      ['601', 'Lasagne al Forno', 'Mit Rinderhackfleisch-Béchamelsoße und Käse überbacken.', '13,90 EUR'],
      ['602', 'Cannelloni al Forno', 'Mit Spinat-Ziegenkäse-Füllung und Käse überbacken.', '14,90 EUR'],
      ['603', 'Gemüse-Nudel-Gratin', 'Nudeln und Grillgemüse in Sahnesoße, mit Käse überbacken.', '14,90 EUR'],
      ['604', 'Penne al Cotto', 'Penne mit Roastbeefstreifen, Champignons und Pfefferrahmsoße, mit Käse überbacken.', '18,90 EUR'],
    ],
  },
  {
    id: 'fisch',
    title: 'Fischgerichte',
    note: 'Fisch und Meeresfrüchte mediterran zubereitet.',
    items: [
      ['701', 'Egli Knusperli', 'Eglifilet im Bierteig mit hausgemachter Remouladensoße und Salatgarnitur.', '19,50 EUR'],
      ['702', 'Zanderfilet', 'Mit Gemüse und Reis, in Weißweinsoße mit Knoblauch.', '22,50 EUR'],
      ['703', 'Dorade alla Toscana', 'Mit Peperonata und Rosmarinkartoffeln.', '24,90 EUR', 'Empfehlung'],
      ['704', 'Gebratene Frutti di Mare', 'Mit Zitronenscheiben, Knoblauch und hausgemachten Gnocchi.', '20,90 EUR'],
      ['705', 'Frittierte Calamari', 'Mit Remouladensoße und buntem Salat.', '18,90 EUR'],
      ['706', 'Salmone alla Griglia', 'Lachsfilet vom Grill mit Knoblauchcreme-Soße und gegrilltem Gemüse.', '22,90 EUR'],
    ],
  },
  {
    id: 'grill',
    title: 'Vom Grill, aus Pfanne & Topf',
    note: 'Schwein, Rind, Kalb und Hähnchen.',
    items: [
      ['801', 'Schweineschnitzel Wiener Art', 'Mit Pommes frites.', '16,90 EUR'],
      ['802', 'Pilzrahmschnitzel', 'Mit Champignonrahmsoße und hausgemachten Spätzle.', '20,50 EUR', 'Empfehlung'],
      ['803', 'Cordon Bleu vom Schwein', 'Mit Pommes frites.', '19,90 EUR'],
      ['804', 'Piastra Leone - Löwenteller', 'Schweinemedaillons mit Champignonrahmsoße und hausgemachten Kartoffelkroketten.', '21,90 EUR'],
      ['805', 'Zwiebelrostbraten', 'In Rotweinjus auf hausgemachten Spätzle mit Röstzwiebeln.', '23,90 EUR'],
      ['806', 'Piccata Milanese', 'Kalbsschnitzel in Parmesan-Eihülle, mit Tomatensoße und hausgemachten Gnocchi.', '24,90 EUR', 'Empfehlung'],
      ['807', 'Rumpsteak mit dreierlei Dips (170 g)', 'Mit Sour Cream, Chili-Minze, Pfefferrahm und Pommes frites.', '23,90 EUR'],
      ['808', 'Pfeffersteak (170 g)', 'Rumpsteak mit Pfefferrahmsoße und hausgemachten Kartoffelkroketten.', '23,90 EUR'],
      ['809', 'Grillteller Surf & Turf (170 g)', 'Roastbeef mit drei Garnelen, Grilltomate, Kräuterbutter und Bratkartoffeln.', '25,90 EUR'],
      ['810', 'Curry-Hähnchenbrustfilet', 'In Curry-Ingwer-Soße mit Ananas, dazu Butterreis im Töpfchen.', '17,50 EUR'],
      ['811', 'Sizilianischer Aubergineneintopf', 'Mit Rosmarin-Hähnchenbrust vom Grill, dazu frisches Ciabatta.', '17,90 EUR', 'Empfehlung'],
    ],
  },
  {
    id: 'schwaebisch',
    title: 'Schwäbische Klassiker & Vesper',
    note: 'Regionale Küche, frisch und hausgemacht.',
    items: [
      ['901', 'Bratwurst', 'Mit hausgemachtem Kartoffelsalat.', '11,90 EUR'],
      ['902', 'Käsespätzle', 'Mit Röstzwiebeln und grünem Salat.', '12,90 EUR'],
      ['903', 'Maultaschen hausgemacht', 'Mit Röstzwiebeln, Kartoffelsalat oder Salatgarnitur.', '14,90 EUR'],
      ['904', 'Schwabenteller', 'Zwiebelrostbraten mit Maultaschen auf Käsespätzle, Röstzwiebeln und Bratensoße.', '25,20 EUR'],
      ['905', 'Allgäuer Spieß', 'Rinder-, Schweine- und Hähnchenbrustmedaillons auf Käsespätzle mit Rahmsoße.', '26,50 EUR', 'Empfehlung'],
      ['1001', 'Ofenkartoffel', 'Mit hausgemachtem Sauerrahm-Dip, Tomate und Rucola.', '10,90 EUR'],
      ['1002', 'Wurstsalat', 'Mit Bauernbrot 11,90 EUR oder mit Bratkartoffeln 13,90 EUR.', 'ab 11,90 EUR'],
      ['1003', 'Schweizer Wurstsalat', 'Mit Bauernbrot 12,90 EUR oder mit Bratkartoffeln 14,90 EUR.', 'ab 12,90 EUR'],
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    note: 'Jede Pizza wird mit Mozzarella zubereitet.',
    items: [
      ['1101', 'Pizza Margherita', 'Tomatensoße, Mozzarella und Oregano.', '9,50 EUR'],
      ['1102', 'Pizza Salami', 'Tomatensoße, Mozzarella und Salami.', '10,90 EUR'],
      ['1103', 'Pizza Prosciutto', 'Tomatensoße, Mozzarella und Schinken.', '10,90 EUR'],
      ['1104', 'Pizza Funghi', 'Tomatensoße, Mozzarella und Champignons.', '10,90 EUR'],
      ['1105', 'Pizza Caprese', 'Tomatensoße, frische Tomaten und Mozzarella.', '11,90 EUR'],
      ['1106', 'Pizza Regina', 'Tomatensoße, Mozzarella, Schinken und Champignons.', '11,90 EUR'],
      ['1107', 'Pizza Hawaii', 'Tomatensoße, Käse, Schinken und Ananas.', '11,90 EUR'],
      ['1108', 'Pizza Diavola', 'Tomatensoße, Mozzarella, Salsiccia, grüne Peperoni, Knoblauch und Chiliöl.', '12,90 EUR', 'Gästeliebling'],
      ['1109', 'Pizza Vegetale', 'Tomatensoße, Mozzarella, Champignons, Oliven, Aubergine, Artischocken und Paprika.', '12,90 EUR'],
      ['1110', 'Pizza Mista', 'Tomatensoße, Mozzarella, Schinken, Salami, Champignons und Artischocken.', '13,90 EUR'],
      ['1111', 'Pizza Tonno', 'Tomatensoße, Mozzarella, Thunfisch, Oliven und Zwiebeln.', '13,90 EUR'],
      ['1112', 'Pizza Calabrese', 'Tomatensoße, Mozzarella, Salsiccia, Champignons und Zwiebeln.', '13,90 EUR'],
      ['1113', 'Pizza Gamberetti', 'Tomatensoße, Mozzarella, Knoblauch, Garnelen, Rucola und Parmesanspäne.', '13,90 EUR'],
      ['1114', 'Pizza Leone', 'Tomatensoße, Parmaschinken, Gorgonzola und Rucola.', '13,90 EUR'],
      ['1115', 'Pizza Calzone', 'Tomatensoße, Mozzarella, Schinken und Champignons.', '11,90 EUR'],
      ['1116', 'Pizza Tri Colori', 'Tomatensoße, Mozzarella und Rucola.', '11,50 EUR'],
      ['1117', 'Pizza Quattro Stagioni', 'Tomatensoße, Mozzarella, Schinken, Champignons, Oliven und milde Peperoni.', '12,90 EUR'],
      ['1118', 'Pizza Quattro Formaggi', 'Tomatensoße und vier verschiedene Käsesorten.', '13,90 EUR'],
      ['1119', 'Pizza Salmone', 'Tomatensoße, Mozzarella, Räucherlachs, Zwiebeln und Rucola.', '14,90 EUR'],
      ['1120', 'Pizza di Mare', 'Tomatensoße, Mozzarella, Frutti di Mare und Zwiebeln.', '14,50 EUR'],
      ['1121', 'Pizza Siziliano', 'Tomatensoße, Mozzarella, Sardellen, Zwiebeln, Knoblauch und scharfes Chiliöl.', '14,90 EUR'],
      ['1122', 'Pizza Nero Leone', 'Schwarzer Teig, weiße Knoblauchsoße, Mozzarella, Räucherlachs, Rucola, Parmesan und Zwiebeln.', '15,50 EUR', 'Empfehlung'],
      ['1123', 'Pizza Albanese', 'Schwarzer Teig, weiße Knoblauchsoße, Mozzarella, Hähnchenstreifen, frische Tomaten und Zwiebeln.', '15,30 EUR', 'Empfehlung'],
      ['1124', 'Pizza Di Polo', 'Tomatensoße, Mozzarella, Knoblauch, Paprika und Hähnchenstreifen.', '13,90 EUR'],
      ['1125', 'Pizza Don Albano', 'Tomatensoße, Mozzarella, Salsiccia, Sardellen, Carpano, Zwiebeln, Knoblauch und Chiliöl.', '15,90 EUR'],
      ['1126', 'Pizza Bolognese', 'Tomatensoße, Mozzarella, Rinderhackfleisch, Ei und Zwiebeln.', '14,90 EUR'],
      ['1127', 'Pizza Spinaci', 'Tomatensoße, Mozzarella, Blattspinat, Hirtenkäse, Kirschtomaten und Ei.', '14,50 EUR'],
    ],
  },
  {
    id: 'kinder-dessert',
    title: 'Kindergerichte & Desserts',
    note: 'Für kleine Gäste und für den süßen Abschluss.',
    items: [
      ['1201', 'Pasta - Nudel', 'Mit Tomatensoße.', '9,90 EUR'],
      ['1202', 'Spätzle', 'Mit Rahmsoße.', '10,20 EUR'],
      ['1203', 'Hausgemachte Hähnchen Nuggets', 'Mit Pommes frites.', '11,50 EUR', 'Empfehlung'],
      ['1205', 'Pizza Bambini', 'Mit Tomatensoße, Mozzarella und Salami.', '10,50 EUR'],
      ['1301', 'Affogato', 'Espresso mit Vanille-Eis.', '4,90 EUR'],
      ['1302', 'Panna Cotta mit Himbeersoße', 'Hausgemacht, im Glas serviert mit Sahne.', '6,90 EUR'],
      ['1303', 'Tiramisu', 'Italienische Art. Nur außerhalb der Sommersaison erhältlich.', '7,50 EUR'],
      ['1304', 'Fruchtsorbet', 'Nach Tagesangebot, mit Früchten garniert.', '8,50 EUR'],
      ['1305', 'Trilece', 'Nur außerhalb der Sommersaison erhältlich. Mit Karamell übergossen.', '7,90 EUR'],
      ['1306', 'Apfelküchle', 'Mit Zimt und Zucker, Vanilleeis und Sahnehäubchen.', '8,90 EUR'],
      ['1307', 'Kleines Lava', 'Lavakuchen mit Schokoladenkern, serviert mit Eis und Sahne.', '8,50 EUR'],
      ['1308', 'Zwei Kugeln Eis', 'Eissorten nach Wahl.', '3,20 EUR'],
      ['1309', 'Drei Kugeln Eis', 'Eissorten nach Wahl.', '4,70 EUR'],
    ],
  },
  {
    id: 'getraenke',
    title: 'Getränke, Wein & Bier',
    note: 'Warme Getränke, alkoholfreie Getränke, Wein, Aperitif, Spirituosen und Bier.',
    items: [
      ['', 'Tasse Tchibo Caffè Crema', 'Kaffee klassisch.', '2,90 EUR'],
      ['', 'Espresso', 'Einfach 2,20 EUR oder doppelt 3,80 EUR.', 'ab 2,20 EUR'],
      ['', 'Cappuccino', 'Frisch zubereitet.', '4,30 EUR'],
      ['', 'Latte Macchiato', 'Milchkaffee im Glas.', '4,60 EUR'],
      ['', 'Heiße Schokolade', 'Classic 3,90 EUR oder mit Sahne 4,90 EUR.', 'ab 3,90 EUR'],
      ['', 'Glas Tee nach Wahl', 'Grüner Tee, Schwarztee, Pfefferminztee, Früchtetee oder Kräutertee.', '3,90 EUR'],
      ['', 'Tafelwasser', '0,2 l 2,70 EUR oder 0,4 l 4,20 EUR.', 'ab 2,70 EUR'],
      ['', 'Mineralwasser medium / still', '0,25 l 3,50 EUR oder 0,75 l 5,70 EUR.', 'ab 3,50 EUR'],
      ['', 'Seezüngle Schorle', 'Birne, Rhabarber oder Aronia, 0,33 l.', '4,20 EUR'],
      ['', 'Cola, Limonade, Spezi, Cola Zero und Eistee', '0,2 l 3,50 EUR oder 0,4 l 4,50 EUR.', 'ab 3,50 EUR'],
      ['', 'Saftschorlen', 'Apfel, Orange, Johannisbeere, Maracuja, Holunderblüte, Himbeere oder Waldmeister.', 'ab 3,50 EUR'],
      ['', 'Offener Weißwein', 'Müller-Thurgau, Seetröpfle, Riesling, Frascati, Pinot Grigio, Chardonnay.', 'ab 5,60 EUR'],
      ['', 'Offener Rotwein', "Spätburgunder, Lambrusco, Merlot, Chianti, Nero d'Avola, Primitivo, Montepulciano.", 'ab 5,60 EUR'],
      ['', 'Rosé & alkoholfreie Weine', 'Rosé offen sowie Weißwein, Rotwein und Rosé alkoholfrei.', 'ab 5,50 EUR'],
      ['', 'Flaschenweine', 'Weißwein und Rotwein, 0,75 l.', 'ab 26,00 EUR'],
      ['', 'Aperol Spritz', 'Aperol mit Prosecco, Sodawasser und Orangenscheibe.', '8,20 EUR'],
      ['', 'Hugo', 'Mit Prosecco, Sodawasser, Holunderblütensirup und frischer Minze.', '8,00 EUR'],
      ['', 'Gin Tonic / Wodka Lemon', 'Longdrink, 4 cl.', '7,90 EUR'],
      ['', 'Härle Landzüngle Naturtrüb vom Fass', '0,3 l 4,00 EUR oder 0,5 l 4,80 EUR.', 'ab 4,00 EUR'],
      ['', 'Härle Export Gold vom Fass', '0,3 l 4,00 EUR oder 0,5 l 4,80 EUR.', 'ab 4,00 EUR'],
      ['', 'Weizenbier', 'Hefeweizen, alkoholfrei, leicht, dunkel, Kristallweizen, Colaweizen oder Russenweizen.', 'ab 4,80 EUR'],
    ],
  },
];

const gallery = [
  {
    src: '/images/restaurant-interior-1.jpg',
    alt: {
      de: 'Gastraum des Ristorante Pizzeria Leone',
      en: 'Dining room at Ristorante Pizzeria Leone',
      it: 'Sala del Ristorante Pizzeria Leone',
    },
  },
  {
    src: '/images/restaurant-interior-2.jpg',
    alt: {
      de: 'Sitzbereich im Ristorante Pizzeria Leone',
      en: 'Seating area at Ristorante Pizzeria Leone',
      it: 'Area con tavoli del Ristorante Pizzeria Leone',
    },
  },
  {
    src: '/images/restaurant-interior-3.jpg',
    alt: {
      de: 'Innenansicht des Ristorante Pizzeria Leone',
      en: 'Interior of Ristorante Pizzeria Leone',
      it: 'Interno del Ristorante Pizzeria Leone',
    },
  },
];

function normalize(value) {
  return value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('leone-language');
    return savedLanguage === 'en' || savedLanguage === 'it' ? savedLanguage : 'de';
  });
  const [activeSection, setActiveSection] = useState(menuSections[0].id);
  const [query, setQuery] = useState('');
  const copy = languageCopy[language];
  const reservationSubject = encodeURIComponent(copy.reservationSubject);
  const reservationBody = encodeURIComponent(copy.reservationBody);
  const mailHref = `mailto:${contact.email}?subject=${reservationSubject}&body=${reservationBody}`;
  const mapQuery = encodeURIComponent(`Ristorante Pizzeria Leone, ${contact.address}`);
  const totalItems = menuSections.reduce((sum, section) => sum + section.items.length, 0);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('leone-language', language);
  }, [language]);

  const visibleSections = useMemo(() => {
    const cleanQuery = normalize(query.trim());

    return menuSections
      .filter((section) => cleanQuery || section.id === activeSection)
      .map((section) => ({
        ...section,
        items: section.items.filter(([number, name, description, price, badge]) => {
          const haystack = normalize(`${number} ${name} ${description} ${price} ${badge || ''}`);
          return !cleanQuery || haystack.includes(cleanQuery);
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeSection, query]);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Ristorante Leone home">
          <span>Leone</span>
          <small>Ristorante Pizzeria</small>
        </a>
        <div className="navLinks">
          <a href="#about">{copy.nav[0]}</a>
          <a href="#menu">{copy.nav[1]}</a>
          <a href="#contact">{copy.nav[2]}</a>
        </div>
        <div
          className="navTools"
          aria-label={{ de: 'Sprache wählen', en: 'Choose language', it: 'Seleziona la lingua' }[language]}
        >
          {['de', 'en', 'it'].map((option) => (
            <button
              key={option}
              type="button"
              className={`lang${language === option ? ' active' : ''}`}
              aria-pressed={language === option}
              aria-label={{ de: 'Deutsch', en: 'English', it: 'Italiano' }[option]}
              onClick={() => setLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
        <a className="iconButton" href={`tel:${contact.phoneHref}`} aria-label={copy.call}>
          <Phone size={19} />
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">
            <MapPin size={16} /> Meckenbeuren am Bodensee
          </p>
          <h1>Ristorante Pizzeria Leone</h1>
          <p className="lead">{copy.heroLead}</p>
          <div className="heroActions">
            <a className="primaryBtn" href={mailHref}>
              {copy.reserve} <ArrowRight size={18} />
            </a>
            <a className="secondaryBtn" href={`tel:${contact.phoneHref}`}>
              {copy.call}
            </a>
          </div>
        </div>
        <div className="heroPanel">
          <div>
            <Star size={18} />
            <span>{copy.panelFood}</span>
          </div>
          <div>
            <Clock size={18} />
            <span>{copy.openingHours}</span>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="sectionIntro">
          <p className="eyebrow dark">
            <Wine size={16} /> {copy.aboutLabel}
          </p>
          <h2>{copy.aboutTitle}</h2>
          <p>{copy.aboutOne}</p>
          <p>{copy.aboutTwo}</p>
        </div>
        <div className="aboutGrid">
          {gallery.map(({ src, alt }) => (
            <img key={src} src={src} alt={alt[language]} />
          ))}
        </div>
      </section>

      <section id="menu" className="section menuSection">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow dark">
              <Utensils size={16} /> {copy.menuLabel}
            </p>
            <h2>{copy.menuTitle}</h2>
          </div>
          <p>{copy.menuText}</p>
        </div>

        <div className="menuToolbar" aria-label={copy.menuLabel}>
          <div className="searchBox">
            <Search size={18} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.search}
              aria-label={copy.search}
            />
          </div>
          <div className="menuTabs">
            {menuSections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => setActiveSection(section.id)}
              >
                {sectionTranslations[language]?.[section.id]?.[0] ?? section.title}
              </button>
            ))}
          </div>
        </div>

        <div className="menuBoard full">
          <aside className="menuFeature">
            <span>{copy.menuFeature}</span>
            <h3>{copy.menuFeatureTitle(totalItems)}</h3>
            <p>{copy.menuFeatureText}</p>
            <img
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=85"
              alt={{
                de: 'Italienische Speisen auf einem Tisch',
                en: 'Italian dishes served at a table',
                it: 'Piatti italiani serviti a tavola',
              }[language]}
            />
          </aside>

          <div className="menuCatalog" aria-live="polite">
            {visibleSections.length === 0 ? (
              <p className="emptyMenu">{copy.noResults}</p>
            ) : (
              visibleSections.map((section) => (
                <article className="menuCategory" key={section.id}>
                  <header>
                    <div>
                      <span>{copy.items(section.items.length)}</span>
                      <h3>{sectionTranslations[language]?.[section.id]?.[0] ?? section.title}</h3>
                    </div>
                    <p>{sectionTranslations[language]?.[section.id]?.[1] ?? section.note}</p>
                  </header>
                  <div className="menuRows">
                    {section.items.map(([number, name, description, price, badge]) => (
                      <div className="menuRow" key={`${section.id}-${number}-${name}`}>
                        <div className="dishText">
                          <h4>
                            {name}
                            {badge ? <em>{copy.badges[badge] ?? badge}</em> : null}
                          </h4>
                          <p>{description}</p>
                        </div>
                        <strong>{price}</strong>
                      </div>
                    ))}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contactShell">
          <div className="contactInfo">
            <p className="eyebrow">
              <Mail size={16} /> {copy.contactLabel}
            </p>
            <h2>{copy.contactTitle}</h2>
            <p>{copy.contactText}</p>
            <div className="contactList">
              <a href={`https://maps.google.com/?q=${mapQuery}`}>
                <span>{copy.addressLabel}</span>
                <strong>
                  <MapPin size={20} /> {contact.address}
                </strong>
              </a>
              <a href={`tel:${contact.phoneHref}`}>
                <span>{copy.phoneLabel}</span>
                <strong>
                  <Phone size={20} /> {contact.phone}
                </strong>
              </a>
              <a href={`mailto:${contact.email}`}>
                <span>{copy.emailLabel}</span>
                <strong>
                  <Mail size={20} /> {contact.email}
                </strong>
              </a>
            </div>
            <div className="contactActions">
              <a className="primaryBtn light" href={mailHref}>
                {copy.emailCta}
              </a>
              <a className="secondaryBtn light" href={`tel:${contact.phoneHref}`}>
                {copy.phoneCta}
              </a>
            </div>
          </div>
          <div className="mapCard">
            <div className="mapHeader">
              <span>{copy.mapTitle}</span>
              <a href={`https://maps.google.com/?q=${mapQuery}`}>{copy.googleMaps}</a>
            </div>
            <iframe
              title={copy.mapFrameTitle}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer>
        <span>Ristorante Pizzeria Leone</span>
        <span>{contact.address}</span>
        <span>{contact.phone}</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
