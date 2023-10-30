import { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Link} from 'react-router-dom';

const MyComponent = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/expertises');
      setData(response.data);
    };

    fetchData();
  }, []);
  
  return (       
    <div className="container">
      <div className="row">
        {data.map(item => (
          <div className="col-md-4" key={item['id']}>
            <div className="card my-3">
            <img className="cardImage" src={item['image_name']} height={200} width={200}  />
              <div className="card-body">
                <h5 className="card-title">{item['name']}</h5>
                <p className="card-text">Цена: {item['price']}</p>
                <p className="card-text">Описание: {item['description']}</p>
                <Button className="cardButton"> <Link to={`/expertise/${item['id']}`}>Подробнее</Link></Button>
              </div>
            </div>
          </div>
       ))}
      </div>
    </div>
  );
};

export default MyComponent;