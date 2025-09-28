# Project 6: NodeJS-Authentication-System

## Cách chạy
Cài đặt dependencies:
```bash
npm install
npm npm install axios
```

Chạy server:
```bash
node app.js
```

## Các trang & chức năng

### 1. Signup (/user/signup)
- Giao diện signup hiển thị  
  ![](public/results/signup_page.png)  
- Không tick captcha → lỗi  
  ![](public/results/signup_fail_captcha.png)  
- Tick captcha + nhập đúng → đăng ký thành công  
  ![](public/results/signup_success.png)  
- MongoDB có user mới  
  ![](public/results/mongo_user_created.png)  

---

### 2. Signin (/user/signin)
- Giao diện signin hiển thị  
  ![](public/results/signin_page.png)  
- Sai email/password → lỗi  
  ![](public/results/signin_fail.png)  
- Đúng email/password → login thành công  
  ![](public/results/signin_success.png)  

---

### 3. Homepage (/homepage)
- Chưa login → redirect signin  
  ![](public/results/profile_redirect.png)  
- Đã login → hiển thị user + Student ID + Fullname  
  ![](public/results/profile_success.png)  

---

### 4. Logout (/user/signout)
- Logout thành công  
  ![](public/results/logout.png)  

---

### 5. Forgot Password (/user/forgot-password)
- Giao diện forgot password  
  ![](public/results/forgot_page.png)  
- Email không tồn tại → lỗi  
  ![](public/results/forgot_fail.png)  
- Email hợp lệ → gửi mail reset thành công  
  ![](public/results/forgot_success.png)  
---

### 6. Reset Password (/user/change-password)
- Token không hợp lệ/hết hạn → lỗi  
  ![](public/results/reset_fail.png)  
- Token hợp lệ (từ email) → đổi password thành công  
  ![](public/results/reset_success.png)  


---

### 7. Google OAuth Login (/auth/google)
- Click login with Google → Google popup  
  ![](public/results/google_login.png)  
- Config đúng → login thành công  
  ![](public/results/google_success.png)  

---

### 8. Captcha
- Không tick captcha → signup thất bại  
  ![](public/results/signup_fail_captcha.png)  
- Tick captcha → signup thành công  
  ![](public/results/signup_success.png)  

---

### 9. MongoDB kiểm tra
- User tạo mới  
  ![](public/results/mongo_user_created.png)   

---

## Hoàn thành
- Đã test tất cả các trang theo chức năng.  
- Ảnh minh họa lưu trong `public/results/`.  
