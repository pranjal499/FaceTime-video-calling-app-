import { MeetingStatus } from '../../generated/prisma/enums.js';

export interface MeetingPayload {
    hostId: string,
    title: string,
    scheduledAt: Date,
    status: MeetingStatus,
    startedAt: Date,
    endedAt: Date,
}