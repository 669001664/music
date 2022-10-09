const ROOT = '/';

const DISCOVERY = '/discovery';
const RECOMMENDATION = `${DISCOVERY}/recommendation`;
const SONG_LIST = `${DISCOVERY}/songlist`;

const VIDEOS = '/videos';

const DEFAULT_ROUTE: string = DISCOVERY;

const ROUTES = {
  ROOT,
  DISCOVERY,
  VIDEOS,
  DEFAULT_ROUTE,
  RECOMMENDATION,
  SONG_LIST
};


export default ROUTES;