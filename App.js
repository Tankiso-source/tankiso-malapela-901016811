import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const coursesData = [
  {
    id: 1,
    name: 'Fundementals Of Design',
    description: 'Learning The Fundementals Of Information Technology Design',
    image: 'x3.jpg', // Placeholder image URL
    requirements: 'Minimum of 4 credits in Computer Technology & Maths',
    rating: 0,
  },
  {
    id: 2,
    name: 'Software Technology',
    description: 'Creating & Developing Latest Software',
    image: 'x2.jpg', // Placeholder image URL
    requirements: ' 3 credits in Maths and Computer Skills .',
    rating: 0,
  },
  {
    id: 3,
    name: 'International Business IT',
    description: 'Exploring and Discovering Latest In Business Telecommunications.',
    image: 'x7.jpg',
    requirements: 'Minimum Of 4 Credits In English & Maths',
    rating: 0,
  },
  {
    id: 4,
    name: 'Architecture',
    description: 'The Design And Implimentation Of Latest Industrial Technology',
    image: 'x6.jpg',
    requirements: 'Minimum of 4 credits in Maths and Physical science ',
    rating: 0,
  },
  {
    id: 5,
    name: 'Fashion Design',
    description: 'The Design Of The Latest fashion Trends In Industry',
    image: 'x5.jpg',
    requirements: 'Minimum of 3 credits in English,Physics and Other Subject.',
    rating: 0,
  },
];

const CourseItem = ({ course, onPress, onRate }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(course)}>
      <Image source={{ uri: course.image }} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        <Text style={styles.courseRequirements}>{course.requirements}</Text>
        <TouchableOpacity style={styles.rateButton} onPress={() => onRate(course)}>
          <Text style={styles.rateButtonText}>Rate Course</Text>
        </TouchableOpacity>
        <Text style={styles.courseRating}>Rating: {course.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderCourseItem = ({ item }) => {
    return <CourseItem course={item} onPress={setSelectedCourse} onRate={rateCourse} />;
  };

  const rateCourse = (course) => {
    if (course.rating < 6) {
      const updatedCourses = coursesData.map((c) => {
        if (c.id === course.id) {
          return { ...c, rating: c.rating + 1 };
        } else {
          return c;
        }
      });
      coursesData = updatedCourses;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.limkokwing}>LIMKOKWING </Text>
      <Text style={styles.university}>UNIVERSITY</Text>
      <Text style={styles.theBest}>Be A Proud Limkokwing Graduate.</Text>
      <Text style={styles.coursePrograms}>Modules</Text>
      <FlatList
        data={coursesData}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.courseList}
      />
      {selectedCourse && (
        <View style={styles.selectedCourseContainer}>
          <Text style={styles.selectedCourseName}>{selectedCourse.name}</Text>
          <Text style={styles.selectedCourseDescription}>{selectedCourse.description}</Text>
          <Text style={styles.selectedCourseRequirements}>{selectedCourse.requirements}</Text>
        </View>
      )}

      <Text style={styles.limkoWelcome}>WELCOME TO LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  limkokwing: {
    fontSize: 70,
    fontFamily: 'bold',
    color: 'green',
  },
  university: {
    fontSize: 50,
    fontFamily: 'bold',
    color: 'green',
  },
  theBest: {
    fontSize: 30,
    backgroundColor: '',
    color: 'yellow'
  },
  coursePrograms: {
    fontSize: 60,
    fontFamily: 'bold',
    color: 'brown',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    color: 'limegreen',
  },
  courseImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  courseInfo: {
    flex: 1,
    color: 'red',
  },
  courseName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00ced1',
  },
  courseDescription: {
    fontSize: 20,
    color: '#00ced1',
  },
  courseRequirements: {
    fontSize: 20,
    color: '#00ced1',
  },
  rateButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  rateButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  courseRating: {
    fontSize: 30,
    marginTop: 5,
    color: '#00ced1',
  },
  selectedCourseContainer: {
    marginTop: 20,
    color: '#fff',
  },
  selectedCourseName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  selectedCourseDescription: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },
  selectedCourseRequirements: {
    fontSize: 20,
    color: '#fff',
  },
  selectedCourseRating: {
    fontSize: 20,
    color: '#fff',
  },
  limkoWelcome: {
    fontSize: 30,
    marginTop: 30,
    color: '#7df9ff',
  },
});

export default App;

