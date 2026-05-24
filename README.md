# 🗳️ ELECTION HUB  
### Web-Based Electoral System for STEM Society

---

## 👩‍💻 Group Members
1. AQSA FIDA (BCS-014)  
2. EMAN KHALID (BCS-026)  
3. MISHAL RAZIQ (BCS-064)  
4. RABBIA NOOR (BCS-070)

---

## 🎓 Section
BCS-V “B”

---

## 📌 Abstract
**Election Hub** is a web-based electoral system developed to digitalize traditional election processes for STEM societies. It provides a transparent, secure, and user-friendly platform for conducting online elections.

The system allows voters to register, log in, view candidates, cast votes, and view results in real-time. Admin users can manage candidates and monitor election progress.

It is built using **HTML, CSS, JavaScript** and **Firebase (Authentication + Firestore Database)** as backend services.

---

## 🚀 Features
- User registration and login system  
- Secure authentication using Firebase  
- Candidate listing and election details  
- One user = one vote system  
- Real-time vote counting  
- Admin dashboard for managing elections  
- Result display system  
- Profile management  

---

## 🛠️ Tools & Technologies

### Frontend
- HTML5  
- CSS3  
- JavaScript  

### Backend / Database
- Firebase Authentication  
- Firebase Firestore Database  
- Firebase Realtime Updates  

### Development Tools
- Visual Studio Code  
- Google Chrome  
- Firebase Console  

---

## 🏗️ System Architecture
The system follows a **3-tier architecture**:

- **Presentation Layer:** HTML, CSS, JavaScript (User Interface)  
- **Logic Layer:** JavaScript (Validation + Firebase interaction)  
- **Backend Layer:** Firebase (Auth + Database + Security Rules)  

---

## 🔐 Vote Integrity System
To ensure fairness:

- Each user has a unique Firebase UID  
- A `hasVoted` flag is stored in the database  
- Users can vote only once  
- After voting:
  - `hasVoted = true`  
  - Candidate vote count increases  
  - User is redirected to confirmation page  

---

## 🗄️ Database Design (Firebase Firestore)

### Users Collection
- userId (String)  
- name (String)  
- email (String)  
- role (Admin/Voter)  
- hasVoted (Boolean)  

### Candidates Collection
- candidateId (String)  
- name (String)  
- society (String)  
- position (String)  
- voteCount (Number)  

### Votes Collection
- voteId (String)  
- userId (String)  
- candidateId (String)  

---

## 📸 System Screenshots
📌 Home Page  
📌 Signup Page  
📌 Login Page  
📌 Dashboard  
📌 Voting Page  
📌 Results Page  
📌 Profile Page  

*(Screenshots folder can be added for better presentation)*

---

## 🧪 Testing
| Test Case | Description | Result |
|-----------|------------|--------|
| TC-01 | Access without login | Redirect to login |
| TC-02 | Double voting attempt | Blocked |
| TC-03 | Invalid login | Error shown |
| TC-04 | Add candidate | Successfully added |

---

## ⚠️ Limitations
- Internet required  
- Firebase free-tier limits  
- Basic security (demo-level system)  

---

## 🔮 Future Enhancements
- Two-factor authentication  
- Advanced security rules  
- Mobile application (React Native)  
- Analytics dashboard  
- End-to-end encryption  

---

## 🎯 Conclusion
Election Hub successfully demonstrates a modern web-based voting system using Firebase and front-end technologies. It ensures transparency, usability, and efficiency, fulfilling the requirements of the Web Engineering course and Capstone project.

---

## ⭐ Project Status
✔ Completed for Academic Submission  
✔ Fully Functional Web System  
