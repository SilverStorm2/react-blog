const initialState = {
  posts: [
    {
      id: '1',
      title: 'Przegląd przed sezonem: co sprawdzić?',
      shortDescription: 'Lista kontroli przed wiosną lub zimą.',
      content:
        'Zaczynamy od sprawdzenia płynów, stanu akumulatora i zużycia klocków. Podnośnik i lampa inspekcyjna pozwolą szybko wykryć wycieki i luzy zawieszenia.',
      publishedDate: new Date('2024-01-15'),
      author: 'Michał Wrona',
      category: 'diagnostyka',
    },
    {
      id: '2',
      title: 'Wymiana oleju: mineralny czy syntetyk?',
      shortDescription: 'Jak dobrać olej do wieku i przebiegu auta.',
      content:
        'Producent podaje lepkość i normę, ale warto uwzględnić styl jazdy oraz interwał wymiany. Wyjaśniamy, kiedy przejść na wyższy indeks i jak zapobiegać odkładaniu nagaru.',
      publishedDate: new Date('2024-02-10'),
      author: 'Anna Wójcik',
      category: 'olej',
    },
    {
      id: '3',
      title: 'Diagnostyka komputerowa: kiedy podpiąć auto?',
      shortDescription: 'Objawy, które wymagają podpięcia pod tester.',
      content:
        'Kontrolka check engine to nie jedyny sygnał. Spadek mocy, szarpanie czy niestabilne obroty często wskazują na błędy zapisane w sterowniku silnika.',
      publishedDate: new Date('2024-03-05'),
      author: 'Paweł Lis',
      category: 'diagnostyka',
    },
    {
      id: '4',
      title: 'Regeneracja klimatyzacji krok po kroku',
      shortDescription: 'Skuteczne odgrzybianie i uzupełnianie czynnika.',
      content:
        'Przed nabiciem układu warto sprawdzić szczelność i stan osuszacza. Pokazujemy, jakie wartości ciśnienia są prawidłowe i kiedy wymienić filtr kabinowy.',
      publishedDate: new Date('2024-04-18'),
      author: 'Katarzyna Domańska',
      category: 'klimatyzacja',
    },
    {
      id: '5',
      title: 'Jak dbać o hamulce w ruchu miejskim',
      shortDescription: 'Co robić, by klocki i tarcze wytrzymały dłużej.',
      content:
        'Częste ruszanie i hamowanie grzeje układ, dlatego kluczowe jest płynne wytracanie prędkości. Wskazujemy, kiedy odpowietrzyć układ i jak dobrać klocki do stylu jazdy.',
      publishedDate: new Date('2024-05-12'),
      author: 'Tomasz Bielecki',
      category: 'mechanika',
    },
    {
      id: '6',
      title: 'Opony całoroczne vs sezonowe',
      shortDescription: 'Kiedy warto inwestować w dwa komplety opon.',
      content:
        'Różnią się mieszanką i rzeźbą bieżnika, co wpływa na drogę hamowania w różnych warunkach. Podajemy progi temperatur i przebiegi, przy których całoroczne mogą się opłacić.',
      publishedDate: new Date('2024-06-07'),
      author: 'Ewa Maj',
      category: 'opony',
    },
    {
      id: '7',
      title: 'Typowe awarie elektryki po zimie',
      shortDescription: 'Najczęstsze problemy z rozruchem i oświetleniem.',
      content:
        'Wilgoć i sól potrafią utlenić złącza oraz osłabić masy. Podpowiadamy, jak sprawdzić pobór prądu na postoju i dlaczego warto profilaktycznie wyczyścić klemy.',
      publishedDate: new Date('2024-07-16'),
      author: 'Grzegorz Kaczmarczyk',
      category: 'elektryka',
    },
    {
      id: '8',
      title: 'Geometria kół: objawy i koszty',
      shortDescription: 'Jak rozpoznać złą zbieżność i kiedy ją ustawić.',
      content:
        'Ściąganie auta, nierówny bieżnik i krzywa kierownica to sygnały do pomiaru geometrii. Wyjaśniamy różnice między ustawieniem zbieżności a pełną geometrią zawieszenia.',
      publishedDate: new Date('2024-08-21'),
      author: 'Julia Pawlak',
      category: 'opony',
    },
    {
      id: '9',
      title: 'Plan serwisowy dla aut dostawczych',
      shortDescription: 'Prosty harmonogram obsługi dla floty.',
      content:
        'Regularne wymiany filtrów, oleju i kontrola układu chłodzenia ograniczają przestoje. Dajemy przykład kalendarza przeglądów dla aut z wysokimi przebiegami miejskimi.',
      publishedDate: new Date('2024-09-30'),
      author: 'Kamil Rutkowski',
      category: 'mechanika',
    },
    {
      id: '10',
      title: 'Check engine na LPG: co sprawdzić?',
      shortDescription: 'Najczęstsze błędy przy instalacji gazowej.',
      content:
        'Błędy mieszanki i wypadanie zapłonów to klasyka przy źle skalibrowanym LPG. Sprawdź korekty długoterminowe, szczelność dolotu i temperaturę reduktora.',
      publishedDate: new Date('2024-10-12'),
      author: 'Michał Wrona',
      category: 'diagnostyka',
    },
    {
      id: '11',
      title: 'Kiedy wymienić pasek rozrządu?',
      shortDescription: 'Interwały i objawy zużycia napędu rozrządu.',
      content:
        'Oprócz przebiegu liczy się wiek i warunki eksploatacji. Wyjaśniamy, czemu warto wymieniać pompę wody i rolki razem z paskiem.',
      publishedDate: new Date('2024-10-28'),
      author: 'Anna Wójcik',
      category: 'mechanika',
    },
    {
      id: '12',
      title: 'Skrzynia automatyczna: statyczna czy dynamiczna wymiana oleju?',
      shortDescription: 'Plusy i minusy dwóch metod serwisowych.',
      content:
        'Dynamiczna wymiana lepiej usuwa stary olej, ale wymaga odpowiedniego sprzętu i know-how. Podajemy orientacyjne koszty i przebiegi serwisowe.',
      publishedDate: new Date('2024-11-08'),
      author: 'Katarzyna Domańska',
      category: 'skrzynia',
    },
    {
      id: '13',
      title: 'Regeneracja turbo: kiedy ma sens?',
      shortDescription: 'Objawy zużycia i kosztorys regeneracji.',
      content:
        'Dymienie, gwizd i olej w dolocie wskazują na turbodoładowanie do przeglądu. Sprawdzamy, kiedy regeneracja jest opłacalna, a kiedy lepiej kupić nowe turbo.',
      publishedDate: new Date('2024-11-20'),
      author: 'Paweł Lis',
      category: 'turbo',
    },
    {
      id: '14',
      title: 'Jak zabezpieczyć lakier na zimę',
      shortDescription: 'Quick detailer czy powłoka? Porównanie metod.',
      content:
        'Mycie na dwa wiadra, glinkowanie i wosk hybrydowy to minimum przed zimą. Wskazujemy, jak przygotować nadkola i progi na sól drogową.',
      publishedDate: new Date('2024-12-02'),
      author: 'Julia Pawlak',
      category: 'detailing',
    },
    {
      id: '15',
      title: 'Montaż haka holowniczego: formalności i elektryka',
      shortDescription: 'Co trzeba zgłosić i jak podpiąć moduł.',
      content:
        'Po montażu haka należy wykonać adnotację w dowodzie rejestracyjnym. Podpowiadamy, jak poprawnie poprowadzić wiązkę i kiedy moduł CAN jest obowiązkowy.',
      publishedDate: new Date('2024-12-11'),
      author: 'Ewa Maj',
      category: 'nadwozie',
    },
    {
      id: '16',
      title: 'Świece żarowe w dieslu: wymieniać komplet czy pojedynczo?',
      shortDescription: 'Ryzyka urwania i najlepsze praktyki.',
      content:
        'Przy dużym przebiegu wymiana kompletu ogranicza różnice oporu. Wyjaśniamy, czemu warto użyć preparatu penetrującego i rozgrzać silnik przed demontażem.',
      publishedDate: new Date('2024-12-20'),
      author: 'Grzegorz Kaczmarczyk',
      category: 'diesel',
    },
    {
      id: '17',
      title: 'Hamulce w autach elektrycznych',
      shortDescription: 'Jak rekuperacja wpływa na tarcze i klocki.',
      content:
        'Rzadkie użycie hamulców może powodować korozję tarcz. Zalecamy okresowe mocniejsze hamowania i serwis czyszczenia prowadnic, by uniknąć piszczenia.',
      publishedDate: new Date('2025-01-07'),
      author: 'Tomasz Bielecki',
      category: 'elektryka',
    },
    {
      id: '18',
      title: 'Jak dbać o filtr DPF',
      shortDescription: 'Regeneracje, dodatki i jazda autostradowa.',
      content:
        'Unikaj krótkich tras w trybie niedogrzanym. Regularne wypalanie serwisowe oraz kontrola czujników różnicy ciśnień wydłużają życie filtra.',
      publishedDate: new Date('2025-01-18'),
      author: 'Kamil Rutkowski',
      category: 'diesel',
    },
    {
      id: '19',
      title: 'Serwis układu chłodzenia',
      shortDescription: 'Płukanie, odpowietrzanie i dobór płynu.',
      content:
        'Mieszanie kolorów nie zawsze jest błędem, liczy się norma. Pokazujemy, jak odpowietrzyć układ z termostatem elektrycznym i kiedy wymienić korek zbiorniczka.',
      publishedDate: new Date('2025-02-02'),
      author: 'Michał Wrona',
      category: 'mechanika',
    },
    {
      id: '20',
      title: 'Upgrade audio w aucie',
      shortDescription: 'Od mat wygłuszających po wzmacniacz z DSP.',
      content:
        'Kluczem jest wygłuszenie drzwi i poprawne zasilanie. Podajemy, kiedy potrzebny jest procesor dźwięku i jak dobrać kabel zasilający do mocy wzmacniacza.',
      publishedDate: new Date('2025-02-15'),
      author: 'Anna Wójcik',
      category: 'audio',
    },
    {
      id: '21',
      title: 'Klimatyzacja: R1234yf vs R134a',
      shortDescription: 'Różnice serwisowe i koszty czynnika.',
      content:
        'Nowy czynnik jest droższy i wymaga innej stacji obsługi. Wyjaśniamy, dlaczego nie wolno mieszać czynników i jak sprawdzić typ układu w swoim aucie.',
      publishedDate: new Date('2025-03-01'),
      author: 'Katarzyna Domańska',
      category: 'klimatyzacja',
    },
  ],
  categories: [
    { id: 'mechanika', name: 'Mechanika' },
    { id: 'diagnostyka', name: 'Diagnostyka' },
    { id: 'opony', name: 'Opony i zawieszenie' },
    { id: 'olej', name: 'Serwis olejowy' },
    { id: 'klimatyzacja', name: 'Klimatyzacja' },
    { id: 'elektryka', name: 'Elektryka i elektronika' },
    { id: 'skrzynia', name: 'Skrzynie biegów' },
    { id: 'turbo', name: 'Turbo i dolot' },
    { id: 'detailing', name: 'Detailing i nadwozie' },
    { id: 'nadwozie', name: 'Montaż i nadwozie' },
    { id: 'diesel', name: 'Diesel' },
    { id: 'audio', name: 'Audio i komfort' },
  ],
};

export default initialState;
