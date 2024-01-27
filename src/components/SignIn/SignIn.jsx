import React from "react";
import "./SignIn.css";
import People from "../../assets/Images/pngs/people.png";
import Google from "../../assets/Images/pngs/google.png";
import Facebook from "../../assets/Images/pngs/facebook.png";

const SignIn = () => {
  return (
    <div className="d-flex container home-banner-div">
      <div className="col-md-5">
        <h1>
          Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
          <span style={{ color: "#8064A2" }}>passion</span>
        </h1>
        <p>
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p>
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <img alt="people" src={People} className="home-people"/>
      </div>
      <div className="col-md-5 d-flex sign-in-box flex-column">
        <div className="signin-btns-div">
            <div className="signin-btn-bor-div">
            <span className="signin-btn">Sign In</span>
            </div>
        
        <button className="join-btn">Join In</button>
        </div>
        <div className="">
            <div className="google-btn">
                <img src={Google} alt="Gooogle" /> <span className="ggle-btn-txt">Continue with Google</span>
            </div>
            <div className="google-btn">
                <img src={Facebook} alt="Gooogle" /> <span className="ggle-btn-txt">Continue with Facebook</span>
            </div>
            <div className="conct-with-other-div">
                <div className="line-div"></div>
                <div className="contc-text">Or connect with</div>
                <div className="line-div"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
