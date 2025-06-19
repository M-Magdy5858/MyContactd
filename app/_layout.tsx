import { persistor, store } from "@/store";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {

  StatusBar.setBarStyle("dark-content");
  return(
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
