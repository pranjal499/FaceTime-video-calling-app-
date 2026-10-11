import {PrismaPg} from '@prisma/adapter-pg';
import {PrismaClient} from '../../generated/prisma/client.js';
import * as dotenv from 'dotenv'

dotenv.config();

const connectionString = process.env.DIRECT_SUPABASE_URL as string;

if (!connectionString) throw new Error('DATABASE url not defined');

const adapter = new PrismaPg({connectionString});
const client = new PrismaClient({adapter});

export default client;