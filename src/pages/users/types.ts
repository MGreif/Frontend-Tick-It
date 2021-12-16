export interface IUser {
    _id: string,
    name: string,
    surname: string,
    username: string,
    password: string | null,
    profilePicture: string
}