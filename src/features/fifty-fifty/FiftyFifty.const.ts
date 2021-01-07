import { IMAGES } from '../../common/common.const'
import * as Yup from 'yup'

export const defaultFiftyFifty = {
    title: 'Who is the sexiest ?',
    isCorrect: IMAGES.FIRST,
    firstUrl:
        'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sunny-leone-poses-for-a-red-hot-picture-201610-1498306333.jpg',
    secondUrl:
        'https://art.ngfiles.com/images/749000/749479_kumiko11_sexy-girl.jpg?f1545350449',
}

export const validationSchemaFiftyFifty = Yup.object({
    title: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
    isCorrect: Yup.string().required(),
    firstUrl: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
    secondUrl: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
})
