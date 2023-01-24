export interface singInRequest{
    "email": string, 
    "password": string,  
}

export interface listEmailsRequest{
    "requested_page_number" : number,
    "page_size" : number,
    "mailbox_name" : string
}

export interface deleteEmailRequest{
    "mailbox_name" : string,
    "sequence_set_top" : number,
    "sequence_set_bottom" : number
}

export interface emailDetailRequest{
    "mailbox_name" : string,
    "sequence_number": number
}

export interface sendEmailRequest{
    "to_address": string,
    "subject": string,
    "body": string,
    "stuff": File
}