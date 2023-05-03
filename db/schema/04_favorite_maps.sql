DROP TABLE IF EXISTS favorite_maps CASCADE;
CREATE TABLE favorite_maps (
  id SERIAL PRIMARY KEY,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- prevent duplicate entries
  CONSTRAINT unique_map_user_pair UNIQUE (map_id, user_id) 
);