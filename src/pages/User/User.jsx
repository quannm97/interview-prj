import React from "react";
import Header from "../../components/Header";

const User = () => {
  return (
    <div className="wraper">
      <Header></Header>
      <section className="content position-sticky">
        <div className="left">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <button
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main dashboard</span>
              </button>
              <button
                href="#"
                className="list-group-item list-group-item-action py-2 ripple active"
              >
                <i class="fas fa-chart-area fa-fw me-3"></i>
                <span>Webiste traffic</span>
              </button>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </section>
    </div>
  );
};

export default User;
