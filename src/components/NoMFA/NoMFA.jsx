import React from 'react';
import {
  Center,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';
import './index.css';

export function NoMFA() {
  return (
    <div id="mfa-warning">
      <Center>
        <Alert id="mfa-alert" variant="left-accent" status="error">
          <AlertIcon />
          <AlertTitle mr={3}>
            It looks like you don't have Two Factor Authentication enabled.
          </AlertTitle>
          <AlertDescription>
            For security reasons, please enable{' '}
            <a href="https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication">
              2FA
            </a>
          </AlertDescription>
        </Alert>
      </Center>
    </div>
  );
}
