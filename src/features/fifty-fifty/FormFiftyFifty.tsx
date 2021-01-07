import classNames from 'classnames'
import { useFormik } from 'formik'
import { IMAGES } from '../../common/common.const'
import {
    defaultFiftyFifty,
    validationSchemaFiftyFifty,
} from './FiftyFifty.const'

const FormFiftyFifty = (props: any) => {
    const isEdit = !!props.fiftyFifty
    const init = props.fiftyFifty ?? { ...defaultFiftyFifty }
    const formik = useFormik({
        initialValues: init,
        validationSchema: validationSchemaFiftyFifty,
        onSubmit: async (values) => {
            props.submit(values)
        },
    })

    const styleImg = {
        width: '100%',
        height: 'auto',
    }

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
            <button type="submit" className="btn btn-primary">
                {isEdit ? 'Edit' : 'Create'}
            </button>
            <div>
                {isEdit
                    ? 'Please edit this fifty fifty'
                    : 'Please create a new fifty fifty'}
            </div>
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
                        id="first url"
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
                        id="second url"
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

export default FormFiftyFifty
