import {httpDelete, httpPostDataAsJson} from '../../../utils/httpFetch';
import {urls} from '../../../utils/globalContants';

export const setVoteChange = async (imageId, vote) => {
    try {
        const params = {
            image_id: imageId,
            value: vote ? 1 : 0
        }
        return await httpPostDataAsJson(urls.catVotes, params);
    } catch (error) {
        console.log(error);
    }
}

export const setFavourite = async (imageId) => {
    try {
        const params = {
            image_id: imageId            
        }
        return await httpPostDataAsJson(urls.catFavourite, params);
    } catch (error) {
        console.log(error);
    }
}

export const setUnfavuorite = async (favouriteId) => {
    try {
        return await httpDelete(urls.catFavourite + `/${favouriteId}` );
    } catch (error) {
        console.log(error);
    }
}

