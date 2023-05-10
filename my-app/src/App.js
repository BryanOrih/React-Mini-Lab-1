import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [data, setDate] = useState([ 
  { name: "home", url: "https://www.homedepot.com/" }, 
  { name: "about", url: "https://about.me/" }, 
  { name: "contact", url: "https://www.1800contacts.com/" }, 
  { name: "services", url: "https://www.seattle.gov/human-services/services-and-programs" }, 
  { name: "portfolio", url: "https://www.portfoliobox.net/?s=googleen&gclid=CjwKCAjwge2iBhBBEiwAfXDBR3J1JGe2GQraOPmeGKJI-h_I_9UCs4hA2_J2vDVyPhRIMQsJcYAPNhoCF4YQAvD_BwE" } 
])
  const Display = ({name, url}) =>{
    return(
      <li>
        <a href={`${url}`}>{name}</a>
      </li>
    )
  }
  const display = () =>{
    return data.map((subData,index)=>{
      return(
      <Display name={subData.name} url={subData.url} key={subData+index}/>
      )
    })
  }

  return (
    <div className="App">
      <h2>
        Display Data Page
      </h2>
      <ul>
        {display()}
      </ul>
    </div>
  );
}

export default App;
