import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
      event.preventDefault();
      alert('Searching for ${keyword} definition');
    }
    
function handKeywordChange(event) {
    setKeyword(event.target.value);
}

    return (
      <div className="Dictionary">
        <form>
          <input type="search" onChange=
          {handKeywordChange} />
        </form>
      </div>
    );
}