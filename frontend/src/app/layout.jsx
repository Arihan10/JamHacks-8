'use client';
import { Navigation } from '@/components/Navigation';
import '@/app/globals.css';

// Layout Component
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='flex flex-col'>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
