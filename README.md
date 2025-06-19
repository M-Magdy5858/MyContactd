# 📇 React Native Contacts Favourites App

A simple React Native app built with **Expo Router** that:

- Displays the device's contact list
- Lets users mark contacts as favourites with a custom message
- Fetches gender info via API
- Persists favourite contacts locally

---

## 🚀 Features

- 📱 Fetch and display device contacts
- ⭐ Mark/unmark contacts as favourites
- 📝 Add a message when favouriting a contact
- 🧠 Expand/collapse long messages with "Show More"
- 📊 Fetch gender info using [Genderize API](https://genderize.io/)
- 💾 Persist data using Redux Persist + AsyncStorage
- 🔐 Handle permission denial gracefully with settings link

---

## 🛠️ Tech Stack

| Tool                  | Purpose                          |
|-----------------------|----------------------------------|
| Expo Router           | File-based navigation            |
| React Native          | Mobile app framework             |
| Redux Toolkit         | Global state management          |
| redux-persist         | State persistence                |
| AsyncStorage          | Local storage                    |
| Formik + Yup          | Forms and validation             |
| Expo Contacts         | Access device contact list       |
| TypeScript            | Type-safe development            |

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/M-Magdy5858/MyContactd.git
cd MyContactd
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Expo server

```bash
npx expo start
```

---

## 🔐 Permissions

- The app requests **Contacts permission** at runtime.
- If denied, the UI provides a button to open system **Settings** via `Linking.openSettings()`.

---

## 📁 Project Structure

```
├── app/                           # expo-router pages
│   ├── _layout.tsx                # Root layout with providers (Redux, etc.)
│   ├── index.tsx                  # Home screen ("/")
│   └── modal/                     # Modal route folder
│       └── add.tsx                # Modal screen for adding favourites
│
├── components/                    # Reusable components
│   ├── AddFavouriteModal.tsx
│   └── ContactCard.tsx
│   └── Message.tsx
│   └── Text.tsx
│
│
├── store/                         # Redux Toolkit setup
│   ├── index.ts
│   └── contactsSlice.ts
│
├── types/                         # Global TypeScript types
│   └── index.ts
│
├── utils/                         # Utility functions/helpers
│   └── index.ts
│
├── assets/                        # Fonts, images, styles.
│   └── ...
│
├── app.json                  # Expo config
├── package.json
├── package-lock.json
├── eslint.config.js
├── .gitignore
├── tsconfig.json
└── babel.config.js

```

---

## 💡 Future Improvements

- [ ] Add search/filter for contacts
- [ ] Improve theming with dark/light
- [ ] Add localization
- [ ] Add unit and integration tests

---
