import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);

router.get('/:id', AcademicSemesterController.getByIdFromDB);

router.post(
    '/',
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    validateRequest(AcademicSemesterValidation.create),
    AcademicSemesterController.insertIntoDB
);

router.patch(
    '/:id',
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    validateRequest(AcademicSemesterValidation.update),
    AcademicSemesterController.updateByIdFromDB
);

router.delete('/:id', AcademicSemesterController.deleteFromDB);

export const AcademicSemesterRoutes = router;
