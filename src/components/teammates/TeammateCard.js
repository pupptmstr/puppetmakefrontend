import React, {useState} from "react";
import '../../resources/styles/teammates/TeammateCard.css'
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import 'react-medium-image-zoom/dist/styles.css'


function TeammateCard(props) {
    const date = new Date();
    const [isZoomed, setZoomed] = useState(false);
    const [page, setPage] = useState(0);
    const {
        first_name,
        surname,
        nickname,
        hired_at,
        global_role,
        current_role,
        main_photo_link,
        description,
        social_links,
        photos
    } = props;

    return (
        <div className='big-teammate-card'>
            <img className='big-avatar' src={main_photo_link} alt='avatar'/>
            <div className='big-teammate-card-body'>
                <div className='inline-teammate-info'>
                    <div className='full-name'>
                        <h2>{`${first_name} ${nickname} ${surname}`}</h2>
                    </div>
                    <div className='role'>{`${global_role}`}</div>
                    <div className={'years-in-company'}>
                        {`Сколько лет в компании: ${date.getFullYear() - hired_at.Year + 1}`}
                    </div>
                    <div className={'curr-role'}> {`Нынешняя роль в компании: ${current_role}`}</div>
                    <div className={'description'}>
                        {`Краткая информация: ${description}`}
                    </div>
                    <div className={'contact-info'}> Контакты для связи: |
                        {
                            social_links.map(link =>
                                <a href={'https://' + link} target="_blank"> {link} |</a>
                            )
                        }
                    </div>
                </div>

                <div className='simple-flex'
                     style={{justifyContent: (photos ? photos.slice(page * 3, 3 * (page + 1)).length : 0) === 3 ? 'space-between' : 'start'}}
                >
                    <button
                        className='prev-btn-photos'
                        onClick={() => setPage(Math.max(page - 1, 0))}
                    />
                    {photos.slice(page * 3, 3 * (page + 1)).map((photo, key) =>
                            <a href={photo} target={'_blank'}><img className={'one-photo'} src={photo} alt={photo} id={key}/></a>

                    )}

                    <button
                        className='next-btn-photos'
                        onClick={() =>
                            setPage(Math.min(
                                page + 1, photos
                                    ? Math.ceil(photos.length / 3) - 1 : null)
                            )
                        }
                    />
                </div>

                <button className={'back-btn'} onClick={() => props.history.push(`/`)}>Назад</button>
            </div>
        </div>
    );
}


TeammateCard.propTypes = {
    first_name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    hired_at: PropTypes.object.isRequired,
    global_role: PropTypes.string.isRequired,
    current_role: PropTypes.string.isRequired,
    main_photo_link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    social_links: PropTypes.string.isRequired,
    photos: PropTypes.string.isRequired
};

export default withRouter(TeammateCard);