import { AppDispatch, RootState } from "../reduxStore";
import {customFetch} from '../../helpers/customFetch'
import { serverUrl } from "../../helpers/config";
import { ProductActions } from "../reducers/product";
import { IProduct } from "../../types/product";

export const ProductThunks = {
    getProductTHUNK: () => async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
        try {
            const filter = getState().ProductReducer.filter

            let params = ''
            if (filter !== null) params = `?id_direction=${filter}`
            

            const response = await customFetch(`${serverUrl}/product${params}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (!response.ok) {
                dispatch(ProductActions.setProductsAction([]))
                return
            }
            const data = await response.json()
            dispatch(ProductActions.setProductsAction(data as IProduct[]))
        } catch (e) {

        }
    },
   
}
