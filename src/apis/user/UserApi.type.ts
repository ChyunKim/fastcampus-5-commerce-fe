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

export type UserDTOType = {
  id: string;
};
export type UserParamGetType = {
  id: string;
};
export type UserParamPutType = {
  id: string;
  data: UserDTOType;
};
export type UserParamPatchType = {
  id: string;
  data: Partial<UserDTOType>;
};
