
import './App.css';
import { useState } from 'react';


function App() {
  const [show, setshow] = useState(false);
  const [person, setperson] = useState({
    name:"Messaoud Souid" , bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
    ,imgSrc :"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", profession:"Developper" 
  });
  return (
    <div className="App">
      <button  onClick={()=>setshow(!show)}> click here to show profil </button>
  
    {show?
     <div>
      <h1> {person.name}</h1>
      <h1> {person.bio}</h1>
      <h1> {person.profession}</h1>
      <img src={person.imgSrc}/>
      </div>
    : null}   
    </div>
  );
}

export default App;
