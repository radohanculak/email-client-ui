import axios from 'axios';
import * as requests from './requests/requests';
import FormData from 'form-data';

const url =  import.meta.env.VITE_URL;
axios.defaults.withCredentials = true;

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
    formData.append('stuff', sendEmailRequest.stuff[0]);
    console.log(sendEmailRequest.stuff[0]);
    return axios
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
    return axios
      .get(url + '/api/email', {
        params: listEmailsRequest,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  listMailboxes() {
    return axios
      .get(url + '/api/mailbox', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  getEmailInDetail(emailDetailRequest: requests.emailDetailRequest) {
    return axios
      .get(url + '/api/emailDetail', {
        params: emailDetailRequest,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  deleteEmail(deleteEmailRequest: requests.deleteEmailRequest) {
    return axios
      .delete(url + 'api/email', {
        params: deleteEmailRequest,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  downloadAttachment(downloadAttachmentRequest: requests.downloadAttachmentRequest) {
    return axios
      .get(url + '/api/attachment', {
        params: downloadAttachmentRequest,
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'blob'
      });
  }

  sendNotifitcation(notificationRequest: requests.sendNotificationRequest) {
    Notification.requestPermission().then(perm => {
      if (perm == "granted") {
        new Notification(notificationRequest.title, {
          body: notificationRequest.body,
          icon: notificationRequest.body
        }) 
      }
    });
  }
}

export const client = new EmailClient();
