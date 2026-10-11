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
      'Italienische Küche mit mediterraner Seele, schwäbische Küche, ausgewählte regionale Spezialitäten und eine warme Atmosphäre nahe Friedrichshafen.',
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
      'Italian cuisine with a Mediterranean soul, Swabian dishes, regional specialties and a warm atmosphere near Friedrichshafen.',
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
      'Cucina italiana dal cuore mediterraneo, specialità sveve e regionali, in un’atmosfera accogliente vicino a Friedrichshafen.',
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

const menuDescriptions = {
  en: {
    101: 'Seasonal leafy greens, potato salad, cucumber and tomatoes.',
    102: 'Leafy greens, potato salad, cucumber, tomatoes, sheep’s cheese and onions.',
    103: 'Diced tomatoes with basil and garlic.',
    104: 'Diced tomatoes with mozzarella and olives.',
    105: 'A selection of grilled and marinated vegetables.',
    106: 'Buffalo mozzarella with tomatoes.',
    107: 'Fresh tomatoes and onions.',
    108: 'Thinly sliced beef on rocket with olive oil and Parmesan shavings.',
    201: 'With garlic and oregano.',
    202: 'With tomato sauce, garlic and oregano.',
    203: 'Served on a leaf and rocket salad with cranberries.',
    204: 'Three spicy prawns served with pizza bread.',
    301: 'With homemade savoury pancake strips, vegetable strips and diced beef.',
    302: 'With fresh basil, croutons and a little cream.',
    303: 'With meat and diced tomatoes.',
    401: 'Seasonal leaf and raw vegetable salad with ham, egg and toasted seeds.',
    402: 'Salad with pan-fried chicken breast, dressing and fresh fruit.',
    403: 'Cucumber and tomato salad with olives, tuna, pepperoncini, onions and mozzarella.',
    404: 'Seasonal salad with grilled zander fillet and homemade dressing.',
    501: 'With a fruity tomato sauce.',
    502: 'With garlic, olive oil and fresh chilli.',
    503: 'With a tomato sauce made with minced beef.',
    504: 'With ham, onions, cream sauce and egg.',
    505: 'With grilled vegetables and tomato cream sauce.',
    506: 'In a spicy tomato and garlic sauce with Parmesan shavings.',
    507: 'With prawns or salmon, vegetable strips and garlic in white wine sauce.',
    508: 'With fresh chilli and garlic in a spicy tomato sauce.',
    509: 'With ham, mushrooms, broccoli and Gorgonzola sauce.',
    510: 'With chicken breast, mushrooms and pineapple in curry cream sauce.',
    511: 'With porcini mushrooms, three prawns and tomatoes in white wine sauce.',
    512: 'With grilled broccoli and sage butter sauce.',
    513: 'With spinach and four-cheese sauce.',
    601: 'With minced beef, béchamel sauce and melted cheese.',
    602: 'Filled with spinach and goat’s cheese, topped with melted cheese.',
    603: 'Pasta and grilled vegetables in cream sauce, baked with cheese.',
    604: 'Penne with roast beef strips, mushrooms and pepper cream sauce, baked with cheese.',
    701: 'Beer-battered perch fillet with homemade remoulade and salad garnish.',
    702: 'With vegetables and rice in white wine and garlic sauce.',
    703: 'With peperonata and rosemary potatoes.',
    704: 'With lemon, garlic and homemade gnocchi.',
    705: 'With remoulade sauce and mixed salad.',
    706: 'Grilled salmon fillet with garlic cream sauce and grilled vegetables.',
    801: 'With French fries.',
    802: 'With mushroom cream sauce and homemade Spätzle.',
    803: 'With French fries.',
    804: 'Pork medallions with mushroom cream sauce and homemade potato croquettes.',
    805: 'In red wine jus on homemade Spätzle with fried onions.',
    806: 'Veal schnitzel in a Parmesan and egg crust, with tomato sauce and homemade gnocchi.',
    807: 'With sour cream, chilli mint and pepper cream dips, plus French fries.',
    808: 'Rump steak with pepper cream sauce and homemade potato croquettes.',
    809: 'Roast beef with three prawns, grilled tomato, herb butter and fried potatoes.',
    810: 'In curry and ginger sauce with pineapple, served with butter rice.',
    811: 'With grilled rosemary chicken breast, served with fresh ciabatta.',
    901: 'With homemade potato salad.',
    902: 'With fried onions and green salad.',
    903: 'With fried onions, potato salad or salad garnish.',
    904: 'Beef with fried onions, Maultaschen on cheese Spätzle and gravy.',
    905: 'Beef, pork and chicken medallions on cheese Spätzle with cream sauce.',
    1001: 'With homemade sour cream dip, tomato and rocket.',
    1002: 'With farmhouse bread (EUR 11.90) or fried potatoes (EUR 13.90).',
    1003: 'With farmhouse bread (EUR 12.90) or fried potatoes (EUR 14.90).',
    1101: 'Tomato sauce, mozzarella and oregano.',
    1102: 'Tomato sauce, mozzarella and salami.',
    1103: 'Tomato sauce, mozzarella and ham.',
    1104: 'Tomato sauce, mozzarella and mushrooms.',
    1105: 'Tomato sauce, fresh tomatoes and mozzarella.',
    1106: 'Tomato sauce, mozzarella, ham and mushrooms.',
    1107: 'Tomato sauce, cheese, ham and pineapple.',
    1108: 'Tomato sauce, mozzarella, salsiccia, green pepperoncini, garlic and chilli oil.',
    1109: 'Tomato sauce, mozzarella, mushrooms, olives, aubergine, artichokes and peppers.',
    1110: 'Tomato sauce, mozzarella, ham, salami, mushrooms and artichokes.',
    1111: 'Tomato sauce, mozzarella, tuna, olives and onions.',
    1112: 'Tomato sauce, mozzarella, salsiccia, mushrooms and onions.',
    1113: 'Tomato sauce, mozzarella, garlic, prawns, rocket and Parmesan shavings.',
    1114: 'Tomato sauce, Parma ham, Gorgonzola and rocket.',
    1115: 'Tomato sauce, mozzarella, ham and mushrooms.',
    1116: 'Tomato sauce, mozzarella and rocket.',
    1117: 'Tomato sauce, mozzarella, ham, mushrooms, olives and mild pepperoncini.',
    1118: 'Tomato sauce and four different cheeses.',
    1119: 'Tomato sauce, mozzarella, smoked salmon, onions and rocket.',
    1120: 'Tomato sauce, mozzarella, seafood and onions.',
    1121: 'Tomato sauce, mozzarella, anchovies, onions, garlic and hot chilli oil.',
    1122: 'Black dough, white garlic sauce, mozzarella, smoked salmon, rocket, Parmesan and onions.',
    1123: 'Black dough, white garlic sauce, mozzarella, chicken strips, fresh tomatoes and onions.',
    1124: 'Tomato sauce, mozzarella, garlic, peppers and chicken strips.',
    1125: 'Tomato sauce, mozzarella, salsiccia, anchovies, Carpano, onions, garlic and chilli oil.',
    1126: 'Tomato sauce, mozzarella, minced beef, egg and onions.',
    1127: 'Tomato sauce, mozzarella, spinach, sheep’s cheese, cherry tomatoes and egg.',
    1201: 'With tomato sauce.',
    1202: 'With cream sauce.',
    1203: 'With French fries.',
    1205: 'With tomato sauce, mozzarella and salami.',
    1301: 'Espresso with vanilla ice cream.',
    1302: 'Homemade, served in a glass with cream.',
    1303: 'Italian style. Available outside the summer season only.',
    1304: 'Chef’s daily selection, garnished with fresh fruit.',
    1305: 'Available outside the summer season only. Topped with caramel.',
    1306: 'With cinnamon, sugar, vanilla ice cream and cream.',
    1307: 'Chocolate lava cake with an ice cream and cream.',
    1308: 'Choice of ice cream flavours.',
    1309: 'Choice of ice cream flavours.',
    'Tasse Tchibo Caffè Crema': 'Classic coffee.',
    Espresso: 'Single (EUR 2.20) or double (EUR 3.80).',
    Cappuccino: 'Freshly prepared.',
    'Latte Macchiato': 'Coffee with milk, served in a glass.',
    'Heiße Schokolade': 'Classic (EUR 3.90) or with cream (EUR 4.90).',
    'Glas Tee nach Wahl': 'Choose from green, black, peppermint, fruit or herbal tea.',
    Tafelwasser: '0.2 l (EUR 2.70) or 0.4 l (EUR 4.20).',
    'Mineralwasser medium / still': '0.25 l (EUR 3.50) or 0.75 l (EUR 5.70).',
    'Seezüngle Schorle': 'Pear, rhubarb or aronia, 0.33 l.',
    'Cola, Limonade, Spezi, Cola Zero und Eistee': 'Available in 0.2 l or 0.4 l.',
    Saftschorlen: 'Apple, orange, blackcurrant, passion fruit, elderflower, raspberry or woodruff.',
    'Offener Weißwein': 'Müller-Thurgau, Seetröpfle, Riesling, Frascati, Pinot Grigio or Chardonnay.',
    'Offener Rotwein': "Spätburgunder, Lambrusco, Merlot, Chianti, Nero d'Avola, Primitivo or Montepulciano.",
    'Rosé & alkoholfreie Weine': 'Rosé by the glass, plus alcohol-free white, red and rosé wines.',
    Flaschenweine: 'White and red wine, 0.75 l bottle.',
    'Aperol Spritz': 'Aperol with Prosecco, sparkling water and orange.',
    Hugo: 'Prosecco with sparkling water, elderflower syrup and fresh mint.',
    'Gin Tonic / Wodka Lemon': 'Long drink, 4 cl.',
    'Härle Landzüngle Naturtrüb vom Fass': '0.3 l (EUR 4.00) or 0.5 l (EUR 4.80).',
    'Härle Export Gold vom Fass': '0.3 l (EUR 4.00) or 0.5 l (EUR 4.80).',
    Weizenbier: 'Wheat beer, alcohol-free, light, dark, crystal, cola wheat beer or Russ.',
  },
  it: {
    101: 'Insalate a foglia di stagione, insalata di patate, cetrioli e pomodori.',
    102: 'Insalate a foglia, insalata di patate, cetrioli, pomodori, formaggio di pecora e cipolle.',
    103: 'Pomodori a dadini con basilico e aglio.',
    104: 'Pomodori a dadini con mozzarella e olive.',
    105: 'Selezione di verdure grigliate e marinate.',
    106: 'Mozzarella di bufala con pomodori.',
    107: 'Pomodori freschi e cipolle.',
    108: 'Fettine di manzo su rucola con olio d’oliva e scaglie di parmigiano.',
    201: 'Con aglio e origano.',
    202: 'Con salsa di pomodoro, aglio e origano.',
    203: 'Servito su insalata verde e rucola con mirtilli rossi.',
    204: 'Tre gamberi piccanti serviti con pane per pizza.',
    301: 'Con striscioline di crespella fatta in casa, verdure e dadini di manzo.',
    302: 'Con basilico fresco, crostini e un tocco di panna.',
    303: 'Con carne e pomodori a dadini.',
    401: 'Insalata di stagione e verdure crude con prosciutto, uovo e semi tostati.',
    402: 'Insalata con petto di pollo saltato, condimento e frutta fresca.',
    403: 'Insalata di cetrioli e pomodori con olive, tonno, peperoncini, cipolle e mozzarella.',
    404: 'Insalata di stagione con filetto di lucioperca alla griglia e condimento fatto in casa.',
    501: 'Con salsa di pomodoro dal gusto fruttato.',
    502: 'Con aglio, olio d’oliva e peperoncino fresco.',
    503: 'Con salsa di pomodoro e carne macinata di manzo.',
    504: 'Con prosciutto, cipolle, panna e uovo.',
    505: 'Con verdure grigliate e salsa di pomodoro e panna.',
    506: 'Con salsa piccante di pomodoro e aglio e scaglie di parmigiano.',
    507: 'Con gamberi o salmone, verdure a striscioline e aglio in salsa al vino bianco.',
    508: 'Con peperoncino fresco e aglio in salsa piccante di pomodoro.',
    509: 'Con prosciutto, funghi, broccoli e salsa al Gorgonzola.',
    510: 'Con petto di pollo, funghi e ananas in salsa cremosa al curry.',
    511: 'Con porcini, tre gamberi e pomodori in salsa al vino bianco.',
    512: 'Con broccoli grigliati e salsa al burro e salvia.',
    513: 'Con spinaci e salsa ai quattro formaggi.',
    601: 'Con carne macinata di manzo, besciamella e formaggio gratinato.',
    602: 'Ripieni di spinaci e formaggio di capra, gratinati con formaggio.',
    603: 'Pasta e verdure grigliate in salsa di panna, gratinate con formaggio.',
    604: 'Penne con straccetti di roast beef, funghi e salsa cremosa al pepe, gratinate con formaggio.',
    701: 'Filetto di pesce persico in pastella alla birra con salsa remoulade fatta in casa e insalata.',
    702: 'Con verdure e riso in salsa al vino bianco e aglio.',
    703: 'Con peperonata e patate al rosmarino.',
    704: 'Con limone, aglio e gnocchi fatti in casa.',
    705: 'Con salsa remoulade e insalata mista.',
    706: 'Filetto di salmone alla griglia con salsa cremosa all’aglio e verdure grigliate.',
    801: 'Con patatine fritte.',
    802: 'Con salsa cremosa ai funghi e Spätzle fatti in casa.',
    803: 'Con patatine fritte.',
    804: 'Medaglioni di maiale con salsa cremosa ai funghi e crocchette di patate fatte in casa.',
    805: 'In salsa al vino rosso su Spätzle fatti in casa con cipolle fritte.',
    806: 'Cotoletta di vitello impanata con parmigiano e uovo, con salsa di pomodoro e gnocchi fatti in casa.',
    807: 'Con salse di panna acida, menta e peperoncino e crema al pepe, con patatine fritte.',
    808: 'Bistecca di manzo con salsa cremosa al pepe e crocchette di patate fatte in casa.',
    809: 'Roast beef con tre gamberi, pomodoro grigliato, burro alle erbe e patate saltate.',
    810: 'In salsa al curry e zenzero con ananas, servito con riso al burro.',
    811: 'Con petto di pollo grigliato al rosmarino, servito con ciabatta fresca.',
    901: 'Con insalata di patate fatta in casa.',
    902: 'Con cipolle fritte e insalata verde.',
    903: 'Con cipolle fritte, insalata di patate o contorno d’insalata.',
    904: 'Manzo con cipolle fritte, Maultaschen su Spätzle al formaggio e salsa d’arrosto.',
    905: 'Medaglioni di manzo, maiale e pollo su Spätzle al formaggio con salsa alla panna.',
    1001: 'Con salsa alla panna acida fatta in casa, pomodoro e rucola.',
    1002: 'Con pane casereccio (11,90 EUR) oppure patate saltate (13,90 EUR).',
    1003: 'Con pane casereccio (12,90 EUR) oppure patate saltate (14,90 EUR).',
    1101: 'Salsa di pomodoro, mozzarella e origano.',
    1102: 'Salsa di pomodoro, mozzarella e salame.',
    1103: 'Salsa di pomodoro, mozzarella e prosciutto.',
    1104: 'Salsa di pomodoro, mozzarella e funghi.',
    1105: 'Salsa di pomodoro, pomodori freschi e mozzarella.',
    1106: 'Salsa di pomodoro, mozzarella, prosciutto e funghi.',
    1107: 'Salsa di pomodoro, formaggio, prosciutto e ananas.',
    1108: 'Salsa di pomodoro, mozzarella, salsiccia, peperoncini verdi, aglio e olio al peperoncino.',
    1109: 'Salsa di pomodoro, mozzarella, funghi, olive, melanzane, carciofi e peperoni.',
    1110: 'Salsa di pomodoro, mozzarella, prosciutto, salame, funghi e carciofi.',
    1111: 'Salsa di pomodoro, mozzarella, tonno, olive e cipolle.',
    1112: 'Salsa di pomodoro, mozzarella, salsiccia, funghi e cipolle.',
    1113: 'Salsa di pomodoro, mozzarella, aglio, gamberi, rucola e scaglie di parmigiano.',
    1114: 'Salsa di pomodoro, prosciutto di Parma, Gorgonzola e rucola.',
    1115: 'Salsa di pomodoro, mozzarella, prosciutto e funghi.',
    1116: 'Salsa di pomodoro, mozzarella e rucola.',
    1117: 'Salsa di pomodoro, mozzarella, prosciutto, funghi, olive e peperoncini dolci.',
    1118: 'Salsa di pomodoro e quattro formaggi diversi.',
    1119: 'Salsa di pomodoro, mozzarella, salmone affumicato, cipolle e rucola.',
    1120: 'Salsa di pomodoro, mozzarella, frutti di mare e cipolle.',
    1121: 'Salsa di pomodoro, mozzarella, acciughe, cipolle, aglio e olio piccante al peperoncino.',
    1122: 'Impasto nero, salsa bianca all’aglio, mozzarella, salmone affumicato, rucola, parmigiano e cipolle.',
    1123: 'Impasto nero, salsa bianca all’aglio, mozzarella, straccetti di pollo, pomodori freschi e cipolle.',
    1124: 'Salsa di pomodoro, mozzarella, aglio, peperoni e straccetti di pollo.',
    1125: 'Salsa di pomodoro, mozzarella, salsiccia, acciughe, Carpano, cipolle, aglio e olio al peperoncino.',
    1126: 'Salsa di pomodoro, mozzarella, carne macinata di manzo, uovo e cipolle.',
    1127: 'Salsa di pomodoro, mozzarella, spinaci, formaggio di pecora, pomodorini e uovo.',
    1201: 'Con salsa di pomodoro.',
    1202: 'Con salsa alla panna.',
    1203: 'Con patatine fritte.',
    1205: 'Con salsa di pomodoro, mozzarella e salame.',
    1301: 'Espresso con gelato alla vaniglia.',
    1302: 'Fatta in casa, servita in bicchiere con panna.',
    1303: 'All’italiana. Disponibile solo fuori dalla stagione estiva.',
    1304: 'Secondo la proposta del giorno, guarnito con frutta fresca.',
    1305: 'Disponibile solo fuori dalla stagione estiva. Ricoperto di caramello.',
    1306: 'Con cannella, zucchero, gelato alla vaniglia e panna.',
    1307: 'Tortino al cioccolato con gelato e panna.',
    1308: 'Gusti di gelato a scelta.',
    1309: 'Gusti di gelato a scelta.',
    'Tasse Tchibo Caffè Crema': 'Caffè classico.',
    Espresso: 'Singolo (2,20 EUR) o doppio (3,80 EUR).',
    Cappuccino: 'Preparato al momento.',
    'Latte Macchiato': 'Caffè latte servito in bicchiere.',
    'Heiße Schokolade': 'Classica (3,90 EUR) oppure con panna (4,90 EUR).',
    'Glas Tee nach Wahl': 'Tè verde, nero, alla menta, alla frutta o alle erbe.',
    Tafelwasser: '0,2 l (2,70 EUR) o 0,4 l (4,20 EUR).',
    'Mineralwasser medium / still': '0,25 l (3,50 EUR) o 0,75 l (5,70 EUR).',
    'Seezüngle Schorle': 'Pera, rabarbaro o aronia, 0,33 l.',
    'Cola, Limonade, Spezi, Cola Zero und Eistee': 'Disponibile da 0,2 l o 0,4 l.',
    Saftschorlen: 'Mela, arancia, ribes nero, frutto della passione, sambuco, lampone o asperula.',
    'Offener Weißwein': 'Müller-Thurgau, Seetröpfle, Riesling, Frascati, Pinot Grigio o Chardonnay.',
    'Offener Rotwein': "Spätburgunder, Lambrusco, Merlot, Chianti, Nero d'Avola, Primitivo o Montepulciano.",
    'Rosé & alkoholfreie Weine': 'Rosé al calice e vini bianchi, rossi e rosé analcolici.',
    Flaschenweine: 'Vino bianco e rosso, bottiglia da 0,75 l.',
    'Aperol Spritz': 'Aperol con Prosecco, acqua frizzante e arancia.',
    Hugo: 'Prosecco con acqua frizzante, sciroppo di sambuco e menta fresca.',
    'Gin Tonic / Wodka Lemon': 'Long drink, 4 cl.',
    'Härle Landzüngle Naturtrüb vom Fass': '0,3 l (4,00 EUR) o 0,5 l (4,80 EUR).',
    'Härle Export Gold vom Fass': '0,3 l (4,00 EUR) o 0,5 l (4,80 EUR).',
    Weizenbier: 'Birra di frumento: hefeweizen, analcolica, leggera, scura, kristall, colaweizen o russ.',
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
          const localizedDescription = menuDescriptions[language]?.[number || name] ?? description;
          const haystack = normalize(
            `${number} ${name} ${description} ${localizedDescription} ${price} ${badge || ''}`
          );
          return !cleanQuery || haystack.includes(cleanQuery);
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeSection, language, query]);

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
                          <p>{menuDescriptions[language]?.[number || name] ?? description}</p>
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
