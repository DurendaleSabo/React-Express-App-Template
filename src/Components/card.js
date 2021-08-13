import React  from 'react';
import { Card, ListGroup,ListGroupItem,Table } from 'react-bootstrap';

const Card1 = () => {
    return  <Table striped bordered hover>
    <thead>
      <tr>
        <th>   <Card>
    <Card.Img style={{height:200}}  variant="top" src="/images/gris.png" />
    <Card.Body>
      <Card.Text>
Cobaturage.fr est une plateforme de mise en relation dédiée aux amoureux de la mer. Que vous soyez propriétaire de bateau ou plaisancier avide de découvertes, notre système de réservation vous permet de trouver des partenaires de navigation pour partager vos frais et naviguer à moindre coût, en toute sécurité et dans le respect de l'environnement.
Nous sommes présents dans toute la France, dans les DOM-TOM ainsi que dans une multitude de destinations dans le monde.
      </Card.Text>
    </Card.Body>
  </Card></th>
        <th>  <Card>
    <Card.Img style={{height:200}}  variant="top" src="/images/gris.png"/>
    <Card.Body>
      <Card.Text>
Pourquoi Cobaturage?
Pour beaucoup, la navigation est un loisir qui peut paraître inaccessible. Nous avons donc créé cette plateforme pour permettre aux chefs de bord et passagers, de disposer d’un outil leur permettant de partager les frais de bord, de découvrir et de profiter des joies de la navigation sans se ruiner et en toute sécurité.
Pour résumer, le cobaturage, c’est synonyme de rencontres, de partage d’expériences et de convivialité. Mais pas seulement.
Nous sommes désormais confrontés à l’urgence de revisiter nos modes de vie afin de nous adapter aux impératifs du changement climatique et de l’épuisement des ressources. Le cobaturage nous permet de nous déplacer de manière plus écologique, plus économique, tout en améliorant les systèmes de mobilité aujourd’hui à notre disposition pour relier un point à un autre.
      </Card.Text>
    </Card.Body>
  </Card></th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td> <Card>
    <Card.Img style={{height:300}}  variant="top" src="/images/gris.png"  />
    <Card.Body>
      <Card.Text>
        Anthony Roy
Président Directeur Général de la Start-up VHAGYC SAS
Editeur de logiciel, plateforme et application web dédié au secteur du nautisme.
Développement de la co-navigation à travers des solutions numériques performantes, sécurisées et responsables.
      </Card.Text>
    </Card.Body>
  </Card></td>
  <td>
  <Card>
    <Card.Img style={{height:300}}  variant="top" src="/images/gris.png"  />
    <Card.Body>
      <Card.Text>
       Charles Directeur Technique et Co-fondateur de la Start-up VHAGYC SAS
Editeur et Développeur de logiciel, plateforme et application web dédié au secteur du nautisme.
Geek et fan de voile/régate. Adepte du kitesurf dernièrement
      </Card.Text>
    </Card.Body>
  </Card>
  </td>
  </tr>
  </tbody>
  </Table>
}

export default Card1;