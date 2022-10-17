export type UserSocialLoginParamType = {
  code: string;
  state: string;
};

export type UserSocialLoginReturnType = {
  isRegister: boolean;
  socialToken: string;
  access: string;
  refresh: string;
};

export type UserRegisterParamType = {
  socialToken: String;
  email: string;
  phone: string;
  name: string;
  nickname: string;
  profilePath: string;
  gender: string;
  age: number;
  marketingAdAgree: boolean;
};

export type UserRegisterReturnType = {
  id: number;
  profile: string;
  marketingAdAgree: boolean;
  access: string;
  refresh: string;
};

export type UserRefreshParamType = {
  refresh: string;
};

export type UserRefreshReturnType = {
  access: string;
  refresh: string;
};

export type UserMeParamType = {
  accessToken: string;
};
export type UserMeReturnType = {
  id: number;
  name: string;
  nickname: string;
  phone: string;
  email: string;
  profile: string;
  gender: string;
  age: number;
};
