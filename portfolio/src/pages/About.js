import React from "react";
import SpotifyPlaylist from "../components/SpotifyPlaylist";
import "./About.css";
import { Container } from "reactstrap";
import Gyuri from "../images/Gyuri.jpg";
import Surfing from "../images/Surfing.jpg";
import Surfing2 from "../images/Surfing2.jpg";
import Bicycle from "../images/Bicycle.jpg";
import Guitar from "../images/Guitar.jpg";

export default function About() {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const playlistId = "1naYaroarJnaG8LsTbRLEa";

  return (
    <div className="container">
      <div className="about-container">
        <div className="text-container">
          <h2>About me</h2>
          <p>
            My intense curiosity and desire to learn make me willing to
            challenge new things. And I know how to learn fast and adapt well to
            a wide variety of circumstances. When the hotel industry was in the
            slump by COVID-19, I thought it was an opportunity, not a crisis.
            Thankfully, I was not able to work in the hotel field, so I had the
            opportunity to learn knowledge of the IT field that I was always
            interested in and to work as a web developer. Thanks to that, In
            addition to handling programs such as Excel, PowerPoint, and Word,
            which are necessary for basic documentation work, I gained a broader
            understanding of the IT field and automation systems. I consider
            knowledge of the IT field is getting more important these days. So I
            am certain that my knowledge and understanding of the IT field will
            be a great advantage to develop your company.
          </p>
        </div>
        <div className="image-container">
          <img src={Gyuri} className="image" />
        </div>

        <div className="image-container">
          <img src={Bicycle} className="image" />
        </div>
        <div className="text-container">
          <h2>Planning Experience in a wide range of fields</h2>
          <p>
            I think the ability to pre-estimate and organize time and resources
            is essential for event manager. One of my planning experience was
            the Challenge Global Backpacking Contest. As a leader of the group
            project for backpacking, I planned and organized travel routes and
            itinerary under the theme of 'European Winter Festival’. I assigned
            tasks to each team member, gathered, modified and completed the
            information and successfully completed the presentation. Then, we
            won the contest and went on a trip to Europe. I consider my
            experiences of estimating the time and organizing the itinerary will
            be a great advantage of planning meetings and events.
          </p>
        </div>
        <div className="text-container">
          <h2>Customer-Oriented Attitude</h2>
          <p>
            I always think from the customer's point of view and do my best to
            satisfy my customers by responding to their needs. When I was a
            child, I had to move a lot. Thanks to that, I learned how to get
            along with others quickly. So People say I am a person who creates a
            very friendly atmosphere and is easy to talk to. When I worked as a
            salesperson at Hi-Mart, with my proactive attitude, I was able to
            catch customers’ needs easily by changing the conversation topic
            depending on customers of various ages. Then I recommended the
            product after figuring out which brands including performance and
            price my customers see as the focus. As a result, I received 20% of
            my salary in return for making a lot of sales. This proactive and
            customer-oriented attitude will be a great help in the travel
            consultation business.
          </p>
        </div>
        <div className="image-container">
          <img src={Surfing2} className="image" />
        </div>

        <div className="image-container">
          <img src={Guitar} className="image" />
        </div>
        <SpotifyPlaylist
          clientId={clientId}
          clientSecret={clientSecret}
          playlistId={playlistId}
        />
      </div>
    </div>
  );
}
