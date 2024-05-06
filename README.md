 <h1> 1) Tytuł i nazwa wybranego projektu </h1>
Zadanie 10 – System zarządzania listą zadań do przeczytania

 <h1> 2) Spis treści</h1>
Projekt polega na utworzeniu aplikacji, która umożliwi użytkownikom tworzenie i zarządzanie listą
książek do przeczytania. <br> Użytkownicy mogą dodawać nowe pozycje do listy, oznaczać książki jako
przeczytane oraz usuwać z listy.<br>
Struktura projektu MVC: <br>
- Model (models): definicja modelu pozycji do przeczytania (np. tytuł, autor, gatunek),<br>
- Kontroler (controllers): obsługa żądań http, interakcja z modelem i przekazywanie danych do widoku, <br>
- Widok: (views): widok listy książek do przeczytania, formularz dodawania nowej książki, formularz
edycji informacji o książce.

 <h1> 3) Listę i krótki opis zaimplementowanych w projekcie funkcjonalności </h1>
- Dodawanie nowych pozycji do listy książek: Tworzenie książki i dodawanie do bazy danych (Wpisujesz takie dane: Tytuł, Opis, Rok, Gatunek i Zdjęcię)
- Oznaczanie książek jako przeczytane: Zmiana właściwości książki z "nie przeczytane" na "przeczytane" (Znajduje się w bazie danych)
- Usuwanie książek z listy: Usuwanie wszystkich danych książki z bazy danych
- Redagowanie książek: Zmiana wszystkich, usunięcie lub dodanie nowych danych w bazie danych
- Przeglądanie stworzonych książek: Wyświetlanie wszystkich danych z bazy danych


<h1>UWAGA</h1>
1) Dane wejściowe już wpisane i przechowują się w bazie danych
2) Żeby uruchomić aplikację trzeba uruchomić plik app.js lub wpisać w konsolę "npm start" i następnie zainstalować wszystkie zależności wpisane w package.json
