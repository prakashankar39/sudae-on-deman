import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from './ScoopOption';
import Row from 'react-bootstrap/Row';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:3030/${optionsType}`)
    .then((response) => setItems(response.data));
    .catch((error) => {
      //Todo: handle error response later
    });
  }, [optionType]);

  // Todo: replace 'null' with ToppingOption
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;
  
  const optionItems = items.map((item) => (
  <ItemComponent 
    key={item.name} 
    name={item.name} 
    imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
