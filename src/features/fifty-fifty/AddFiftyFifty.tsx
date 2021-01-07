import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FiftyFifty } from './FiftyFifty';
import { addFiftyFifty } from './FiftyFiftySlice';
import FormFiftyFifty from './FormFiftyFifty'

const AddFiftyFifty = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (newValues: FiftyFifty) => {
        const action = await dispatch(addFiftyFifty(newValues));
        history.push('/fifty-fifty/display/' + action.payload.id);
    }
    

    return (
        <FormFiftyFifty submit={(newValues: FiftyFifty) => onSubmit(newValues)}/>
    )
}

export default AddFiftyFifty
