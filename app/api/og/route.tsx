import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
 

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://fanii.lol/og.png)',
        }}
      >
        <div
          style={{
            marginLeft: 205,
            marginRight: 205,
            marginBottom: 205,
            display: 'flex',
            fontSize: 105,
            letterSpacing: '-0.025em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '110px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}