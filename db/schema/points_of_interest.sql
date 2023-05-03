CREATE TABLE points_of_interest (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  latitude NUMERIC NOT NULL,
  longitude NUMERIC NOT NULL,
  map_id INTEGER NOT NULL REFERENCES maps(id),
  user_id INTEGER NOT NULL REFERENCES users(id)
);
