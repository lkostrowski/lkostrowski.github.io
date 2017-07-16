const types = {
    OPEN: 'OPEN',
    CLOSE: 'CLOSE',
    TOGGLE_FILTER_ITEM: 'TOGGLE_FILTER_ITEM',
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

function toggleFilterItem(filterId, itemId) {
    return {
        type: types.TOGGLE_FILTER_ITEM,
        filterId: filterId,
        itemId: itemId
    }
}

export default {
    open: openFilter,
    close: closeFilter,
    toggleItem: toggleFilterItem
};

export {types as CONSTANTS};