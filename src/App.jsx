import { useEffect, useState } from 'react';
import DrumPad from './DrumPad';

const App = () => {
	const [display, setDisplay] = useState('');

	const handleKeyDown = e => {
		document.getElementById(e.key.toUpperCase())?.parentNode?.click();
	};

	const onPadClick = target => {
		document.getElementById(target.dataset.audio).play();
		setDisplay(target.id);
		target.classList.add('animate');
		setTimeout(() => target.classList.remove('animate'), 500);
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<main id='drum-machine'>
			<div id='options'></div>
			<div id='display'>{display || 'Display'}</div>
			<div id='volume-slider'></div>
			<DrumPad id='Heater-1' text='Q' onClick={onPadClick}/>
			<DrumPad id='Heater-2' text='W' onClick={onPadClick}/>
			<DrumPad id='Heater-3' text='E' onClick={onPadClick}/>
			<DrumPad id='Heater-4_1' text='A' onClick={onPadClick}/>
			<DrumPad id='Heater-6' text='S' onClick={onPadClick}/>
			<DrumPad id='Dsc_Oh' text='D' onClick={onPadClick}/>
			<DrumPad id='Kick_n_Hat' text='Z' onClick={onPadClick}/>
			<DrumPad id='RP4_KICK_1' text='X' onClick={onPadClick}/>
			<DrumPad id='Cev_H2' text='C' onClick={onPadClick}/>
		</main>
	);
}

export default App;
