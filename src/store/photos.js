import networking from "../networking";

export default {
    state: {
        photos: [],
    },
    getters: {
        photos(state) {
            return state.photos;
        }
    },
    mutations: {
        setPhotos(state, photos) {
            state.photos = photos;
        },
        addPhoto(state, photo) {
            state.photos.push(photo);
        },
        updatePhoto({ photos }, photo) {
            const index = photos.findIndex(b => b._id === photo._id);
            if (index >= 0)
                photos.splice(index, 1, photo);
        },
        removePhoto({ photos }, photo) {
            const index = photos.findIndex(b => b._id === photo._id);
            if (index >= 0)
                photos.splice(index, 1);
        }
    },
    actions: {
        async loadPhotos({ commit }) {
            const photos = await networking.getPhotosList();
            commit("setPhotos", photos);
        },
        async addPhoto({ commit }, photo) {
            let newPhoto = await networking.postPhoto(photo);
            if (!newPhoto)
                return null;
            commit("addPhoto", newPhoto);
            return newPhoto;
        },
        async updatePhoto({ commit }, photo) {
            let updatedPhoto = await networking.patchPhoto(photo, photo._id);
            if (!updatedPhoto)
                return null;
            commit("updatePhoto", updatedPhoto);
            return updatedPhoto;
        },
        async deletePhotoById({ commit }, id) {
            let deletedPhoto = await networking.deletePhoto(id);
            if (!deletedPhoto)
                return null;
            commit("removePhoto", deletedPhoto);
            return deletedPhoto;
        },
    }
}