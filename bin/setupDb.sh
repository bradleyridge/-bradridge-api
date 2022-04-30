#!/bin/bash
#
# Sets up the local Postgres database
#

ENV_PATH=./.env
DB_NAME=bradridge-api
DB_USER=dev
DB_PASSWORD=password
DB_SCHEMA=public

echo "[SETUP DB] Beginning app database setup..."

# Check that .env file exists
if [ ! -f $ENV_PATH ]; then
  echo "[SETUP DB] App ENV file (.env) must exist!"
  exit 1
fi

# Drop any existing database
echo "[SETUP DB] Drop db if exists..."
dropdb --if-exists ${DB_NAME}

# Create postgres user
echo "[SETUP DB] Creating postgres user (if doesn't exist)."
psql -d postgres -c "CREATE USER ${DB_USER} WITH PASSWORD '${DB_PASSWORD}' CREATEDB;" 2> /dev/null

# Create postgres database
echo "[SETUP DB] Creating postgres database (if doesn't exist)."
psql -d postgres -c "CREATE DATABASE \"${DB_NAME}\" OWNER ${DB_USER};" > /dev/null

# Write to ENV
if grep -q DATABASE_URL "$ENV_PATH"; then
  echo "[SETUP DB] ENV file already contains variables. Skipping writing to file."
else
  echo "[SETUP DB] Writing DB info to .env file."
  echo "
# Postgres DB
DATABASE_URL=postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}
DATABASE_SCHEMA=${DB_SCHEMA}" >> "$ENV_PATH"
fi

echo "[SETUP DB] App database successfully setup!"
