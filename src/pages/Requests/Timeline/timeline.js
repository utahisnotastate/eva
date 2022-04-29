import React from "react"
import {Timeline, TimelineEvent} from 'react-event-timeline'
import {Close} from "@mui/icons-material";

export default function TimeLine({updates}) {
    return (
        <Timeline>
            {updates && updates.length > 0 ? updates.map((update, index) => (
                    <TimelineEvent
                        createdAt="2016-09-11 09:06 AM"
                        icon={<i className="material-icons md-18">email</i>}
                        key={index}
                        title={update.title}
                    >
                        {update.description}
                    </TimelineEvent>
                ))
                : null}



        </Timeline>
    )

}

/*
* <TimelineEvent createdAt="2016-09-12 10:06 PM"
                           icon={<i className="material-icons md-18">textsms</i>}
                           title="John Doe sent a SMS"
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
                title="You sent an email to John Doe"
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                gentle reminder if you are on track already!
            </TimelineEvent>
            <TimelineEvent
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
                title="You sent an email to John Doe"
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                gentle reminder if you are on track already!
            </TimelineEvent>
            <TimelineEvent
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
                title="You sent an email to John Doe"
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                gentle reminder if you are on track already!
            </TimelineEvent>
            <TimelineEvent
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
                title="You sent an email to John Doe"
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                gentle reminder if you are on track already!
            </TimelineEvent>
            <TimelineEvent
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
                title="You sent an email to John Doe"
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                gentle reminder if you are on track already!
            </TimelineEvent>
*
* */