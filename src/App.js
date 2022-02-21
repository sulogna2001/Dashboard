import { Sidebar } from "./components/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import "./App.css";
import { Rightbar } from "./components/rightbar/Rightbar";

function App() {
  return (
    <div>
      <div className="topbar">
        <div className="content">
          <span className="desc">
            Lorem Ipsum is simply dummy text of the printing
          </span>
        </div>
      </div>
      <div className="App">
        <div className="leftsidebar">
          <Sidebar />
        </div>
        <div className="maincontent">
          <Content />
        </div>
        <div className="rightbar">
          <Rightbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
