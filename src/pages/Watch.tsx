import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MoviePlayer } from '../components/MoviePlayer';

export function Watch() {
  const { id } = useParams();
  
  if (!id) {
    return <Navigate to="/" replace />;
  }

  return <MoviePlayer imageId={id} />;
}