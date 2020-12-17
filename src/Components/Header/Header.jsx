import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import './Header.css'

import { languages } from '../../Options'

function Header () {

	const { theme, setTheme, lang } = useContext(ThemeContext)

	return (
		<>
			<header className={theme}>
				<h1>
				{
					(languages.find(data => {
						if(data.prop === lang) {
							return data;
						}
					})).heading
				}
				</h1>
				<select
					defaultValue={theme}
					onChange={e => setTheme(e.target.value)}
				>
					<option value="light">
						{
							(languages.find(data => {
							if(data.prop === lang) {
								return data;
								}
							})).light
						}
					</option>
					<option value="dark">
						{
							(languages.find(data => {
							if(data.prop === lang) {
								return data;
								}
							})).dark
						}
					</option>
				</select>
			</header>
		</>
	)
}

export default Header
