


export interface Users{
    _id: number,
    username: {
        type: String,
        index: { unique: true }
    },
    password: String,
    admin: Boolean,
    firstName: String,
    lastName: String,
    email: String


}