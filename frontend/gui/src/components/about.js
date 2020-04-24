import React from 'react';
import ghLogo from './images/githubLogo.png';





function About() {

    return (
        <div style={{textAlign: 'center'}}>
            <h1 >About Us</h1>
            <p>We are a team of Computer Science Majors who learn Computer Sciences at Champlain College in Burlington Vermont.</p>
            <p>This website is a project that we are making for Open Source Software Development, <i>taught</i> by Chris Bendel.</p>
            <p>Chirs has forced us to colaberate on this project, using GitHub, and has said that he will take all the credit for this website, what a shame.</p>
            <a href="https://github.com/CSI-280/MusicGames" target="_blank"><img style={imgStyle} src={ghLogo}></img></a>
            <iframe  width='560' height='315' src="https://www.youtube.com/embed/HABr4D7adc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
const imgStyle = {
    width: '10vw',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1vw',
}

const vidStyle = {
   
}

export default About;