export type UserSocialLoginType = {
  isRegister: boolean;
  socialToken: String;
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
