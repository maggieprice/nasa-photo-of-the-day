import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css";
import Photo from "./Components/Photo.js";
import NavBar from "./Components/NavBar.js";
import ContentBox from "./Components/ContentBox.js";

function App() {
  const [photoOfTheDay, setPhotoOfTheDay]= useState('')
  const [year, setYear] = useState('2019')
  const [month, setMonth]=useState("11")
  const [day, setDay] = useState('11')
  const nasaAPIKey='2f9itesyRNLt0pbCE02p4yDWfhsMpgebiwiVbf9W'
useEffect(()=>{
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}&date=${year}-${month}-${day}`)
.then(res=>{
  console.log(res.data)
  setPhotoOfTheDay(res.data)
  })
  .catch(err =>{
    console.log(err)
    setPhotoOfTheDay({
      copyright: "",
      date:"",
      explanation:"You have selected an invalid date. Please try another date.",
      hdurl: "https://images.unsplash.com/photo-1572280135715-edc1567580aa?", 
      media_type:"image",
      service_version:"yes",
      title: "404 Photo Not Found",
      url: "https://images.unsplash.com/photo-1572280135715-edc1567580aa?"
    })
  })
}, [year, month, day])
const clickHandler = (buttonName)=>{
  switch(buttonName){
    case 'Yplus':
      setYear(year + 1)
      break;
      case 'Yminus':
        setYear(year - 1)
        break;
        default:
  }
}
console.log(`photoOfTheDay`)
console.log(photoOfTheDay)
  return (
    <div className="App">
      <NavBar 
     year={year}
     month={month}
     day={day}
     title={photoOfTheDay.title}
     clickHandler={clickHandler}
      />
      <Photo 
      photoOfTheDay={photoOfTheDay}
      />
      <ContentBox explanation={photoOfTheDay.explanation}/>
    </div>
  );
}

export default App;
