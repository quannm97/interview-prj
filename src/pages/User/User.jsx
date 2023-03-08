import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { signOutInitial } from "../../features/redux/actions/actions";
import styles from "./User.module.scss"
const User = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    if (currentUser) {
      dispatch(signOutInitial());
    }
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className="position-relative">
      <Header/>
      </div>
      <section className="content">
        <div className="left">
          <div className="">
            <div className="">
              <button
                href="#"
                className=""
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main dashboard</span>
              </button>
              <button
                href="#"
                className=""
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Webiste traffic</span>
              </button>
              <button className="" onClick={handleSignOut}>
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Sign out</span>
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
