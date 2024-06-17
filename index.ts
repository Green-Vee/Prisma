import { PrismaClient } from "@prisma/client";
// import {PrismaClient} from 'PrismaClient';

const prisma = new PrismaClient();

async function main() {
  // Prisma queries

  //   Create a user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Ali VSI",
  //       email: "vsi@gmail.com",
  //     },
  //   });

  // GET ALL USERS
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });
  // console.log(users);

  // LOOP ALL USERS WITH THEIR ARTICLES
  // users.forEach((user) => {
  //   const { name, email } = user;
  //   console.log(`User: ${name}, Email:${email}`);

  //   console.log("Articles");
  //   user.articles.forEach((article) => {
  //     const { title, body } = article;
  //     console.log(`-Title: ${title}, Body: ${body}`);
  //   });
  //   console.log("\n");
  // });

  // CREATING ARTICLE
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Alique's second First article",
  //       body: "Alique's second's first article in details",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });

  //   console.log(article);

  // GET ALL ARTICLES
  const articles = await prisma.article.findMany();
  console.log(articles);

  // CREATE A USER AND ARTICLE AND THEN ASSOCIATE THEM
  // const user_article = await prisma.user.create({
  //   data: {
  //     name: "Sarah",
  //     email: "sarah@gmail.com",
  //     articles: {
  //       create: {
  //         title: "Sarah's first article",
  //         body: "This is Sarah owns article body",
  //       },
  //     },
  //   },
  // });

  // console.log(user_article);

  // UPDATING A USER
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "Alique VSI JR wabwera",
  //   },
  // });

  // console.log(user);

  // REMOVE DATA
  // const article = await prisma.article.delete({
  //   where: {
  //     id: 1,
  //   },
  // });

  // console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
