import './index.css';
import Card from './componants/card';

function App() {
  const users = [
    {
      id: 1,
      name: 'Anshul',
      age: 22,
      city: 'Noida',
      address: 'Sector 62'
    },
    {
      id: 2,
      name: 'Rahul',
      age: 24,
      city: 'Delhi',
      address: 'Sector 15'
    },
    {
      id: 3,
      name: 'Aman',
      age: 21,
      city: 'Bhopal',
      address: 'MP Nagar'
    }
  ];

  const userCards = users.map((user)=>(
    <Card
      key={user.id}
      name={user.name}
      age={user.age}
      city={user.city}
      address={user.address}
    />
  ));
  
  return (
    <div className="parent">
        {userCards}
    </div>
  );
}

export default App;