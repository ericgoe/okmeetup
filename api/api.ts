// TODO: implement this method using Fetch
export const generateParticipantId = async () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve('demo-uuid'), 1500)
    })
}
