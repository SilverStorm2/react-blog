const initialState = {
  posts: [
    {
      id: '1',
      title: 'AI od podstaw: czym jest uczenie nadzorowane?',
      shortDescription: 'Najprostszy model mentalny: dane, etykiety i generalizacja.',
      content:
        'Uczenie nadzorowane polega na dopasowaniu funkcji, która mapuje wejście na poprawną odpowiedź na podstawie przykładów. Omówimy zbiory treningowe i walidacyjne, przeuczenie oraz to, dlaczego jakość etykiet ma większe znaczenie niż “więcej danych”.',
      publishedDate: new Date('2024-01-15'),
      author: 'Michał Wrona',
      category: 'podstawy',
    },
    {
      id: '2',
      title: 'Embeddingi: jak działają i do czego służą?',
      shortDescription: 'Wektory, podobieństwo semantyczne i wyszukiwanie bez słów-kluczy.',
      content:
        'Embedding to reprezentacja tekstu (lub obrazu) w przestrzeni wektorowej. Pokazujemy, jak mierzyć podobieństwo (cosine), jak dobrać model do języka oraz na co uważać przy budowie indeksu (chunking, deduplikacja, aktualizacje).',
      publishedDate: new Date('2024-02-10'),
      author: 'Anna Wójcik',
      category: 'rag',
    },
    {
      id: '3',
      title: 'Prompt engineering bez magii',
      shortDescription: 'Jak pisać polecenia, które są powtarzalne i testowalne.',
      content:
        'Dobre prompty to struktura, kontekst i jasne kryteria. Omawiamy role, format wyjścia (JSON), przykłady few-shot oraz techniki ograniczania halucynacji poprzez źródła i instrukcje “jeśli nie wiesz — powiedz”.',
      publishedDate: new Date('2024-03-05'),
      author: 'Paweł Lis',
      category: 'llm',
    },
    {
      id: '4',
      title: 'RAG krok po kroku: od dokumentów do odpowiedzi',
      shortDescription: 'Retrieval-Augmented Generation w praktyce: pipeline i pułapki.',
      content:
        'RAG łączy wyszukiwanie (retrieval) z generowaniem (LLM). Przechodzimy przez przygotowanie dokumentów, chunking, dobór retrievera, reranking i cytowanie źródeł, aby odpowiedzi były weryfikowalne.',
      publishedDate: new Date('2024-04-18'),
      author: 'Katarzyna Domańska',
      category: 'rag',
    },
    {
      id: '5',
      title: 'Fine-tuning vs prompt: kiedy co wybrać?',
      shortDescription: 'Decyzja zależy od danych, stabilności zadania i kosztów utrzymania.',
      content:
        'Nie każde zadanie wymaga trenowania modelu. Porównujemy fine-tuning, adaptery (LoRA) i podejście “prompt + narzędzia”, z naciskiem na ewaluację jakości, kontrolę regresji i koszty inference.',
      publishedDate: new Date('2024-05-12'),
      author: 'Tomasz Bielecki',
      category: 'llm',
    },
    {
      id: '6',
      title: 'Metryki jakości: accuracy to za mało',
      shortDescription: 'Jak mierzyć modele w zależności od celu biznesowego.',
      content:
        'Dla klasyfikacji liczą się m.in. precision/recall i ROC-AUC, a dla LLM — zgodność z formatem, poprawność faktów i przydatność odpowiedzi. Pokazujemy, jak zbudować zestaw testowy i uniknąć “metric gaming”.',
      publishedDate: new Date('2024-06-07'),
      author: 'Ewa Maj',
      category: 'ocena',
    },
    {
      id: '7',
      title: 'Halucynacje modeli: skąd się biorą?',
      shortDescription: 'Dlaczego LLM potrafią brzmieć pewnie i mylić się jednocześnie.',
      content:
        'LLM optymalizują prawdopodobieństwo kolejnych tokenów, nie “prawdę”. Omawiamy wpływ danych treningowych, brak dostępu do źródeł, temperaturę oraz techniki ograniczania błędów: RAG, narzędzia, weryfikacja i evale.',
      publishedDate: new Date('2024-07-16'),
      author: 'Grzegorz Kaczmarczyk',
      category: 'llm',
    },
    {
      id: '8',
      title: 'Prompt injection: jak atakują aplikacje z LLM',
      shortDescription: 'Wstrzykiwanie instrukcji przez treść użytkownika i dokumenty.',
      content:
        'Jeśli model ma dostęp do narzędzi i danych, atakujący może wymusić ujawnienie sekretów lub wykonanie akcji. Pokazujemy podstawy: separacja ról, allowlist narzędzi, sandboxing, redakcja oraz testy bezpieczeństwa.',
      publishedDate: new Date('2024-08-21'),
      author: 'Julia Pawlak',
      category: 'bezpieczenstwo',
    },
    {
      id: '9',
      title: 'Wdrażanie modeli: batch, real-time i edge',
      shortDescription: 'Trzy tryby, trzy różne wymagania dotyczące opóźnień i kosztów.',
      content:
        'Batch sprawdza się w analityce, real-time w produktach interaktywnych, a edge gdy liczy się prywatność lub opóźnienie. Porównujemy architekturę, monitorowanie i strategie rollbacku.',
      publishedDate: new Date('2024-09-30'),
      author: 'Kamil Rutkowski',
      category: 'mlops',
    },
    {
      id: '10',
      title: 'MLOps: wersjonowanie danych i modeli',
      shortDescription: 'Bez tego trudno odtworzyć wynik i wyjaśnić regresję.',
      content:
        'Modele zmieniają się wraz z danymi. Omawiamy rejestry modeli, śledzenie eksperymentów, wersjonowanie cech i datasetów oraz automatyczne pipeline’y treningowe i walidacyjne.',
      publishedDate: new Date('2024-10-12'),
      author: 'Michał Wrona',
      category: 'mlops',
    },
    {
      id: '11',
      title: 'Bias i uczciwość modeli: jak testować?',
      shortDescription: 'Praktyczne podejście do równości, błędów i ryzyka.',
      content:
        'Modele mogą faworyzować jedne grupy kosztem innych. Pokazujemy, jak definiować grupy, dobierać metryki (np. equalized odds), budować zestawy testowe i dokumentować ograniczenia.',
      publishedDate: new Date('2024-10-28'),
      author: 'Anna Wójcik',
      category: 'etyka',
    },
    {
      id: '12',
      title: 'Koszty LLM: tokeny, cache i routing',
      shortDescription: 'Jak ograniczyć koszt bez utraty jakości odpowiedzi.',
      content:
        'Koszt rośnie z długością kontekstu i liczbą wywołań. Omawiamy kompresję promptu, cache odpowiedzi, selekcję modelu (routing), streaming oraz kiedy opłaca się RAG zamiast “wrzucać wszystko” do kontekstu.',
      publishedDate: new Date('2024-11-08'),
      author: 'Katarzyna Domańska',
      category: 'koszty',
    },
    {
      id: '13',
      title: 'Computer Vision: podstawy detekcji obiektów',
      shortDescription: 'Od klasyfikacji do detekcji i segmentacji — co wybrać?',
      content:
        'Detekcja obiektów odpowiada na pytanie “co i gdzie?”. Wyjaśniamy różnice między klasyfikacją, detekcją i segmentacją, oraz typowe metryki (mAP) i problemy z danymi (klasy rzadkie, tło).',
      publishedDate: new Date('2024-11-20'),
      author: 'Paweł Lis',
      category: 'cv',
    },
    {
      id: '14',
      title: 'Multimodalność: tekst + obraz w jednym workflow',
      shortDescription: 'Kiedy warto łączyć wejścia i jak projektować interfejs.',
      content:
        'Modele multimodalne potrafią analizować obrazy i odpowiadać tekstem. Omawiamy typowe przypadki użycia: OCR, interpretacja wykresów, kontrola jakości oraz ryzyka związane z prywatnością i danymi wrażliwymi.',
      publishedDate: new Date('2024-12-02'),
      author: 'Julia Pawlak',
      category: 'cv',
    },
    {
      id: '15',
      title: 'Agenci AI: narzędzia, pamięć i planowanie',
      shortDescription: 'Jak zbudować system, który wykonuje zadania wieloetapowo.',
      content:
        'Agent to LLM + narzędzia + pętla decyzyjna. Pokazujemy, jak projektować zestaw narzędzi, pamięć (krótko- i długoterminową), polityki limitów oraz jak mierzyć skuteczność zadań end-to-end.',
      publishedDate: new Date('2024-12-11'),
      author: 'Ewa Maj',
      category: 'agenci',
    },
    {
      id: '16',
      title: 'Evale dla LLM: testy regresji i “golden set”',
      shortDescription: 'Jak utrzymać jakość, gdy prompt lub model się zmienia.',
      content:
        'Bez automatycznych ewaluacji trudno zauważyć pogorszenie. Omawiamy zestawy pytań, kryteria oceny, “judge LLM” oraz metryki, które mają sens w Twoim produkcie.',
      publishedDate: new Date('2024-12-20'),
      author: 'Grzegorz Kaczmarczyk',
      category: 'ocena',
    },
    {
      id: '17',
      title: 'Prywatność danych w AI: anonimizacja i redakcja',
      shortDescription: 'Minimalizacja danych i bezpieczne przetwarzanie wrażliwych treści.',
      content:
        'Jeśli w danych są PII, musisz je chronić przed wyciekiem do logów i kontekstu modelu. Opisujemy anonimizację, maskowanie, polityki retencji oraz jak testować system pod kątem przypadkowego ujawniania danych.',
      publishedDate: new Date('2025-01-07'),
      author: 'Tomasz Bielecki',
      category: 'etyka',
    },
    {
      id: '18',
      title: 'Open-source vs API: jak wybrać model?',
      shortDescription: 'Koszt, kontrola, prywatność i czas wdrożenia w jednej decyzji.',
      content:
        'API daje szybkość startu, ale ogranicza kontrolę; open-source daje elastyczność kosztem utrzymania. Porównujemy kryteria: jakość w języku PL, latency, hosting, licencje i bezpieczeństwo.',
      publishedDate: new Date('2025-01-18'),
      author: 'Kamil Rutkowski',
      category: 'strategia',
    },
    {
      id: '19',
      title: 'Monitoring w produkcji: drift, latency i jakość',
      shortDescription: 'Co mierzyć, żeby nie dowiedzieć się o problemie od użytkowników.',
      content:
        'W produkcji liczy się stabilność. Omawiamy metryki opóźnień, błędów narzędzi, drift danych, wykrywanie spadku jakości oraz alerty oparte o evale i próbki ręcznej weryfikacji.',
      publishedDate: new Date('2025-02-02'),
      author: 'Michał Wrona',
      category: 'mlops',
    },
    {
      id: '20',
      title: 'Mowa na tekst: kiedy Whisper, kiedy inne rozwiązanie?',
      shortDescription: 'Jakość, języki, koszty i prywatność w systemach STT.',
      content:
        'Speech-to-text wymaga dopasowania do domeny i akcentów. Porównujemy tryby online/offline, diarization, czyszczenie audio i jak oceniać WER w praktyce.',
      publishedDate: new Date('2025-02-15'),
      author: 'Anna Wójcik',
      category: 'audioai',
    },
    {
      id: '21',
      title: 'AI w firmie: jak zacząć pilotaż?',
      shortDescription: 'Od wyboru problemu do mierzalnego efektu w 4–6 tygodni.',
      content:
        'Dobry pilotaż ma jasny cel, mierniki sukcesu i właściciela procesu. Opisujemy, jak zebrać dane, zbudować prototyp (np. RAG), przeprowadzić testy bezpieczeństwa i zaplanować wdrożenie.',
      publishedDate: new Date('2025-03-01'),
      author: 'Katarzyna Domańska',
      category: 'strategia',
    },
  ],
  categories: [
    { id: 'podstawy', name: 'Podstawy AI/ML' },
    { id: 'llm', name: 'LLM i prompty' },
    { id: 'rag', name: 'RAG i wyszukiwanie' },
    { id: 'ocena', name: 'Ewaluacja jakości' },
    { id: 'mlops', name: 'MLOps i wdrożenia' },
    { id: 'bezpieczenstwo', name: 'Bezpieczeństwo AI' },
    { id: 'etyka', name: 'Etyka i prywatność' },
    { id: 'koszty', name: 'Optymalizacja kosztów' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'audioai', name: 'Audio i mowa' },
    { id: 'agenci', name: 'Agenci i narzędzia' },
    { id: 'strategia', name: 'Strategia i produkt' },
  ],
};

export default initialState;
