import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link, Meta } from "@remix-run/react";

import { getTopTracks } from "~/lib/spotify";
import type { Track } from "~/lib/spotify";

interface LoadedData {
  tracks: Track[];
}

export const meta: MetaFunction = () => {
  const description = `Front End Developer from Belfast, Northern Ireland`;
  return {
    title: "iamgd",
    description,
  };
};

export const loader = async () => {
  const res = await getTopTracks();
  const { items } = await res.json();
  const tracks = items
    .filter((track: any) => track.name !== "Nobody Like U")
    .slice(0, 10)
    .map((track: any) => ({
      artist: track.artists.map((_artist: any) => _artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
      imgUrl: track.album.images[0].url,
    }));

  return json({ tracks });
};

export default function Index() {
  const { tracks } = useLoaderData<LoadedData>();
  return (
    <>
      <h1 className="text-6xl font-bold text-primary">Hey, I'm Gareth.</h1>
      <p className="mt-4">
        A front end developer from Belfast, UK. I plan to use this for
        experiments instead of a portfolio that gets forgotten about.
      </p>

      <h2 className="mt-10 text-4xl font-bold md:mt-20 text-primary">
        Top Tracks
      </h2>
      <p className="mt-4">
        My top 10 tracks from the past 4 weeks using the Spotify API.
      </p>
      <ul className="grid mt-4 space-y-4 lg:grid-cols-2 gap-x-6">
        {tracks.map((track: Track) => (
          <li
            key={track.songUrl}
            className="relative flex items-center space-x-3"
          >
            <div className="flex-shrink-0">
              <img
                className="w-20 h-20"
                src={track.imgUrl}
                alt={`${track.artist} ${track.title}`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base text-gray-200">{track.title}</p>
              <p className="text-lg font-bold tracking-wider text-gray-100">
                {track.artist}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
