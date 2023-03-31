# YumLog

Yumlog is a diet tracking tool built to explore some fun web technologies
- React
- Next.js
- Typescript
- Graphql / Apollo
- Prisma

## Devlog
### Day 1
Started with an initial brainstorm of the DB objects: [ here ]( ./docs/dbbrainstorm.db )

Then I refined that into a DB diagram here: [ dbdiagram.io/d/5cb4bbf ]( https://dbdiagram.io/d/5cb4bbfff7c5bb70c72fa383 )

Next thing's next, need the nextjs boilerplate

### Day 2,3
Got the db up and running, made some seed data and seeded it with the prisma client.

The prisma client is okay, but it's nowhere near as slick (on the user side) as graphql queries.

Most of the nextjs projects/tutorials I have looked at have used the prisma client for their queries.

### Day 4
I have to pick a client-side query flavor (graphql/apollo client or prisma client)

I would much rather use the apollo client and graphql, but if I use the prisma client I can use all of nextauth's (nextjs's
auth library) fancy adapters for the various OAuth options. They also have adapters for email, etc.

While that would be nice, I'd rather use graphql and pay the price in making my own auth system. It will be worse,
but I'll be able to use graphql on the frontend.

Here's what I'm thinking it will look like:
1. client hits index unauthenticated
2. client sends email/pass
3. server checks email/pass then sends a JWT
4. client stores JWT (need to decide sessionStorage vs localStorage)
5. client sends all subsequent requests with the JWT as header (need to decide cookie or auth header)
6a. client logs out by clearing JWT from storage
6b. JWT times out after some arbitrary period of time

It would be great to go stateless and not store any sessions. We'll see if that works.

The initial version will just disallow unathenticated access to any data (except for login)


