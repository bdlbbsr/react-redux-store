export function loadState(KEY) {
    try {
      const serializedState = localStorage.getItem(KEY);
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  }
  
  export async function saveState(KEY, state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(KEY, serializedState);
    } catch (e) {
      // Ignore
    }
  }