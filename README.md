# TaskHive - Micro-Task and Earning Platform

TaskHive is a micro-tasking platform that connects Buyers and Workers to efficiently complete tasks in exchange for rewards. It offers a secure payment system, role-based user management, and intuitive dashboards for different users.

![TaskHive Screenshot](https://raw.githubusercontent.com/mrakashsaha/taskHive/refs/heads/main/public/TaskHiveSS.png)

---

🔗 **Live Website:** [Task-Hive](https://task-hive-1.web.app)  
👨‍💻 **Admin Login Credentials:**  
- **Username:** mr.akashsaha@gmail.com  
- **Password:** Aa@111  

---



## 🛠 Technologies Used

- **Frontend:** React.js, React Router, Tailwind CSS, DaisyUI, Framer Motion  
- **Backend & Database:** Firebase, Stripe API (for payments), MongoDB  
- **State Management:** React Hook Form, React Query  
- **Other Tools:** Axios, SweetAlert2, Moment.js  

## 🚀 Features of the Platform

1. **Dynamic User Roles:**  
   - **Worker:** Earn by completing tasks and withdrawing coins as cash.  
   - **Buyer:** Create, manage, and pay for tasks.  
   - **Admin:** Manage users, tasks, and platform integrity.

2. **Fully Responsive Design:**  
   - Optimized for mobile, tablet, and desktop devices.

3. **Engaging Home Page:**  
   - Hero section with animated sliders.  
   - Featured sections for top workers, testimonials, and more.

4. **Secure User Authentication:**  
   - Email/password login and Google sign-in.  
   - Role-based access control for Workers, Buyers, and Admins.

5. **Worker Dashboard:**  
   - Task list with details and submissions.  
   - Earnings and withdrawal options with clear calculations.

6. **Buyer Dashboard:**  
   - Add tasks with detailed input fields.  
   - Purchase coins using Stripe-based payment integration.  
   - View and approve task submissions.

7. **Admin Dashboard:**  
   - Approve withdrawal requests and manage coins.  
   - Update user roles and remove users if necessary.  
   - View, update, and delete tasks seamlessly.

8. **Stripe Payment Gateway:**  
   - Buyers can purchase coins securely via Stripe integration.

9. **Real-Time Notifications:**  
   - Workers and Buyers are notified about updates and task statuses.

10. **Secure Data Handling:**  
    - Environment variables are used to protect Firebase and MongoDB credentials.


## 📌 Dependencies

### 🔹 Main Dependencies
```json
"dependencies": {
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.2",
  "axios": "^1.7.9",
  "firebase": "^11.2.0",
  "framer-motion": "^12.0.6",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "match-sorter": "^8.0.0",
  "moment": "^2.30.1",
  "motion": "^12.0.6",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-fast-marquee": "^1.6.5",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.3",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1"
}
```

### 🔹 Development Dependencies
```json
"devDependencies": {
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.23",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "postcss": "^8.5.1",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.5"
}
```

---


## 📥 Installation Guide

To run TaskHive locally, follow these steps:

1️⃣ **Clone the Repository:**  
```sh
git clone https://github.com/mrakashsaha/taskHive.git
cd taskhive
```

2️⃣ **Install Dependencies:**  
```sh
npm install
```

3️⃣ **Start the Development Server:**  
```sh
npm run dev
```

4️⃣ **Build for Production:**  
```sh
npm run build
```


---

## 🔗 Resources and Live Links

- **Live Website:** [Task-Hive](https://task-hive-1.web.app)  
- **GitHub Repository:** [TaskHive GitHub](https://github.com/mrakashsaha/taskHive)  
- **Stripe API Documentation:** [Stripe Docs](https://stripe.com/docs)  
- **Firebase Setup Guide:** [Firebase Docs](https://firebase.google.com/docs)  

---

## 🙏 Thank You!

We appreciate you checking out **TaskHive**! If you have any feedback or suggestions, feel free to contribute or reach out. 😊