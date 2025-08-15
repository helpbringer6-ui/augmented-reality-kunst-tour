// Importiere die benötigten Module von React Native
import { AppRegistry } from 'react-native';
// Importiere die Haupt-App-Komponente
import App from './src/App';
// Importiere den Anwendungsnamen aus der Konfigurationsdatei
import { name as appName } from './app.json';

// Registriere die Hauptkomponente der App
AppRegistry.registerComponent(appName, () => App);