import {uuid, xid, z} from 'zod';

export const createMeetingSchema = z.object({
    title: z.string().trim().min(1).max(120).optional(),
    scheduledAt: z.iso.datetime().optional()
});

export const getMeetingSchema = z.object({
    id: uuid()
});

export const listMeetingsQuerySchema = z.object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
    status: z
        .enum(["SCHEDULED", "LIVE", "ENDED", "CANCLED"])
        .optional()
});