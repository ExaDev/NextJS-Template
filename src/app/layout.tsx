import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'BrainPatch',
	description:
		'Intelligent, LLM-powered learning platform that creates personalised courses based on individual knowledge gaps',
	openGraph: {
		title: 'BrainPatch',
		description:
			'Intelligent, LLM-powered learning platform that creates personalised courses based on individual knowledge gaps',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
