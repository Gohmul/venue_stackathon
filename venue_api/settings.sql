-- settings.sql
CREATE DATABASE venue;
CREATE USER venueuser WITH PASSWORD 'venue';
GRANT ALL PRIVILEGES ON DATABASE tunr TO venueuser;