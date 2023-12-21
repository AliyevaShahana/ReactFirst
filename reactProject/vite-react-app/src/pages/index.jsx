import React from "react";
import CardPhoto from "../assets/images/img.jpg";
function MainSection() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="main">
            <div className="content">
              <h1>ELECTRICAL SERVICE PROVIDES</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus dolores quas ratione, eos obcaecati.
              </p>
            </div>
            <div className="image">
              <img src={CardPhoto} alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainSection;
