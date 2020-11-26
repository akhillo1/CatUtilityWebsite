import { httpGet } from '../../utils/httpFetch';
import {urls} from '../../utils/globalContants';

export const getCatData = async () => {
    try {
        const images = await httpGet(urls.getAllCatImages + '?limit=50');
        const favourites = await httpGet(urls.catFavourite);
        const votes = await httpGet(urls.catVotes);
        return {
            images, favourites, votes
        }
    } catch (error) {
        console.log(error);
    }
};