import { ChakraProvider, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
	return (
		<Heading>
			Welcome to Satellite Telemetry Simulator by @jacksonmccluskey
		</Heading>
	);
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
