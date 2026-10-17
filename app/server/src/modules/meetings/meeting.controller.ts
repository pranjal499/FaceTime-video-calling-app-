import type { Request, Response } from 'express';
import { MeetingRepository } from './meeting.repository.ts';
import { createMeetingSchema, getMeetingSchema, listMeetingsQuerySchema } from './meeting.schema.ts'
import 'dotenv/config';
import { parse } from 'dotenv';
import MeetingService from './meeting.service.ts';
import { Param } from '@prisma/client/runtime/client';

const meetRepository = new MeetingRepository;
const meetServices = new MeetingService((meetRepository));

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
            message: "meeting created successfully!"
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

    const { id } = result.data;
    if (!id) return;

    const meeting = meetRepository.findById(id);
    return res.status(201)
        .json({
            data: meeting
        });
}

export const getMeetByHostId = async (req: Request, res: Response) => {
    const result = getMeetingSchema.safeParse(req.params);
    if (!result.success) {
        return res.status(400)
            .json({
                message: "The Host id not valid.",
                error: result.error.flatten
            });
    }

    const { id } = result.data;

    const meetings = meetRepository.findByHost(id);
    return res.status(201)
        .json({
            data: meetings
        });
}

export const listMeetings = async (req: Request, res: Response) => {
    const parsed = listMeetingsQuerySchema.safeParse(req.query);

    if (!parsed.success) {
        return res.status(400)
            .json({
                message: "Invalid query parameters",
                error: parsed.error.issues
            });
    }

    const result = await meetServices.listMeetings(parsed.data);
    return res.status(200)
        .json({
            data: result
        });
}

export const startMeeting = async (req: Request, res: Response) => {
    const parsed = getMeetingSchema.safeParse(req.params);

    if (!parsed.success) return res.status(400)
        .json({
            message: "Invalid meeting id",
            error: parsed.error.issues
        });

    const result = await meetServices.startMeeting(parsed.data.id);
    return res.status(200)
        .json({
            data: result
        });
}

export const endMeeting = async (req: Request, res: Response) => {
    const parsed = getMeetingSchema.safeParse(req.params);

    if (!parsed.success) return res.status(400)
        .json({
            message: "Invalid meeting id",
            error: parsed.error.issues
        });

    const result = await meetServices.endMeeting(parsed.data.id);
    return res.status(200)
        .json({
            data: result
        });
}