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
        scheduledAt?: Date
    }) {
        return await client.meeting.create({
            data: {
                hostId: data.hostId,
                title: data.title ?? null,
                scheduledAt: data.scheduledAt ?? null
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

    async findMany(params: {
        page: number,
        limit: number,
        status?: "SCHEDULED" | "LIVE" | "ENDED" | "CANCELLED"
    }) {
        const { page, limit, status } = params;
        const where = status ? { status } : {};
        const [meetings, total] = await client.$transaction([
            client.meeting.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                orderBy: {
                    createdAt: 'asc'
                }
            }),
            client.meeting.count({ where })
        ]);

        return {
            meetings,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }

    async update(id: string, data: {
        status: 'LIVE' | 'CANCELLED' | 'ENDED',
        startedAt: Date,
        endedAt: Date
    }) {
        return client.meeting.update({
            where: {
                id
            },
            data
        })
    }
}