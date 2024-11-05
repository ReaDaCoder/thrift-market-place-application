import React from 'react';
import Navbar from '../../src/components/Navbar';
import '../../src/sellpage.css';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {app, database, imageDb} from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import {v4 as uuidv4} from "uuid";
 import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
  } from 'semantic-ui-react';

  const [img, setImg] =useState('');

  useEffect(() => {
    const fetchItems = () => {
        getDocs(collectionStore)
            .then((snapshot) => {
                const itemsArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log("Rooms Data:", itemsArray);
                setRoom(itemsArray);
            })
            .catch((error) => {
                console.error('Error fetching items:', error);
            });
    };
    fetchItems();
}, []);

function handleSubmit(event){
    event.preventDefault();
    console.log(room);
    addDoc(collectionStore, {
      // img: room.img,
      room: room.room,
      description:room.description, 
      price: room.price,
      availability: room.availability

    })
    .then(()=>{
      alert("Room added")
    })
    .catch((err)=>{
      alert(err.message);
    })
  }


export default function SellPage(){
    console.log('sell')

    const storage = getStorage();
    const collectionStore = collection(database, 'items');

    const [item, setItem] = useState({
        // img: "",
        item:"",
        description: "",
        price: "",
        availability: "",
    });

    return(
        <div>
            <header>
            <Navbar/>
            <h1>The Thrift Market Place</h1>
            <form  onSubmit={handleSubmit}>
            <div className="card">
                                <br/>
                                <input type="file" accept="image/JPEG, image/png, image/jpg" id="input-file" onChange={(e)=>setImg(e.target.files[0])}/>
                                <br/>
                                <button onClick={handleClick}>Add item img</button>
                            </div>
                            <input type="file" onChange={(e)=>handleUpload(e)}/>
                            <label htmlFor="fname">Type of item:</label><br/>
                            <input type="text" placeholder='Enter text' name="room" value={item.item} onChange={handleInputChange}/>
                           <label htmlFor="fname">Add description:</label><br/>
                            <input type="text" placeholder='Enter text'name="description" value={item.description} onChange={handleInputChange}/>
                            <label htmlFor="fname">Add Price:</label><br/>
                            <input type="number" placeholder='Enter text'name="price" value={item.price} onChange={handleInputChange}/>
                            <label htmlFor="fname">Availability:</label><br/>
                            <input type="text" placeholder='Enter text' name="availability" value={item.availability} onChange={handleInputChange}/>
                            <button type="submit" onClick={handleSubmit}>Add Room</button>
            </form>
            <button>Add item</button>
            </header>
        </div>
    )
}