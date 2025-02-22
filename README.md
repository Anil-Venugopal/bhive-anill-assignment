# 🚀 WorkSpace Management App

This project is a **React + Vite** application that integrates **Redux Toolkit** for state management and fetches workspace data from a remote API.

---
## 📌 Features
- **Vite** for fast development & optimized builds
- **Redux Toolkit** for efficient state management
- **Axios** for API calls
- **Material-UI** for UI components
- **TypeScript** for type safety

---
## 📦 Project Structure
```
/src
│── api/                   # API service calls
│   ├── api.ts             # Handles API calls with Axios
│
│── redux/                 # Redux state management
│   ├── store.ts           # Configures the Redux store
│   ├──                    # Redux slices (state + reducers)
       ├── workspaceSlice.ts # Handles workspace state
│
│── components/            # React components
│   ├── spaces/            # Spaces-related components
│       ├── Spaces.tsx     # Renders list of workspaces
│       ├── SpaceCard.tsx  # Displays individual workspace details
│
│── types/                 # TypeScript interfaces
│   ├── WorkSpace.ts       # Defines WorkSpace type
│
│── .env                   # Environment variables
│── vite.config.ts         # Vite configuration
│── package.json           # Dependencies and scripts
```

---
## ⚙️ Setup & Installation

### 1️⃣ **Clone the Repository**
```sh
git clone <repository-url>
cd workspace-app
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Setup Environment Variables**
Create a `.env` file in the root directory and add:
```env
VITE_API_BASE_URL=https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/
```

### 4️⃣ **Run the Development Server**
```sh
npm run dev
```
Vite will start the app at `http://localhost:5173`.

---
## 🔗 API Integration
All API calls are handled in `src/api/api.ts`.

### **Fetching Workspaces**
```typescript
import axios from 'axios';
import { WorkSpace } from '../types/WorkSpace';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchWorkSpacesAPI = async (): Promise<WorkSpace[]> => {
  try {
    const { data } = await axios.get<WorkSpace[]>(`${API_BASE_URL}data.json`);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch workspaces');
  }
};
```

---
## 🏪 State Management with Redux
We use **Redux Toolkit** for state management.

### **Configure Store** (`store.ts`)
```typescript
import { configureStore } from '@reduxjs/toolkit';
import workspaceReducer from './workspaceSlice';

export const store = configureStore({
  reducer: { workspace: workspaceReducer },
});
```

### **Fetch Workspaces via Redux** (`workspaceSlice.ts`)
```typescript
export const fetchWorkSpaces = createAsyncThunk('workspace/fetchWorkSpaces', async () => {
  return await fetchWorkSpacesAPI();
});
```

---
## 🏗️ Building the Project
To generate a production build:
```sh
npm run build
```
This will create an optimized `dist/` folder.

---
## 🐞 Debugging & Fixing Issues
- If you face **missing fields in API response**, check logs in the browser console (`F12 > Console`).
- If `npm run build` fails due to **TypeScript errors**, ensure `fetchWorkSpacesAPI()` returns all required fields.
- Restart Vite after `.env` changes:
  ```sh
  npm run dev
  ```

---


