import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // to delete dev data run:
  // npx prisma migrate reset --skip-seed

  await prisma.unit.createMany({
    data: [
      {
        name: 'gram',
        shortname: 'g',
        volume: false
      },
      {
        name: 'cup',
        shortname: 'c',
        volume: true
      },
      {
        name: 'medium',
        shortname: 'med',
        volume: false
      }
    ]
  })

  await prisma.role.createMany({
    data: [
      {
        name: 'admin'
      },
      {
        name: 'user'
      }
    ]
  })

  const user = await prisma.role.findFirst({ where: { name: 'user' }})
  const admin = await prisma.role.findFirst({ where: { name: 'admin'}})

  const gram = await prisma.unit.findFirst({ where: { name: 'gram' } })
  const cup = await prisma.unit.findFirst({ where: { name: 'cup' } })
  const medium = await prisma.unit.findFirst({ where: { name: 'medium' } })

  await prisma.user.create({
    data: {
      email: 'test@test.com',
      password: 'asdfasdfasdf',
      roleId: user.id,
      profile: {
        create: {
          firstName: 'Terry',
          lastName: 'Tester',
          calorieGoal: 1800,
          weightGoal: 156,
          metric: false
        }
      }
    }
  })

  await prisma.food.create({
    data: {
      name: "Honey Bunches of Oats With Almonds",
      brand: "Post",
      nutrition: {
        createMany: {
          data: [
            {
              quantity: 100,
              unitId: gram.id,
              calories: 406,
              protein: 6,
              fat: 8,
              carbs: 81
            },
            {
              quantity: .75,
              unitId: cup.id,
              calories: 130,
              protein: 2,
              fat: 2.5,
              carbs: 26
            }
          ]
        }
      }
    }
  })

  await prisma.food.create({
    data: {
      name: "Banana",
      brand: "Generic",
      nutrition: {
        createMany: {
          data: [
            {
              quantity: 118,
              unitId: gram.id,
              calories: 105,
              protein: 1.3,
              fat: 0.4,
              carbs: 27
            },
            {
              quantity: 1,
              unitId: medium.id,
              calories: 105,
              protein: 1.3,
              fat: 0.4,
              carbs: 27
            }
          ]
        }
      }
    }
  })


}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
