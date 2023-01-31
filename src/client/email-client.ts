import axios from 'axios';
import * as requests from './requests/requests';
import FormData from 'form-data';

axios.defaults.withCredentials = true;
const url = 'http://localhost:8765';

class EmailClient {
  signIn(signInRequest: requests.signInRequest) {
    return axios
      .post(url + '/auth/sign-in', signInRequest, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  };

  signOut(){
    return (axios
      .post(url + '/auth/sign-out', {
        headers: {
          'Content-Type': 'application/json',
        },
      }));
  };

  sendEmail(sendEmailRequest: requests.sendEmailRequest) {
    const formData = new FormData();
    formData.append('to_address', sendEmailRequest.to_address);
    formData.append('subject', sendEmailRequest.subject);
    formData.append('body', sendEmailRequest.body);
    formData.append('stuff', sendEmailRequest.stuff);
    axios
      .post(url + '/api/email/send', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
  }

  ping() {
    axios
      .get(url + '/app');
  }

  listEmails(listEmailsRequest: requests.listEmailsRequest) {
    axios
      .get(url + '/api/email', {
        params: listEmailsRequest,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  async listMailboxes() {
    axios
      .get(url + '/api/mailbox').then((response) => {
        console.log(response.status);
        return response.data;
      });
  }

  getEmailInDetail(emailDetailRequest: requests.emailDetailRequest) {
    axios
      .get(url + '/api/emailDetail', {
        params: emailDetailRequest,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  deleteEmail(deleteEmailRequest: requests.deleteEmailRequest) {
    axios
      .delete(url + 'api/email', {
        params: deleteEmailRequest,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  downloadAttachment(downloadAttachmentRequest: requests.downloadAttachmentRequest) {
    axios
      .get(url + '/api/attachment', {
        params: downloadAttachmentRequest,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }
}

export const client = new EmailClient();
