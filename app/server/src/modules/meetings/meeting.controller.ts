import type {Request, Response} from 'express';
import client from '../../infrastructure/database/prisma.ts'
import {MeetingRepository, MeetingPayload} from './meeting.repository.ts'

const meetRepository = new MeetingRepository;

export const createMeet = async (req: Request, res: Response) => {
    const {hostId, title, scheduledAt, status} = req.body;

    meetRepository.create({
        hostId,
        title,
        scheduledAt,
        status
    })
} 

export const getMeet = async(req: Request, res: Response) => {
    const {id} = req.params;
    meetRepository.findById(id.toString());
}