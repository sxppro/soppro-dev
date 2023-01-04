import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const scope = 'user-read-currently-playing user-read-recently-played';
  const redirect_uri = 'http://localhost:3000/authorise';
  const state = Math.random().toString(36).slice(2);

  if (client_id) {
    return NextResponse.redirect(new URL(
      'https://accounts.spotify.com/authorize?' + new URLSearchParams({
        response_type: 'code',
        client_id,
        scope,
        redirect_uri,
        state,
      })
    ))
  }
}

export const config = {
  matcher: '/login'
}