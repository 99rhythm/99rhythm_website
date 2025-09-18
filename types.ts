export interface Release {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  description: string;
  imageUrl: string;
  soundcloudEmbed: string;
  bandcampUrl: string;
}

export interface Artist {
  id: number;
  name: string;
  bio: string;
  subtitle: string;
  imageUrl: string;
}
