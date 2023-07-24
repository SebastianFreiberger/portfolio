import React from "react";
import './ButtonStart.css'

const ButtonStart = () => {
    return (
      <div className="btn-start">
        <button>
          <div className="btn-container">
            <span>START</span>
            <i class="fa fa-light fa-play"></i>
          </div>
        </button>
      </div>
    );
}

export default ButtonStart