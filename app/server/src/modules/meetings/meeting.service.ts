import type MeetingRepository from "./meeting.repository.js";

export default class MeetingService {
    constructor (private readonly MeetingRepository: MeetingRepository) {}

    async createMeeting (
        hostId: string,
        title?: string,
        scheduledAt?: Date
    ) {
        if (scheduledAt && scheduledAt < new Date()) throw new Error('Meeting cannot be scheduled in the past');

        return await this.MeetingRepository.create({
            hostId,
            ...(title !== undefined && {title}),
            ...(scheduledAt !== undefined && {scheduledAt})
        })
    }
}