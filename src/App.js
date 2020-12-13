import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Mechanics from "./panels/Mechanics";
import Skins from "./panels/Skins";
import Modes from "./panels/Modes";
import Tests from "./panels/Tests";
import FirstTest from "./panels/TestsPanels/FirstTest";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		setPopout(null);
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' go={go} />
			<Mechanics id='mechanics' go={go} />
			<Skins id={'skins'} go={go} />
			<Modes id={'modes'} go={go} />
			<Tests id={"tests"} go={go}/>
			<FirstTest id={"firstTest"} go={go}/>
		</View>
	);
}

export default App;

