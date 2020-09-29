import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            {/* <div>
                <img src="https://www.ivi.ru/titr/uploads/2019/05/21/1bff3f12a74fb492a8c1f7ef7b87c8ff.jpg/1400x0" />
                Main content
            </div> */}
            <div>
                {
                    profile.photos.small ? <img src={profile.photos.small} /> : <img src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" />
                }
                {
                    status && <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                }
                <div>
                    <div>{profile.aboutMe}</div>
                    <ul>Contacts:
                        <li>{profile.contacts.github}</li>
                        <li>{profile.contacts.vk}</li>
                        <li>{profile.contacts.twitter}</li>
                        <li>{profile.contacts.instagram}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;