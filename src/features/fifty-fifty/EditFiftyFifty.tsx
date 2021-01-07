import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { FiftyFifty } from './FiftyFifty';
import { addFiftyFifty, getFiftyFiftyById, updateFiftyFifty } from './FiftyFiftySlice';
import FormFiftyFifty from './FormFiftyFifty'

const EditFiftyFifty = () => {
    const {id}: any = useParams();
    const fiftyFifty = useSelector(state => getFiftyFiftyById(state, id));
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (newValues: FiftyFifty) => {
        const action = await dispatch(updateFiftyFifty(newValues));
        history.push('/fifty-fifty/display/' + newValues.id)
    }
    

    return (
        <FormFiftyFifty submit={(newValues: FiftyFifty) => onSubmit(newValues)} fiftyFifty={fiftyFifty}/>
    )
}

export default EditFiftyFifty
