package com.library.Contorller;

import com.library.Dto.UserDto;
import com.library.Entity.Admin;
import com.library.Repository.AdminRepository;
import com.library.Repository.UserRepository;
import com.library.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")

public class LoginController {

    @Autowired
    public UserRepository userRepo;

    @Autowired
    public AdminRepository adminRepo;

    @PostMapping("/Login")
    public ResponseEntity<?> userLogin(@RequestBody UserDto obj){
        if(obj.getUserType().equals("admin")){
            Admin admin = adminRepo.findById(obj.email).orElseThrow(()->new RuntimeException("admin not found"));
            if(admin.getPassword().equals(obj.getPassword())){
                return new ResponseEntity<>("admin", HttpStatus.OK);
            }
            else {
                throw new RuntimeException("invalid password");
            }
        } else if (obj.getUserType().equals("student")) {
            User user = userRepo.findByEmail(obj.email).orElseThrow(()->new RuntimeException("user not found"));
            if(user.getPassword().equals(obj.getPassword())){
                return new ResponseEntity<>("student",HttpStatus.OK);
            }
            else {
                throw new RuntimeException("invalid password");
            }
        }
        else {
            throw new RuntimeException("select userType");
        }
    }
}
