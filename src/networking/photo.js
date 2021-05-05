import axios from "axios";
import { showErrorMessage } from "@/messaging";
import store from "@/store";

const baseUrl = "https://localhost:3443";

export default {
    async getPhotosList() {
        try {
            let photos = (await axios.get(`${baseUrl}/api/photo`)).data;
            return photos;
        } catch (err) {
            showErrorMessage(err)
            return [];
        }
    },

    async deletePhoto(id) {
        try {
            const token = store.getters.token;
            if (!token)
                return null;
            let deletedPhoto = (
                await axios.delete(
                    `${baseUrl}/api/photo/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            ).data;
            return deletedPhoto;
        }
        catch (err) {
            showErrorMessage(err);
            return null;
        }
    },

    async postPhoto(photo) {
        try {
            const token = store.getters.token;
            if (!token)
                return null;
            let newPhoto = (await axios.post(
                `${baseUrl}/api/photo`,
                photo,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )).data;
            return newPhoto;
        } catch (err) {
            showErrorMessage(err);
            return null;
        }
    },

    async getPhotoById(id) {
        try {
            let photo = (await axios.get(`${baseUrl}/api/photo/${id}`)).data;
            return photo;
        } catch (err) {
            showErrorMessage(err);
            return null;
        }
    },

    async patchPhoto(photo, id) {
        try {
            const token = store.getters.token;
            if (!token)
                return null;
            let updatedPhoto = (
                await axios.patch(
                    `${baseUrl}/api/photo/${id}`,
                    photo,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            ).data;
            return updatedPhoto;
        } catch (err) {
            showErrorMessage(err);
            return null;
        }
    }
}