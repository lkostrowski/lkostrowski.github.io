import PT from 'prop-types';

export default {
    cover: PT.shape({
        src: PT.string.isRequired,
        alt: PT.string
    }),
    metadata: PT.shape({
        title: PT.string.isRequired
    }),
    className: PT.string
}