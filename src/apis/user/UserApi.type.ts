export type UserSocialLoginParamType = {
  code: string;
  state: string;
};

export type UserSocialLoginReturnType = {
  isRegister: boolean;
  socialToken: String;
  access: String;
  refresh: String;
};

export type UserRegisterParamType = {
  socialToken: String;
  email: String;
  phone: String;
  name: String;
  nickname: String;
  profilePath: String;
  gender: String;
  age: number;
  marketingAdAgree: boolean;
};

export type UserRegisterReturnType = {
  id: number;
  profile: String;
  marketingAdAgree: boolean;
  access: String;
  refresh: String;
};

export type UserRefreshParamType = {
  refresh: String;
};

export type UserRefreshReturnType = {
  access: String;
  refresh: String;
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
