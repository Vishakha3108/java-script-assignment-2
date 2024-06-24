/* Imagine you are working for a digital banking platform, and your team is tasked with improving the security of customer accounts. Your challenge is to creat a function that genrates a random 4 - digit OTP for authentication purpose.*/

function  genrateOtp() {
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp.toString();
}
console.log(`Here is your otp: ${genrateOtp()}`);
