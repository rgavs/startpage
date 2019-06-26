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

// const preload = {
//   "data" : [ {
//      "url": "https://reddit.com/r/ChapoTrapHouse",
//       "icon": "icons/chapo.png",
//       "style": "width: 42%;",
//     },
//     {"url": "https://discordapp.com/channels/@me", "icon": "icons/discord.png", "style": "width: 48%;"},
//     {"url": "https://github.com", "icon": "./icons/github.png", "style": "width: 40%;"},
//     {"url": "https://linkedin.com", "icon": "./icons/linkedin.png", "width: 70%; height: 65%;"},
//     {"url": "https://youtube.com/feed/subscriptions", "icon": "./icons/youtube.png", "width: 45%;"},
//     {"url": "https://soundcloud.com/stream",
//       "icon": "./icons/soundcloud.png", "width: 50%;"},
//     {"url": "https://play.google.com/music","./icons/google-play-music.png", "width: 40%;"},
//     {"url": "https://patreon.com/home", "./icons/patreon.png", "width: 40%"},
//     {"url": "https://getpocket.com", "./icons/pocket.png", "width: 40%;"},
//     {"url": "http://theintercept.com","./icons/theintercept.svg", "width: 68%;"},
//     {"url": "http://theverge.com","assets/icons/theverge.png", "width: 42%;"},
//     {"url": "http://splinternews.com","assets/icons/splinternews.svg", "width: 74%;},
//   ]
// };

import icon from './icons/github.png';

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

// class Item extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li
//           href="https://github.com/"
//           img="./icons/github.png"
//           style={{width: '40%'}}>
//         </li>
//       </ul>
//     );
//   }
// }

ReactDOM.render(
  <Grid />,
  document.getElementById('grid')
);
