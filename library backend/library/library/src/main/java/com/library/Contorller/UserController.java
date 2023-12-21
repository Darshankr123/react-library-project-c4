package com.library.Contorller;

import com.library.Repository.UserRepository;
import com.library.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class UserController {
   @Autowired
    private UserRepository userRepo;

   @PostMapping("/AddUser")
    public ResponseEntity<?> createNewUser(@RequestBody User objUser){
       userRepo.save(objUser);
       return new ResponseEntity<>("user saved successfully", HttpStatus.OK);
   }
   @GetMapping("/GetUser")
    public ResponseEntity <List<User>> getUser(){
       var User = userRepo.findAll();
       return new ResponseEntity<>(User,HttpStatus.OK);
   }
}
