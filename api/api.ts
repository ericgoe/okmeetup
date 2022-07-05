import { DateTime } from 'luxon'

export namespace API {
    export type Event = {
        id: string
        owner: string
        decidedTime: null | Date
        title: string
        description: string
    }
}

// TODO: implement this method using Fetch
export const generateParticipantId = async () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve('demo-uuid'), 1500)
    })
}

// TODO implement this method using Fetch
export const fetchEvents = async (
    participantId: string,
): Promise<API.Event[]> => {
    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve([
                    {
                        id: '29enia',
                        owner: 'OWNER-UUID',
                        title: 'Nationalfeiertag',
                        description: 'Description',
                        decidedTime: new Date(),
                    },
                    {
                        id: '29eu3a',
                        owner: 'OWNER-UUID',
                        title: 'Buch lesen',
                        description: 'Description',
                        decidedTime: DateTime.now()
                            .plus({
                                day: 10,
                            })
                            .toJSDate(),
                    },
                    {
                        id: '29eu3a',
                        owner: 'OWNER-UUID',
                        title: 'Buch lesen',
                        description: 'Description',
                        decidedTime: null,
                    },
                ]),
            1500,
        )
    })
}
