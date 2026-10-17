import { MeetingStatus } from "../../generated/prisma/client.js";
import {MeetingRepository} from "./meeting.repository.js";

export default class MeetingService {
    constructor (private readonly MeetingRepository: MeetingRepository) {}

    async createMeeting (
        hostId: string,
        status: MeetingStatus,
        title?: string,
        scheduledAt?: Date,
    ) {
        if (scheduledAt && scheduledAt < new Date()) throw new Error('Meeting cannot be scheduled in the past');

        return await this.MeetingRepository.create({
            hostId,
            ...(title !== undefined && {title}),
            ...(scheduledAt !== undefined && {scheduledAt}),
        })
    }

    async listMeetings(params: {
        page: number,
        limit: number,
        status?: "SCHEDULED" | "ENDED" | "LIVE" | "CANCELLED"
    }) {
        return this.MeetingRepository.findMany(params);
    }

    async startMeeting(id: string) {
        const meeting = await this.MeetingRepository.findById(id);
        if (!meeting) throw new Error("Meeting not found");
        if(meeting.status !== 'SCHEDULED') throw new Error(`Cannot start a meeting with status: ${meeting.status}`);

        return this.MeetingRepository.update(id, {
            status: 'LIVE',
            startedAt: new Date()
        })
    }

    async endMeeting(id: string) {
        const meeting = await this.MeetingRepository.findById(id);
        
        if(!meeting) throw new Error("Meeting not found");
        if (meeting.status !== 'LIVE') throw new Error(`Cannot end a meeting with status: ${meeting.status}`);

        return this.MeetingRepository.update(id, {
            status: 'ENDED',
            endedAt: new Date()
        });
    }

    async cancelMeeting(id: string) {
        const meeting = await this.MeetingRepository.findById(id);
        
        if(!meeting) throw new Error("Meeting not found");
        if (meeting.status !== 'LIVE') throw new Error(`Cannot cancel a meeting with status: ${meeting.status}`);

        return this.MeetingRepository.update(id, {
            status: 'CANCELLED',
            endedAt: new Date()
        });
    }
}