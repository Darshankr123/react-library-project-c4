package com.library.Contorller;

import com.library.Entity.CourseDetails;
import com.library.Repository.CourseDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class CourseDetailsController {

    @Autowired
    public CourseDetailsRepository courseContentRepo;

    @PostMapping("/AddCourseContent")
    public ResponseEntity<?> addContent(@RequestBody CourseDetails obj){
        courseContentRepo.save(obj);
        return new ResponseEntity<>("course link added", HttpStatus.OK);
    }
    @GetMapping("/GetCourseLinks")
    public ResponseEntity<?> getContent(){
        var courseContent = courseContentRepo.findAll();
        return new ResponseEntity<>(courseContent,HttpStatus.OK);
    }

}
