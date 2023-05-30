import { mockStateType } from '../../types/utilityTypes';

export const mockState = {
  user: {
    user: {
      email: 'johnDoe@gmail.com',
      name: 'John Doe',
      verified: true,
    },
  },
  userHistory: [],
};

export const mockStateWFormData: mockStateType = {
  user: null,
  isSignIn: false,
  userHistory: [],
  formData: {
    email: 'test@test.com',
    name: 'test',
    password: 'ABCabc1',
    confirmPassword: 'ABCabc1',
  },
};

export const mockStateNoFormdata: mockStateType = {
  user: null,
  isSignIn: false,
  userHistory: [],
  formData: {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  },
};

export const unverifiedUser = {
    user: {
        email: 'johnDoe@gmail.com',
        name: 'John Doe',
        verified: false
    },
}

export const verifiedUser = {
    user: {
        email: 'johnDoe@gmail.com',
        name: 'John Doe',
        verified: true
    },
}