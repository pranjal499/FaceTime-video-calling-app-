import type { Request, Response } from 'express';
import { MeetingRepository } from './meeting.repository.ts';
import { createMeetingSchema } from './meeting.schema.ts'

const meetRepository = new MeetingRepository;

export const createMeet = async (req: Request, res: Response) => {
    // const {hostId, title, scheduledAt, status} = req.body;

    // await meetRepository.create({
    //     hostId,
    //     title,
    //     scheduledAt,
    //     status
    // })

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
    const { id } = req.params;
    let meet = await meetRepository.findById(id.toString());
}

export const getMeetByHostId = async (req: Request, res: Response) => {
    const { hostId } = req.params;
    let meets = await meetRepository.findByHost(hostId.toString());
}