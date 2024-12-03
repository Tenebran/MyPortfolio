import profileImage from '../modules/common/image/profile-image/profile-image-2.jpg';

export type ProfileType = {
  name: string;
  surname: string;
  profession: string;
  image: string;
};

type ActionType = { type: 'PROFILE/RETURN-PROFILE' };

const initialState: ProfileType = {
  name: 'Sergej',
  surname: 'Garkusha',
  profession: 'FrontEnd Developer',
  image: profileImage,
};

export const profileReducers = (
  profile: ProfileType = initialState,
  action: ActionType
): ProfileType => {
  switch (action.type) {
    case 'PROFILE/RETURN-PROFILE':
      return profile;

    default:
      return profile;
  }
};
