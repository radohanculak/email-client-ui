import axios from 'axios';
import * as requests from './requests/requests';
import FormData from 'form-data';
import * as dotenv from 'dotenv';
// dotenv.config()

// const url = process.env.URL ?? '';
const url = 'http://localhost:8765';

export const signIn = (signInRequest: requests.signInRequest) => {
  return (axios
    .post(url + '/auth/sign-in', signInRequest, {
      headers: {
        'Content-Type': 'application/json',
      },
    }));
};

export const signOut = () => {
  return (axios
    .post(url + '/auth/sign-out', {
      headers: {
        'Content-Type': 'application/json',
      },
    }));
};


export class EmailClient {
  sendEmail(sendEmailRequest: requests.sendEmailRequest, auth_key: string[]) {
    const formData = new FormData();
    formData.append('to_address', sendEmailRequest.to_address);
    formData.append('subject', sendEmailRequest.subject);
    formData.append('body', sendEmailRequest.body);
    formData.append('stuff', sendEmailRequest.stuff);
    axios
      .post(url + '/api/email/send', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Cookie: auth_key,
        },
      })
      .then((response) => {
        console.log(response.status);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  ping() {
    axios
      .get(url + '/app')
      .then((response) => {
        console.log(response.status);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  listEmails(listEmailsRequest: requests.listEmailsRequest, auth_key: string[]) {
    axios
      .get(url + '/api/email', {
        params: listEmailsRequest,
        headers: {
          'Content-Type': 'application/json',
          Cookie: auth_key,
        },
      })
      .then((response) => {
        console.log(response.status);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  async listMailboxes(auth_key: string[]) {
    axios
      .get(url + '/api/mailbox', {
        headers: {
          Cookie: auth_key,
        },
      })
      .then((response) => {
        console.log(response.status);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  getEmailInDetail(emailDetailRequest: requests.emailDetailRequest, auth_key: string[]) {
    axios
      .get(url + '/api/emailDetail', {
        params: emailDetailRequest,
        headers: {
          'Content-Type': 'application/json',
          Cookie: auth_key,
        },
      })
      .then((response) => {
        console.log(response.status);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  deleteEmail(deleteEmailRequest: requests.deleteEmailRequest, auth_key: string[]) {
    axios
      .delete(url + 'api/email', {
        params: deleteEmailRequest,
        headers: {
          'Content-Type': 'application/json',
          Cookie: auth_key,
        },
      })
      .then((response) => {
        console.log(response.status);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  downloadAttachment(downloadAttachmentRequest: requests.downloadAttachmentRequest, auth_key: string[]) {
    axios
      .get(url + '/api/attachment', {
        params: downloadAttachmentRequest,
        headers: {
          'Content-Type': 'application/json',
          Cookie: auth_key,
        },
      })
      .then((response) => {
        console.log(response.status);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}
