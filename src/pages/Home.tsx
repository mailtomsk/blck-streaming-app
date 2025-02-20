import React from 'react';
import { FeaturedContent } from '../components/FeaturedContent';
import { ContentRow } from '../components/ContentRow';
import { GenreFilter } from '../components/GenreFilter';

export function Home() {
  const trendingMovies = [
    '1492144534655-ae79c964c9d7',
    '1478720568477-152d9b164e26',
    '1500462918059-b1a0cb512f1d',
    '1485846234645-a62644f84728',
    '1517604931442-7e0c8ed2963c'
  ];

  const continueWatching = [
    '1492144534655-ae79c964c9d7',
    '1551009175-8a68da93d5f9',
    '1559583985-c80d8ad9b29f',
    '1517604931442-7e0c8ed2963c',
    '1533903345306-15d1c30952de'
  ];

  return (
    <>
      <FeaturedContent />
      <GenreFilter />
      <div className="mt-8">
        <ContentRow title="Trending Now" items={trendingMovies} />
        <ContentRow title="Continue Watching" items={continueWatching} />
        <ContentRow title="Popular on BLCK" items={trendingMovies.slice().reverse()} />
        <ContentRow title="New Releases" items={continueWatching.slice().reverse()} />
      </div>
    </>
  );
}