
export interface IContact {
  gender: 'female' | 'male';
  email: string;
  name: IName;
  picture: IAvatar;
}

export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface IAvatar {
  large: string;
  medium: string;
  thumbnail: string;
}