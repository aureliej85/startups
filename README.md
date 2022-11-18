# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

He is confident to be able to sell our engineering team on a few promising startups working on the incubator if we make them use the tool.

Fab is saying we could sell them between 100K€ to 200K€ per year and could also take some shares of a few startups.
But all developers have the Covid and you are the only one remaining. Let’s try to make the platform ready for the demo the day after !

Time to be creative, and efficient. Do what you think would be the best for your product under a short period.
The goal is to fix at least 3 bugs and implement 1 feature than could help us sell the platform

## Setup api

-Create free mongo database on https://www.mongodb.com/atlas/database and get mongo uri

- cd api
- Run `npm i`
- Run `npm run dev`
- Set project variables in `.env` (create new if not found) and `config.js` file
- Run cmd/initData in order to be ready to begin

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`
- Set variables such as `apiURL` in `config.js` file
- Login to new user created via script
