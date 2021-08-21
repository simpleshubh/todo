import { check, validationResult } from 'express-validator';
import { Request, Response } from 'express';

const todoPost = [
  check('name').exists().withMessage('name is required.'),
  check('description').exists().withMessage('description is required.'),
  check('date').trim().isDate().withMessage('must be a valid date.') ,
];

export const todoValidationRules = () => {
  return [
    ...todoPost
  ];
};

export const validate = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors: any = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}