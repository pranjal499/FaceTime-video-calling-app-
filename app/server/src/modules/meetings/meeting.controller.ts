import type {Request, Response} from 'express';
import client from '../../infrastructure/database/prisma.ts'
import {MeetingRepository, MeetingPayload} from './meeting.repository.ts'

export const createMeet = async (req: Request, res: Response) => {
    const {hostId, title, scheduledAt, status} = req.body;

    const meetRepository = new MeetingRepository;
    meetRepository.create({
        hostId,
        title,
        scheduledAt,
        status
    })
} 

export const getMeet = async(req: Request, res: Response) => {
    
}