import type { Request, Response } from 'express';
import { MeetingRepository } from './meeting.repository.ts';
import { createMeetingSchema, getMeetingSchema } from './meeting.schema.ts'
import { postMessageToThread } from 'node:worker_threads';

const meetRepository = new MeetingRepository;

export const createMeet = async (req: Request, res: Response) => {
    const result = createMeetingSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400)
            .json({
                message: "Invalid meeting data",
                errors: result.error.flatten
            });
    }

    const { title, scheduledAt } = result.data;

    // temp host id: 
    const hostId = process.env.TEST_USER_ID;
    if (!hostId) return;

    const meeting = meetRepository.create({
        hostId,
        title,
        scheduledAt: scheduledAt ? new Date(scheduledAt) : undefined
    });

    return res.status(201)
        .json({
            data: meeting
        });
}

export const getMeet = async (req: Request, res: Response) => {
    const result = getMeetingSchema.safeParse(req.params);

    if (!result.success) {
        return res.send(400)
        .json({
            message: "Meeting id not valid",
            errors: result.error.flatten
        });
    }

    const {id} = result.data;
    if (!id) return;

    const meeting = meetRepository.findById(id);
    return res.status(201)
    .json({
        data: meeting
    });
}

export const getMeetByHostId = async (req: Request, res: Response) => {
    const { hostId } = req.params;
    let meets = await meetRepository.findByHost(hostId.toString());
}