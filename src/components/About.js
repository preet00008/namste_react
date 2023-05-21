
const About = () => {
  return (
    <div className="container_about">
    <h1 className="about_heading">About Us</h1>
    <p className="about_para">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor
      in risus sollicitudin egestas a sed sapien. Nulla facilisi. Sed
      consequat ligula in dui volutpat, sit amet placerat mi facilisis. Aenean
      dapibus felis sit amet pharetra pulvinar. Sed ac neque nec mauris
      elementum accumsan nec eu massa. Duis auctor metus nec nunc facilisis,
      ac dapibus lacus commodo. Vestibulum id condimentum massa. Nullam tempus
      placerat nunc ac tincidunt.
    </p>
    <div className="team-members">
      <div className="member">
        <img src="avatar1.png" alt="Team Member 1" />
        <h3>John Doe</h3>
        <p>Co-founder</p>
      </div>
      <div className="member">
        <img src="avatar2.png" alt="Team Member 2" />
        <h3>Jane Smith</h3>
        <p>Marketing Manager</p>
      </div>
      <div className="member">
        <img src="avatar3.png" alt="Team Member 3" />
        <h3>Mike Johnson</h3>
        <p>Head Chef</p>
      </div>
    </div>
  </div>  
  );
};

export default About;