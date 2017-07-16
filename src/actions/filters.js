const types = {
    OPEN: 'OPEN',
    CLOSE: 'CLOSE'
};

function openFilter(filterId) {
    return {
        type: types.OPEN,
        id: filterId
    }
}

function closeFilter(filterId) {
    return {
        type: types.CLOSE,
        id: filterId
    }
}

export default {
    open: openFilter,
    close: closeFilter
};

export {types as CONSTANTS};