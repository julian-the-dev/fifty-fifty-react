import classNames from 'classnames'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { IMAGES } from '../../common/common.const'

const AddFiftyFifty = () => {
    const formik = useFormik({
        initialValues: {
            title: 'Who is the sexiest ?',
            isCorrect: IMAGES.FIRST,
            firstUrl:
                'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sunny-leone-poses-for-a-red-hot-picture-201610-1498306333.jpg',
            secondUrl:
                'https://art.ngfiles.com/images/749000/749479_kumiko11_sexy-girl.jpg?f1545350449',
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    const styleImg = {
        width: '100%',
        height: 'auto',
    }

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <div>Please create a new fifty fifty</div>
            <div
                className={classNames({
                    'form-group': true,
                    'has-error': formik.errors.title,
                })}
            >
                <input
                    id="title"
                    type="text"
                    className={classNames({
                        'form-control': true,
                        'is-invalid': formik.errors.title,
                    })}
                    placeholder="Please add a title"
                    {...formik.getFieldProps('title')}
                />
            </div>

            <div className="row">
                <div
                    className={classNames({
                        'col-6': true,
                        'form-group': true,
                    })}
                >
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="is-correct"
                            {...formik.getFieldProps('isCorrect')}
                            checked={formik.values.isCorrect === IMAGES.FIRST}
                            value={IMAGES.FIRST}
                        />
                        <label className="form-check-label">First image</label>
                    </div>
                    <input
                        id="firstUrl"
                        type="text"
                        className={classNames({
                            'form-control': true,
                            'is-invalid': formik.errors.firstUrl,
                        })}
                        placeholder="Please add a valid url"
                        {...formik.getFieldProps('firstUrl')}
                    />
                    <img
                        style={styleImg}
                        src={formik.values.firstUrl}
                        alt="first image"
                    />
                </div>
                <div
                    className={classNames({
                        'col-6': true,
                        'form-group': true,
                    })}
                >
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="is-correct"
                            {...formik.getFieldProps('isCorrect')}
                            value={IMAGES.SECOND}
                            checked={formik.values.isCorrect === IMAGES.SECOND}
                        />
                        <label className="form-check-label">Second Image</label>
                    </div>
                    <input
                        id="secondUrl"
                        type="text"
                        className={classNames({
                            'form-control': true,
                            'is-invalid': formik.errors.secondUrl,
                        })}
                        placeholder="Please add a valid url"
                        {...formik.getFieldProps('secondUrl')}
                    />
                    <img
                        style={styleImg}
                        src={formik.values.secondUrl}
                        alt="second image"
                    />
                </div>
            </div>
        </form>
    )
}

export default AddFiftyFifty
