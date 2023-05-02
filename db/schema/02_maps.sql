DROP TABLE IF EXISTS maps CASCADE;

CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  points_of_interest_id INTEGER REFERENCES points_of_interest(id) ON DELETE CASCADE,
  creator_id INTEGER NOT NULL,
  created_at  DATE NOT NULL,
  updated_at DATE NOT NULL,
  map_category VARCHAR(255) NOT NULL,
  description TEXT
);
