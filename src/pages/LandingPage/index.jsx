import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as RotateText from 'react-rotating-text';
import { IsLive } from '../../components';
import axios from 'axios';
import {} from 'dotenv/config';

import {
  faTwitter,
  faTwitch,
  faDiscord,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import year from 'year';
import './index.css';
import logo from './img/logo.svg';
import { FaConnectdevelop } from 'react-icons/fa';

export function LandingPage(props) {
  var [isLive, setLive] = useState(() => {}, []);

  useEffect(() => {
    axios
      .get('https://api.twitch.tv/helix/streams?user_id=567635354', {
        'Client-Id': process.env.CLIENTID,
        'Authorization': 'Bearer ' + process.env.TOKEN,
      })
      .then(({ type }) => {
        if (!type || type == null) setLive(false);
        else setLive(true);
      });
  });

  return (
    <div id="container">
      {isLive ? <IsLive /> : null}
      <h1 className="header-text">
        sippy |{' '}
        {
          <RotateText
            items={[
              'minecraft "expert"',
              'content creator',
              'twitch streamer',
              'professional slime',
            ]}
            emptyPause={500}
          />
        }
      </h1>
      <br />
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="footer">
        &copy; sippy {year('yyyy')}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="link" href="/twitch" target="_blank">
          <FontAwesomeIcon icon={faTwitch} />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="link" href="/twitter" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="link" href="/discord" target="_blank">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="link" href="/youtube" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
}
