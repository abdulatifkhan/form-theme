import { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

	const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light')

	const [lang, setLang] = useState('en')

	useEffect(() => {

		window.localStorage.setItem('theme', theme)

	}, [
		theme,
	])

	return (
		<ThemeContext.Provider value={{ theme, setTheme, lang, setLang }}>
			{children}
		</ThemeContext.Provider>
	)
}

export {
	ThemeProvider,
	ThemeContext,
}
