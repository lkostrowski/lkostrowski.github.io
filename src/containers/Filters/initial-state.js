const filters = [
    {
        open: true,
        name: 'Author',
        id: 0,
        items: [
            {
                label: 'Frank Miller',
                id: '1',
                selected: true
            },
            {
                label: 'Greg Rucka',
                id: '2',
                selected: false
            },
            {
                label: 'Garth Ennis',
                id: '3',
                selected: false
            }
        ]
    },
    {
        name: 'Genre',
        id: 1,
        open: false,
        items: [
            {
                label: 'Superhero',
                id: '1',
                selected: true
            },
            {
                label: 'Crime',
                id: '2',
                selected: false
            },
            {
                label: 'Noir',
                id: '3',
                selected: false
            }
        ]
    }
];

export default filters;