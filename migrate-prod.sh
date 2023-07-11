#!/bin/bash
export $(grep -v '^#' .env.prod | xargs)
prisma migrate deploy
