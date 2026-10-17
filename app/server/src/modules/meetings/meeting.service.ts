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
}