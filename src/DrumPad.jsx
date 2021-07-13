
const DrumPad = ({ id, text, onClick }) => {
	return (
		<kbd
		  id={id}
		  className="drum-pad"
		  onClick={e => onClick(e.target)}
		  data-audio={text}
		>
			<audio src={`${id}.mp3`} className="clip" id={text}></audio>
			{text}
		</kbd>
	)
};

export default DrumPad;
