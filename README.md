## 1. Add at least 3 Project features
Features
1. Users can easily gather  knowledge about courses by reading description.
2. The remaining credit hours, total credit hours, total price and selected course will be shown into the cart section.
3.  Users can add courses as they like, and the course credit hours would not exceed limit of 20hr, a notification will be shown. And they can't select same course more than one time.


## 2.Discuss how you managed the state in your assignment project.
I've declared several state variables using the useState hook to manage different pieces of information:

- allCourses: An array to store all the available courses fetched from a JSON file.
- selectedCourses: An array to keep track of the courses selected by the user.
- remaining: A variable to represent the remaining credit hours.
- totalHour: A variable to represent the total credit hours of selected courses.
- totalPrice: A variable to represent the total price of selected courses.

Here I use the useEffect hook to fetch data from a JSON file when the component mounts ([] dependency array ensures it only runs once when the component mounts).
The fetched data is then stored in the allCourses state variable using the setAllCourses function.

Course selection updates state variables.

Toast notifications from react-toastify library provide user feedback.
