import { useRouter } from 'next/router';

const Login = () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const scope = 'user-read-currently-playing user-read-recently-played';
  const redirect_uri = 'http://localhost:3000/';
  const state = Math.random().toString(36).slice(2);

  const router = useRouter();
  router.push(
    {
      pathname: 'https://accounts.spotify.com/authorize',
      query: {
        response_type: 'code',
        client_id,
        scope,
        redirect_uri,
        state,
      },
    },
    undefined,
    { shallow: true }
  );

  return <></>;
};

export default Login;
