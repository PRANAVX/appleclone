import React from 'react'
import "./Main.css"



export default function Main() {
  return (
    <>
    <div className="section">
        <div className="img-container">

        </div>
        <div className="info-container" >
            <div className="info">
                <h1>iPad</h1>
                <p>Lovable,
                  Drawable,
                  Magical.</p>
                <p className="sale">Available starting from 28 Oct.</p>

            </div>
            <div className="info-link">
                <a href="/">Learn More{'>'}</a>
                <a href="/">Order now {'>'}</a>

            </div>
        </div>
    </div>
    </>
  );
}
