// Importiere die benötigten Module von React Native
import { AppRegistry } from 'react-native'; // Ermöglicht die Registrierung von Komponenten
// Importiere die Haupt-App-Komponente
import App from './src/App'; // Importiert die Hauptanwendungslogik und UI
// Importiere den Anwendungsnamen aus der Konfigurationsdatei
import { name as appName } from './app.json'; // Lädt den Namen der Anwendung aus der Konfiguration

// Registriere die Hauptkomponente der App unter dem angegebenen Namen
// Dies ist der Einstiegspunkt der Anwendung.
AppRegistry.registerComponent(appName, () => App);
