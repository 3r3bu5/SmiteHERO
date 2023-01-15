## What is this project and its 5 main features ?

### What is smiteHERO?

It is a web application project that tries to make smite game more fun.

### What are the main features ?

- Provide players with **builds** from the **best ranked player for every mode**
- Show **statistics** across all modes and gods
- Make users to be able to **compare builds**
- **Drag and drop gods / items tier list**
- Make users **create build** and **upvote/downvote builds**
- Rank users based on “**Karma like System”**

## 1. Idea

#### 1.1 Idea validation (Is it really solves a problem ?)

#### 1.2 Idea validation

## 2. Market Research

#### 2.1 Does the app already exist ?

#### 2.2 if yes, How can you combeite with them ?

## 3. PRD (Optional)

## 4. Design

#### 4.1 ERD Design / design docs

##### 4.1.1 What Stack to use ? and why?

- **Backend**: For backend I choose Node.js and Express.js for:
  - fast development
  - request handling using middlewares
  - fast integration with DBs
- **DB** : I was really hesitate to choose here but I decided to use **MongoDB** as **primary DB** and **Redis** for **caching and rate limiting** since:
  - Why MongoDB?
    - MongoDB outperformed SQL DBs in **fast reads** which the app relays on.
    - Since we are integrating with 3rd party API (smite API) we don't know in which shape the data will return and NoSQL Databases especially document based like MongoDB is great for such case.
    - Doing SQL migrations would take much time in that case.
    - I am adding more features and functions that I don't know right now so changing the SQL data structure every time will be a huge pain.
    - The smite API return data in nested objects form which can be reconstructed to be nested documents which Mongo supports very well
  - Why Redis?
    - Redis is a great choice for implementing a highly available in-memory cache to decrease data access latency, increase throughput, and ease the load off your relational or NoSQL database and application.
    - Redis can serve frequently requested items at sub-millisecond response times, and enables you to easily scale for higher loads without growing the costlier backend. Database query results caching, persistent session caching, web page caching, and caching of frequently used objects such as players, builds, etc...
    - Redis is also great when it comes to rate limiting, we will use it as a middleware to track the user requests and ensures a user can request specific number of resources in a timeframe.
- **Frontend**:
  - Next.js
    - I need server side rendering and SEO.

##### 4.1.2 DB Schema / Relationship

- The green tables records will be queried frequently from our database layer (MongoDB + Redis).
- The blue tables records will be queried from the smite API and cached in our DB layer
  > We need to figure out how frequently we need to update the DB.

##### 4.1.3 API Endpoints definition

##### 4.1.4 Talk About Auth

- OAuth:
  - Google OAuth
  - Steam OAuth
  - Discord OAuth
  - Twitch

##### 4.1.5 Talk about client

- Next.js:
  - Lazy image loading
  - Server side rendering
  - SEO
  - Static site generation
  - Automatic code splitting

##### 4.1.6 Monitoring / logging / auditing

##### 4.1.6 Deployment

#### 4.2 UI / UX Design

##### 4.2.1 Wireframe

##### 4.2.2 Visual Design

##### 4.2.3 user feedback (optional)

## 6. Development

1- Create a new github empty repo & clone it on your local environment

##### Server setup

##### Components types definitions

##### Creating the DAO

##### Implement Datastore

##### Setup routes

##### Setup controllers

##### create component tests

##### Handle Auth

##### Monitoring / logging / auditing

##### Caching ?

##### Rate-limiting?

##### Endpoint validation

## 7. Deployment

#### 7.1 Domain & SSL Cert

#### 7.2 Host provider

## 8. DevOPS

#### 8.1 CI & CD
