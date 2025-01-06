declare type HospitalType = 'local' | 'global' | 'emergency';
declare type PetType = 'cat' | 'dog';
declare interface UserInfo {
  'id': string;
  'name': string;
  'petType': PetType;
  'isActive': boolean;
};
