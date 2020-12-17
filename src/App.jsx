import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Login from './Components/Login/Login'

import { languages } from './Options'

function App () {

	const theme = useContext(ThemeContext)

	return (
		<>
			<Header />

			<Login />

			<Footer>
				<div>
					<p>&copy; &nbsp;
						{
							(languages.find(data => {
								if(data.prop === theme.lang) {
									return data;
								}
							})).copyright
						}
					</p>

					<select onChange={e => theme.setLang(e.target.value)}>
						{languages.map((lang, key) => <option key={key} value={lang.prop}>{lang.name}</option>)}
					</select>
				</div>
			</Footer>
		</>
	)
}

export default App
