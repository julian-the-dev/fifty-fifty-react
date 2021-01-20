import { IMAGES } from '../../common/common.const'
import * as Yup from 'yup'

export const defaultFiftyFifty = {
    title: 'Who is cutest puppy ?',
    isCorrect: IMAGES.FIRST,
    firstUrl:
        'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_123087826-e1548785863702.jpg?resize=768,503',
    secondUrl:
        'https://www.rd.com/wp-content/uploads/2019/01/shutterstock_610222331-e1548785987567.jpg?resize=768,519',
    user: null,
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
