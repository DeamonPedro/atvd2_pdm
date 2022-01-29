import { LogBox } from "react-native";
import Routes from "./routes";
import { AppProvider } from "./src/contexts/appContext";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
