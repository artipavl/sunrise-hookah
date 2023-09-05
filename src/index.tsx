import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './reuseСomponents/loader/loader';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		{/* <HashRouter> */}
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={<Loader opacity={1} />} persistor={persistor}>
					<App />
					<GlobalStyle />
				</PersistGate>
			</Provider>
		</BrowserRouter>
		{/* </HashRouter> */}
	</React.StrictMode>
);
