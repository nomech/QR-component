import './App.css';
import QrCard from './components/QrCard/QrCard';
import QrCode from './assets/images/image-qr-code.png';

function App() {
	return (
		<>
			<QrCard
				qr={QrCode}
				title="Improve your front-end skills by building projects"
				text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
			/>
		</>
	);
}

export default App;
