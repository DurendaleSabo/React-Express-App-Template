import React  from 'react';
import { Card } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Carroussel from './Components/Carroussel';
import './Components/Navbar'
import Header from './Components/Navbar';
import Card1 from './Components/card';
import Footer from './Components/Footer';

// Main Entry point function
const App = () => {
	return <div className="App">
		<Header/>
	<Card.Body>
	Bonjours à toi,
	notre start up VHAGYC à pour but de créer, innover et développer !
	A travers nos différentes application d'aujourd’hui et de demain nous comptons démocratiser les activités nautiques et les rendre accessibles au plus grand nombre.
	</Card.Body>
		<Carroussel/>
		<Card>
  <Card.Body>Partenariat:
	  <ul>
	  				<li>-Dream Racer Boats Site Internet : https://dreamracerboats.com/fr//</li>
					<Card.Img style={{width:100}} variant="top" src="/images/DRB.png" />
					<li>-Swapping Cars Site Internet : https://swappingcar.com//</li>
					<Card.Img style={{width:100}} variant="top" src="/images/SC.png" />
					<li>-Mon Petit CE Site Internet : https://www.monpetitce.com//</li>
					<Card.Img style={{width:100}} variant="top" src="/images/MonpetitCE.png" />
						</ul>
  </Card.Body>
</Card>
		<Card1></Card1>
 <Footer></Footer>
	</div>
}

export default App;

// Rendering the entire react application
ReactDOM.render(<App />, document.getElementById('root'));