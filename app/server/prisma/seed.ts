import client from "../src/infrastructure/database/prisma.js";

async function createUser() {
    await client.user.create({
        data: {
            username: 'test-user',
            displayName: 'test-user',
        }
    });
}

createUser();