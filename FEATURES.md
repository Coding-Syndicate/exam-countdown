# 📘 Exam Timer App – Feature Plan

This file documents the intended features and goals for the Exam Timer App project, now being rebuilt in **TypeScript** with **Tailwind CSS**.

---

## 🕰 Main Features

1. **Countdown Timer**
   - Counts down to the next upcoming exam.

2. **Smart Timer Transition**
   - When countdown hits `00:00`, switch to a **count-up timer** showing how long the exam has been running.
   - After the exam duration ends, resume countdown to the next exam.

3. **Exam Duration Awareness**
   - Each exam has a duration (e.g., 2h).
   - Count-up runs until duration is over.

---

## 📅 Dynamic Exam Table

4. **Automatically List Exams**
   - Table displays exams based on a predefined schedule (with module codes and dates).

5. **Dynamically Resize Table**
   - Table adjusts based on number of upcoming exams.

6. **Strikethrough Past Exams**
   - If `current date > exam date`, strike through the row and gray it out.
   - Also mark it as “Done”.

7. **Countdown in Table**
   - Show how many days left for each exam.

8. **Automatically Sort**
   - Keep upcoming exams on top of the table.
   - Past exams go to the bottom (if shown at all).

---

## ⚙️ Tech Stack & Learning Goals

9. **Use TypeScript**
   - Rebuild the project in TypeScript to catch errors early and improve reliability.
   - Learn proper type definitions and avoid Java-style assumptions.

10. **Tailwind CSS for Styling**
    - Learn Tailwind by writing raw, utility-first classes.
    - Use classes like `line-through`, `text-white`, `text-gray-500`, etc.

11. **Raw DOM Manipulation First (Optional)**
    - Understand the core behavior before moving to frameworks like React.

---

✅ This document helps guide the development process and serves as a progress checklist.