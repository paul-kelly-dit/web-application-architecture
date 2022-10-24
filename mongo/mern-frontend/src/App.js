import './App.css';
import AddUser from "./users/AddUser";
import SearchUser from "./users/SearchUser";

export default function App() {
  return (
      <div className="grid grid-cols-2 divide-x">
          <div><AddUser></AddUser></div>
          <div><SearchUser></SearchUser></div>
      </div>
  )
}