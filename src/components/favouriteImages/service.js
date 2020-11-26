import {httpGet} from '../../utils/httpFetch';
import {urls} from '../../utils/globalContants';

export const getFavouriteImages = async () => {
    try {
        const catImages = await httpGet(urls.getAllCatImages + '?limit=50');
        const favourites = await httpGet(urls.catFavourite);
        return catImages.filter(catItem => {
            return favourites.filter(favItem => favItem.image_id === catItem.id).length > 0
        })
    } catch (error) {
        console.log(error);
    }
};