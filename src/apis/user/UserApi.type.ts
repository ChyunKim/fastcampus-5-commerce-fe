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
  gender: 'male' | 'female' | undefined;
  age: '10' | '20' | '30' | '40' | '50' | '60' | undefined;
  marketingAdAgree: boolean;
};

export type UserRegisterReturnType = {
  id: number;
  profile: String;
  marketingAdAgree: boolean;
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
