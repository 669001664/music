const LOCAL_ORIGIN = 'http://localhost'
const REMOTE_ORIGIN = 'http://localhost'

export const PORT = 3000

export const SERVER = __LOCALHOST__ ? `${LOCAL_ORIGIN}:${PORT}/api` : `${REMOTE_ORIGIN}:3000/`
export const GRAPHQL_SERVER = __LOCALHOST__ ? `${LOCAL_ORIGIN}:${PORT}/graphql` : `${REMOTE_ORIGIN}/graphql`
