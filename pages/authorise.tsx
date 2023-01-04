import type { NextPage, NextPageContext } from 'next';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const AuthorisationPage: NextPage = () => {
  return <></>;
};

export async function getServerSideProps({ query }: NextPageContext) {
  const { code } = query;
  const redirect_uri = 'http://localhost:3000/authorise';
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  if (code && client_id && client_secret) {
    const params = new URLSearchParams({
      code: code,
      redirect_uri,
      grant_type: 'authorization_code',
    });
    const config: AxiosRequestConfig = {
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(client_id + ':' + client_secret).toString('base64'),
      },
    };
    const authResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      params,
      config
    );
    console.log(authResponse);
  }
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
}

export default AuthorisationPage;
