import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.insertIntoDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.getAllFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.getSingleFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const updateByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.updateOneInDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.deleteFromDB(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

export const AcademicSemesterController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateByIdFromDB,
    deleteFromDB
};
