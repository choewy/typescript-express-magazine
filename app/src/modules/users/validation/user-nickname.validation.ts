import Joi from 'joi';

export const UserNickname = () =>
  Joi.string().min(3).max(10).required().messages({
    'any.required': '닉네임을 입력하세요',
    'string.empty': '닉네임을 입력하세요.',
    'string.min': '닉네임은 3~10자 이내로 입력하세요.',
    'string.max': '닉네임은 3~10자 이내로 입력하세요.',
    'string.base': '닉네임 형식에 맞지 않습니다.',
  });
