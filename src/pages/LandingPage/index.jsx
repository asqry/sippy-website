import React from 'react';
import { Button, Center } from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import * as RotateText from 'react-rotating-text';

import {
  faTwitter,
  faTwitch,
  faDiscord,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import year from 'year';
import './index.css';
import logo from './img/logo.svg';

export function LandingPage(props) {
  return (
    <div id="container">
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
