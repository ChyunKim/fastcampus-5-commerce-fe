export type UserSocialLoginParamType = {
  code: string;
  state: string;
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
