import React from 'react';
import { Center, Alert, AlertTitle, AlertIcon } from '@chakra-ui/react';
import './index.css';

export function IsLive() {
  return (
    <div id="mfa-warning">
      <Center>
        <Alert id="mfa-alert" variant="left-accent" status="success">
          <AlertIcon />
          <AlertTitle mr={3}>
            Sippy is live on Twitch! Click{' '}
            <a style={{ textDecoration: 'underline' }} href="/twitch">
              here
            </a>{' '}
            to watch!
          </AlertTitle>
        </Alert>
      </Center>
    </div>
  );
}
