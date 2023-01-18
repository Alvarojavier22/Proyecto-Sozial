import React, {useState} from "react";
import { Popup } from "../component/popup.jsx";
import { Navbar } from "../component/navbar.js";

export const PostProducts=()=>{

    const [view, setView] = useState('View1');
    return(
        <div>
        <button onClick={() => setView(view === 'View1' ? 'View2' : 'View1')}>
          Toggle View
        </button>
        {view === 'View1' ? <Popup /> : <Navbar />}
      </div>
    );
}