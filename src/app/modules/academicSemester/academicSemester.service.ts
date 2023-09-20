import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('/academic-semesters', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });

    return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.get('/academic-semesters', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });

    return response;
};

const getSingleFromDB = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await HttpService.get(`/academic-semesters/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });

    return response;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await HttpService.patch(
        `/academic-semesters/${id}`,
        req.body,
        {
            headers: {
                authorization: req.headers.authorization
            }
        }
    );

    return response;
};

const deleteFromDB = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await HttpService.delete(
        `/academic-semesters/${id}`,
        {
            headers: {
                authorization: req.headers.authorization
            }
        }
    );

    return response;
};

export const AcademicSemesterService = {
    insertIntoDB,
    getAllFromDB,
    getSingleFromDB,
    updateOneInDB,
    deleteFromDB
};
