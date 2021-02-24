import { getUserDetails, getLoggedIn } from '../../utils/api';
import React from 'react';
import { Center, Flex, Spacer } from '@chakra-ui/react';
import './index.css';
import { LoggedIn, NoMFA, Graph } from '../../components';
import { WarnButton, MuteButton } from '../../components/Buttons';

export function DashboardPage({ history }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getLoggedIn().then(({ data }) => {
      if (data.auth) {
        getUserDetails()
          .then((userData) => {
            setUser(userData.data);
            setLoading(false);
          })
          .catch((err) => {
            history.push('/');
            setLoading(false);
          });
      } else {
        history.push('/');
        setLoading(false);
      }
    });
  }, []);

  return (
    !loading && (
      <div id="container">
        <div id="mfa-alert">{!user.mfa_enabled ? <NoMFA /> : ''}</div>
        <br />
        <Center id="loggedInCont">
          <LoggedIn user={user} />
        </Center>
        <hr />
        <div id="graphs-container">
          <br />
          <Flex
            wrap="wrap"
            direction="row"
            align="center"
            justify="space-around"
          >
            <Graph
              color="yellow"
              info="Messages Today"
              stat="1,324,439,523,690"
              helpText="Updated every 24 Hours"
            />
            <Graph
              color="red"
              info="New Members Today"
              stat="493,394,192,000"
              helpText="Updated every 24 Hours"
            />
            <Graph
              color="blue"
              info="Panel Access Today"
              stat="514,212 Users"
              helpText="Updated every 24 Hours"
            />
            <Graph
              color="lightBlue"
              info="Punishments Today"
              stat="93,329,000"
              helpText="Updated every 24 Hours"
            />
          </Flex>
        </div>

        <MuteButton />
      </div>
    )
  );
}
