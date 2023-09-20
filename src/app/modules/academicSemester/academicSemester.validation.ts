import { z } from 'zod';
import {
    AcademicSemesterCodes,
    AcademicSemesterMonths,
    AcademicSemesterTitles
} from './academicSemester.constant';

const create = z.object({
    body: z.object({
        year: z.number({
            required_error: 'Year is required'
        }),
        title: z.enum([...AcademicSemesterTitles] as [string, ...string[]], {
            required_error: 'Title is required'
        }),
        code: z.enum([...AcademicSemesterCodes] as [string, ...string[]], {
            required_error: 'Code is required'
        }),
        startMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]], {
            required_error: 'Start Month is required'
        }),
        endMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]], {
            required_error: 'End Month is required'
        })
    })
});

const update = z.object({
    body: z.object({
        year: z.number().optional(),
        title: z.enum([...AcademicSemesterTitles] as [string, ...string[]]).optional(),
        code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]).optional(),
        startMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]]).optional(),
        endMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]]).optional()
    })
});

export const AcademicSemesterValidation = {
    create,
    update
};
