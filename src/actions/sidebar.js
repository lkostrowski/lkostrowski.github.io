const CONSTANTS = {
    TOGGLE: 'TOGGLE'
};

export {CONSTANTS};

export default {
    toggleSidebar() {
        return {
            type: CONSTANTS.TOGGLE
        }
    }
}