import type {Request, Response} from 'express';
import {MeetingRepository} from './meeting.repository.ts';

const meetRepository = new MeetingRepository;

export const createMeet = async (req: Request, res: Response) => {
    const {hostId, title, scheduledAt, status} = req.body;

    await meetRepository.create({
        hostId,
        title,
        scheduledAt,
        status
    })
} 

export const getMeet = async(req: Request, res: Response) => {
    const {id} = req.params;
    let meet = await meetRepository.findById(id.toString());
}

export const getMeetByHostId = async(req: Request, res: Response) => {
    const {hostId} = req.params;
    let meets = await meetRepository.findByHost(hostId.toString());
}