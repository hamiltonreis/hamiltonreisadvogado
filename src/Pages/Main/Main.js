import React from 'react';

//Components
import Header from '../../components/Header/Header';
import Atuacao from '../../components/Atuacao/Atuacao';
import OAdvogado from '../../components/OAdvogado/OAdvogado';
import Contato from '../../components/Contato/Contato';
import Duvidas from '../../components/Duvidas/Duvidas';
import Footer from '../../components/Footer/Footer';

const Main = () => {
	return (
		<>
			<Header />
			<div className="fix-header"></div>
			<OAdvogado />
			<Atuacao />
			<Contato />
			<Duvidas />
			<Footer />
		</>
	);
}
 
export default Main;