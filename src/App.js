/* eslint-disable react/jsx-filename-extension */
import { ScrollToTop, Navbar } from './components';
import {
	ContactInfo,
	Projects,
	Footer,
	GetInTouch,
	Header,
	WhatWeDo
} from './containers';
import './app.css';

function App() {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="gradient__bg">
				<WhatWeDo />
				<Projects />
			</div>
			<div className="solid__bg">
				<GetInTouch />
				<ContactInfo />
				<Footer />
				<ScrollToTop />
			</div>
		</div>
	);
}

export default App;
