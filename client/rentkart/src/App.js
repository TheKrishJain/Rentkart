import { useState } from 'react';

import Card from './component/Card';
import RoomForm from './component/RoomForm';
import { RoomDataContext } from './context';
import './styles/index.scss';

function App() {
  const initialData = {
    name : "",
    city: "",
    rental_price: 0,
    nearby_amenities: [],
    address: "",
    description: "",
    total_bhk: 1,
    landlord_id: "",
    tenant_ids: [],
    room_photos: [],
    furnished: "",
    security_deposit: "",
  };
  const [roomData, setRoomData] = useState(initialData);
  return (
    <div className="App">
      <RoomDataContext.Provider value={{ roomData, setRoomData }}>
        <Card
          description="Independent Furnished Room With Attached Washroom at Hydrabad Gate, Near B.H.U. with standard amenities"
          rentalPrice={1000}
        />
        {/* <RoomForm operationType={"upload"} /> */}
      </RoomDataContext.Provider>
    </div>
  );
}

export default App;
