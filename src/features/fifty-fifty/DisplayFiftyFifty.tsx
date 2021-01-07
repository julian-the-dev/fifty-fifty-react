import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { IMAGES } from '../../common/common.const'
import { getFiftyFiftyById } from './FiftyFiftySlice'

const DisplayFiftyFifty = () => {
    const { id }: any = useParams()
    const fiftyFifty = useSelector((state) => getFiftyFiftyById(state, id))
    console.log('Fifty ?', fiftyFifty);
    const styleImg = {
        width: '100%',
        height: 'auto',
    }

    if (!fiftyFifty) {
        return <div>The fifty-fifty was not found !</div>
    }

    const isImageCorrect = (imageType: IMAGES) => {
        if (imageType == fiftyFifty.isCorrect) {
            alert('Your are correct!')
        } else {
            alert('Wrong!')
        }
    }

    return (
        <div>
            <div>
                <Button>
                    <Link
                        to={'/fifty-fifty/edit/' + fiftyFifty.id}
                        style={{ color: 'white' }}
                    >
                        Edit fifty-fifty
                    </Link>
                </Button>
            </div>
            <div>{fiftyFifty.title}</div>
            <div className="row">
                <div className="col-6">
                    <img
                        alt="first image"
                        src={fiftyFifty.firstUrl}
                        style={styleImg}
                        onClick={(e) => isImageCorrect(IMAGES.FIRST)}
                    />
                </div>
                <div className="col-6">
                    <img
                        alt="second image"
                        src={fiftyFifty.secondUrl}
                        style={styleImg}
                        onClick={(e) => isImageCorrect(IMAGES.SECOND)}
                    />
                </div>
            </div>
        </div>
    )
}

export default DisplayFiftyFifty
