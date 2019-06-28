import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const data = [
//   ["https://reddit.com/r/ChapoTrapHouse", "./icons/chapo.png", "width: 42%"],
//   ["https://discordapp.com/channels/@me","./icons/discord.png", "width: 48%"],
//   ["https://github.com", "./icons/github.png", "width: 40%"],
//   ["https://linkedin.com", "./icons/linkedin.png", "width: 70%; height: 65%"],
//   ["https://youtube.com/feed/subscriptions","./icons/youtube.png", "width: 45%"],
//   ["https://soundcloud.com/stream", "./icons/soundcloud.png", "width: 50%"],
//   ["https://play.google.com/music", "./icons/google-play-music.png", "width: 40%"],
//   ["https://patreon.com/home", "./icons/patreon.png", "width: 40%"],
//   ["https://getpocket.com", "./icons/pocket.png", "width: 40%"],
//   ["http://theintercept.com", "./icons/theintercept.svg", "width: 68%"],
//   ["http://theverge.com", "./icons/theverge.png", "width: 42%"],
//   ["http://splinternews.com", "./icons/splinternews.svg", "width: 74%"]
// ];

//TODO: find better image import method
import reddit from './icons/chapo.png';
import discord from './icons/discord.png';
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import youtube from './icons/youtube.png';
import playmusic from './icons/google-play-music.png';
import soundcloud from './icons/soundcloud.png';
import patreon from './icons/patreon.png';
import pocket from './icons/.pocket.png';
import theverge from './icons/thevergepng';
import splinter from './icons/splinter.svg';

const icons = [
  reddit,
  discord,
  github,
  linkedin,
  youtube,
  playmusic,
  soundcloud,
  patreon,
  pocket,
  theverge,
  splinter,
];

class Item extends React.Component (test) {
  constructor() {
    super();
    this.props.name = test.props.name;
    this.props.icon = test.props.icon;
  };
  render() {
    return (
      <ul>
        <li
          href="https://github.com/"
          img="./icons/github.png"
          style={{width: '40%'}}>
        </li>
      </ul>
    );
  }
}

class Grid extends React.Component {
  render() {
    // for(const [url, icon, style] of data) {
    //   return <ul><a href={url} img={icon} style={{style}}></a></ul>;
    // }
    //  TODO: import all icons or use relative path
    return <div>
        <a href="https://github.com/">
        <img src={icon} style={{width: '40%'}}/></a>
      </div>;
    // return data.map((url, icon, style) => {
    //   return <ul href={url} img={icon} style={style}></ul>
    // });
  }
}

ReactDOM.render(
  <Grid />,
  document.getElementById('grid')
);
