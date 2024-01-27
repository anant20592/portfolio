import profilePic from "../assets/images/profile_pic.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="profile-pic">
          <img src={profilePic} />
        </div>
        <div className="intro">
          <h1>Hi, I am Anant.</h1>
          <p>
            I'm a web developer from Delhi, India. Currently senior frontend
            developer at ITC Infotech, Gurgoan. In my spare time I enjoy DIY,
            gaming and building my own projects. My preferred tools are
            JavaScript and React.js.
          </p>
          <p>
            I'm on <a href="https://github.com/anant20592" target="_blank"></a>
            Github.
          </p>
          <p>Worked with companies like: </p>
          <h2>
            <span>Gartner</span>
            <span>ITC Infotech</span>
            <span>Appy Pie LLP</span>
            <span>Samin Tekmindz Pvt. Ltd.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
