package com.library.Contorller;

import com.library.Entity.Courses;
import com.library.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class CourseController {

    @Autowired
    public CourseRepository courseRepo;

    @PostMapping("/AddCourse")
    public ResponseEntity<?> addCourse(@RequestBody Courses courseObj){
        courseRepo.save(courseObj);
        return new ResponseEntity<>("course added", HttpStatus.OK);
    }
    @GetMapping("/GetCourse")
    public ResponseEntity<?> getCourses(){
        var course = courseRepo.findAll();
        return new ResponseEntity<>(course,HttpStatus.OK);
    }
    @GetMapping("/GetCourseById/{courseId}")
    public ResponseEntity<?> getCourseById(@PathVariable int courseId){
        var course = courseRepo.findById(courseId).orElseThrow(()->new RuntimeException("course not fond"));
        var data = courseRepo.findById((int) course.getCourseId());
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
}
