import { AppDispatch, RootState } from "../reduxStore";
import {customFetch} from '../../helpers/customFetch'
import { serverUrl } from "../../helpers/config";
import { DirectionActions } from "../reducers/direction";
import { IDirection } from "../../types/direction";

export const DirectionThunks = {
    getDirectionTHUNK: () => async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
        try {
            const response = await customFetch(`${serverUrl}/direction`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (!response.ok) {
                dispatch(DirectionActions.setDirectionsAction(null))
                return
            }
            const data = await response.json()
            dispatch(DirectionActions.setDirectionsAction(data as IDirection[]))
        } catch (e) {

        }
    },
   
}
