import { create } from 'zustand';

const useUserStore = create(set => ({
    userInfo: {},
    userList: [],
    setUserList :(userInfo:UserInfo) => set({userInfo}),
    getUserInfo :(userInfo:UserInfo) => {
        console.log('userInfo:',userInfo)
    },
}));

export default useUserStore;