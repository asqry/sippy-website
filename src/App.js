import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, GalleryPage } from './pages';

function App() {
  document.title = 'sippy ✨';
  return (
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route
        path="/discord"
        component={() => {
          window.location.href = 'https://discord.gg/fQ9vpuNcGW';
          return null;
        }}
      />
      <Route
        path="/twitch"
        component={() => {
          window.location.href = 'https://twitch.tv/sippyy_';
          return null;
        }}
      />
      <Route
        path="/twitter"
        component={() => {
          window.location.href = 'https://twitter.com/sippyy_';
          return null;
        }}
      />
      <Route
        path="/youtube"
        component={() => {
          window.location.href =
            'https://www.youtube.com/channel/UCoI2wNy-ges1pSdD8hVe68A';
          return null;
        }}
      />
      <Route
        path="/i"
        component={() => {
          window.location.href = 'https://asqry.me/discord';
          return null;
        }}
      />
      <Route path="/gallery" exact={true} component={GalleryPage} />
    </Switch>
  );
}

export default App;
