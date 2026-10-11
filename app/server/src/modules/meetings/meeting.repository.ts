import client from '../../infrastructure/database/prisma.js';
import { MeetingStatus } from '../../generated/prisma/enums.js';

export interface MeetingPayload {
    hostId: string,
    title: string,
    scheduledAt: Date,
    status: MeetingStatus,
    startedAt: Date,
    endedAt: Date,
}

export class MeetingRepository {

    async create(data: {
    hostId: string,
    title?: string,
    scheduledAt?: Date,
    status: MeetingStatus
  }) {
    return await client.meeting.create({
      data: {
        hostId: data.hostId,
        title: data.title ?? null,
        scheduledAt: data.scheduledAt ?? null,
        status: data.status
      },
    });
  }

    async findById(id: string) {
        return await client.meeting.findUnique({
            where: {
                id
            }
        })
    }

    async findByHost(hostId: string) {
        return await client.meeting.findMany({
            where: {
                hostId
            },
            orderBy: {
                scheduledAt: 'asc'
            }
        })
    }

    async updateStatus(id: string, status: MeetingStatus) {
        return await client.meeting.update({
            where: {
                id
            },
            data: {
                status
            }
        })
    }
}