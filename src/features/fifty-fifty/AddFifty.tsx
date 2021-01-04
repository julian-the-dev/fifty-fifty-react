import classNames from 'classnames'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const AddFiftyFifty = () => {
    const formik = useFormik({
        initialValues: {
            title: 'Who is the sexiest ?',
            firstUrl:
                'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sunny-leone-poses-for-a-red-hot-picture-201610-1498306333.jpg',
            secondUrl:
                'https://art.ngfiles.com/images/749000/749479_kumiko11_sexy-girl.jpg?f1545350449',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(150, 'Must be 150 characters or less')
                .required('Required'),
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
        width: "200px",
        height: "auto"
    };

    return (
        <form onSubmit={formik.handleSubmit}>
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
                </div>
                <div
                    className={classNames({
                        'col-6': true,
                        'form-group': true,
                    })}
                >
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
                </div>
            </div>
            <img style={styleImg} src={formik.values.firstUrl} alt="first image" />
            <img style={styleImg} src={formik.values.secondUrl} alt="second image" />
        </form>
    )
}

export default AddFiftyFifty
