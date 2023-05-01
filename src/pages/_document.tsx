import { Html, Head, Main, NextScript } from 'next/document'
import { Htag, Button } from '@/components'

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
				<Htag tag="h2">skvrno</Htag>
				<Button appereans="primary">lkeNVL</Button>
				<Button appereans="ghost">lkeNVL</Button>
			</body>
		</Html>
	)
}
