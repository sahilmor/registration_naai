// src/utils/localStorage.ts
export const loadState = <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) return null;
      return JSON.parse(serializedState) as T;
    } catch (err) {
      console.error('Error loading state from localStorage', err);
      return null;
    }
  };
  
  export const saveState = <T>(key: string, state: T): void => {
    if (typeof window === 'undefined') return;
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error('Error saving state to localStorage', err);
    }
  };
  