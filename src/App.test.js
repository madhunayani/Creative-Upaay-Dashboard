import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import { store, persistor } from './redux/store';

// --- START: MOCK BROWSER APIS ---

// Mock localStorage for redux-persist
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock navigator.clipboard for the Header component
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: jest.fn(),
  },
  writable: true,
});

// --- END: MOCK BROWSER APIS ---

const testTheme = createTheme();

test('renders the main dashboard heading', () => {
  render(
    // Wrap the App in all the necessary providers
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={testTheme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );

  // Now that the app can render, this test will find the element
  const headingElement = screen.getByText(/Mobile App/i);
  expect(headingElement).toBeInTheDocument();
});

