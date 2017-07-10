import React from 'react';
import Issue from '../Issue/Issue';
import './IssuesList.css';

import cover1 from '../../assets/dummy-images/issue1.png';
import cover2 from '../../assets/dummy-images/issue2.png';
import cover3 from '../../assets/dummy-images/issue3.png';

const dummyIssues = [
    {
        cover: {
            src: cover1,
            alt: ''
        },
        metadata: {
            title: 'Batman #1 - The Joker'
        }
    }, {
        cover: {
            src: cover2,
            alt: ''
        },
        metadata: {
            title: 'Wonder Woman #5 Temiscera'
        }
    }, {
        cover: {
            src: cover3,
            alt: ''
        },
        metadata: {
            title: 'Punisher MAX #1'
        }
    },{
        cover: {
            src: cover1,
            alt: ''
        },
        metadata: {
            title: 'Batman #1 - The Joker'
        }
    }, {
        cover: {
            src: cover2,
            alt: ''
        },
        metadata: {
            title: 'Wonder Woman #5 Temiscera'
        }
    }, {
        cover: {
            src: cover3,
            alt: ''
        },
        metadata: {
            title: 'Punisher MAX #1'
        }
    },{
        cover: {
            src: cover1,
            alt: ''
        },
        metadata: {
            title: 'Batman #1 - The Joker'
        }
    }, {
        cover: {
            src: cover2,
            alt: ''
        },
        metadata: {
            title: 'Wonder Woman #5 Temiscera'
        }
    }, {
        cover: {
            src: cover3,
            alt: ''
        },
        metadata: {
            title: 'Punisher MAX #1'
        }
    }, {
        cover: {
            src: cover1,
            alt: ''
        },
        metadata: {
            title: 'Batman #1 - The Joker'
        }
    }, {
        cover: {
            src: cover2,
            alt: ''
        },
        metadata: {
            title: 'Wonder Woman #5 Temiscera'
        }
    }, {
        cover: {
            src: cover3,
            alt: ''
        },
        metadata: {
            title: 'Punisher MAX #1'
        }
    },{
        cover: {
            src: cover1,
            alt: ''
        },
        metadata: {
            title: 'Batman #1 - The Joker'
        }
    }, {
        cover: {
            src: cover2,
            alt: ''
        },
        metadata: {
            title: 'Wonder Woman #5 Temiscera'
        }
    }, {
        cover: {
            src: cover3,
            alt: ''
        },
        metadata: {
            title: 'Punisher MAX #1'
        }
    },{
        cover: {
            src: cover1,
            alt: ''
        },
        metadata: {
            title: 'Batman #1 - The Joker'
        }
    }, {
        cover: {
            src: cover2,
            alt: ''
        },
        metadata: {
            title: 'Wonder Woman #5 Temiscera'
        }
    }, {
        cover: {
            src: cover3,
            alt: ''
        },
        metadata: {
            title: 'Punisher MAX #1'
        }
    },
];

export default () => {
    return (
        <ul className="issues-list">
            {dummyIssues.map((issue, key) => (
                <Issue className="issues-list__issue" {...issue} key={key}/>
            ))}
        </ul>
    )
}