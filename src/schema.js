import React from 'react'
const auth = "1"
const initData = {
    user:[
            {
                id:'1',
                username:'Pooh',
                firstName:'Pooh',
                lastName:'Shit',
                nation:'Thailand',
                city:"Bangkok",
                intro:"YongNo dek dok",
                gender: 'male',
                age: 20,
                friend:[
                    '2'
                ],
                hobbies:[
                    '1'
                ],
                describe:"Don't know what to say",
                favorites:[
                    '3'
                ]
            },
            {
                id:'2',
                username:'YoungNo',
                firstName:'No',
                lastName:'Nukeiad',
                nation:'Thailand',
                city:"Bangkok",
                intro:"Pooh Shit dek dok",
                gender: 'other',
                age: 20,
                friend:[
                    '1'
                ],
                hobbies:[
                    '1','2'
                ],
                describe:"Don't know what to say",
                favorites:[
                    '2','3'
                ]
            },
    ],
    hobbies:[
        {
            id:'1',
            name:"Masturbate"
        },
        {
            id:'2',
            name:"Young O"
        },
        {
            id:'3',
            name:"Singing"
        }
    ],
    favorites:[
        {
            id:'1',
            name:'Watching'
        },
        {
            id:'2',
            name:'Cats'
        },
        {
            id:'3',
            name:'Porn'
        }
    ],
    message:[
        {
            id: '1',
            user:['1','2'],
        }
    ],
    text:[
        {
            id:'1',
            message:'1',
            user:'1',
            date: new Date("October 2 2020 4:00:30"),
            text:'No?'
        },
        {
            id:'2',
            message:'1',
            user:'2',
            date: new Date("October 2 2020 4:00:31"),
            text:'Young No'
        },
        {
            id:'3',
            message:'1',
            user:'2',
            date: new Date("October 2 2020 4:00:32"),
            text:'BullShit?'
        },
    ]
}

const database = {user:auth, data: initData}

export default database