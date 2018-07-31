package com.main.controller;

import com.main.model.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @PostMapping("/user")
    @ResponseBody
    public List<User> welcomeUser(String personId, String env) {
        List<User> list = new ArrayList<>(2);
        if (env != null) {
            list.add(new User("user1", personId, "q1"));
            list.add(new User("user2", personId, "q2"));
        }
        return list;
    }
}
