import logo from './logo.svg';
import './App.css';
import {Bookmark} from 'lucide-react'
import Card from './components/Card';

const arr = [
  { id: 1, company: "Google", role: "Graphic Designer", type: "Part time", level: "Senior", salary: "$150-200k", location: "Lhr, Pakistan", time: "2 days ago" },
  { id: 2, company: "Meta", role: "UI/UX Designer", type: "Full time", level: "Junior", salary: "$120-160k", location: "Remote", time: "1 day ago" },
  { id: 3, company: "Amazon", role: "Product Designer", type: "Contract", level: "Mid level", salary: "$140-180k", location: "KHI, Pakistan", time: "5 hours ago" },
  { id: 4, company: "Netflix", role: "Visual Artist", type: "Full time", level: "Senior", salary: "$180-220k", location: "ISL, Pakistan", time: "1 week ago" },
  { id: 5, company: "Apple", role: "Motion Designer", type: "Part time", level: "Senior", salary: "$160-210k", location: "Remote", time: "3 days ago" },
  { id: 6, company: "Spotify", role: "Brand Designer", type: "Full time", level: "Junior", salary: "$100-130k", location: "Lhr, Pakistan", time: "12 hours ago" },
  { id: 7, company: "Airbnb", role: "Lead Designer", type: "Full time", level: "Lead", salary: "$200-250k", location: "Remote", time: "4 days ago" },
  { id: 8, company: "Adobe", role: "Creative Director", type: "Full time", level: "Senior", salary: "$250-300k", location: "KHI, Pakistan", time: "2 weeks ago" },
  { id: 9, company: "Slack", role: "Illustrator", type: "Contract", level: "Mid level", salary: "$90-120k", location: "ISL, Pakistan", time: "6 days ago" },
  { id: 10, company: "Uber", role: "Interaction Designer", type: "Part time", level: "Junior", salary: "$110-150k", location: "Remote", time: "1 hour ago" }
];


function App() {
  return (
    <div className="Parent">

    {arr.map(
      (elem)=>{
        return <Card elem={elem}/>
      }
    )}
    </div>

  );
}

export default App;
