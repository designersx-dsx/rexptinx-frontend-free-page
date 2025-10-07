import axios from "axios";
const url = "https://rexptin.truet.net/api";
// send email
export const sendEmail = async (email) => {
  try {
    const data = await axios.post(`${url}/auth/LoginWithEmailOTP`, {
      email
    });
    return data.data;
  } catch (error) {
    console.error(
      "Error sending email OTP:",
      error?.response?.data || error.message
    );
    return error;
  }
};
