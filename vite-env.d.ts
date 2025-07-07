interface ImportMetaEnv {
  readonly VITE_OMDB_API_KEY: string;
  readonly VITE_TMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
