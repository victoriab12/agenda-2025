export interface Contact {
    id: string,
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    number:string,
    company: string,
    image: string,
    isFavorite?: boolean,
}


export type NewContact = Omit<Contact, "id">;