import {z} from 'zod';

export const createMeetingSchema = z.object({
    title: z.string().trim().min(1).max(120).optional(),
    scheduledAt: z.iso.datetime().optional()
});