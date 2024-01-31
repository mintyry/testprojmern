import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import qrc from 'qrcode';

function QRCode() {
    const { qrCodeId } = useParams();
    const [imgSrc, setImgSrc] = useState('')

    useEffect(() => {
        qrc.toDataURL(`http://localhost:5173/qrcode/${qrCodeId}/scan`)
            .then(url => {
                console.log(url)
                setImgSrc(url);
            })
            .catch(err => {
                console.error(err)
            })
    });

    if(!imgSrc){
        return <div>Loading...</div>
    }



    return (
        <img src={imgSrc} />
    )
}

export default QRCode;